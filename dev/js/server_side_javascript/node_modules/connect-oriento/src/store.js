"use strict";

var async = require("async"),
    crypto = require("crypto"),
    util = require("util"),
    oriento = require("oriento");

var Session = require("./session"),
    defaults = require("./defaults");
    
var INIT = -2,
    DISCONNECTED = -1,
    CONNECTING = 0,
    CONNECTED = 1;


var initForSession = function(connect, callback) {
    var Store = connect.Store || connect.session.Store;

    function OrientoStore(options, callback) {
        try {
            Store.call(this, defaults.ensureGenericStoreOptions(options));
    
            this._options = defaults.ensureOrientoStoreOptions(options);
            this._setState(INIT);
            this._ensureConnection();
        } catch(err) {
            if (callback) {
                callback(err);
                return;
            } else {
                throw err;
            }
        }
        
        /* ensure DB has the class and the index on id */
        this._ensureDBClass(callback);
        
        /* setup purge scheduler */
        setInterval(function(store) { store._purgeExpired(); }, this._options.purgeInterval, this);

        /* ugly Oriento issue of connection timeout */
        var interval = this._options.pingInterval;
        /* init DB ping to now */
        this._db.ping = new Date();
        setInterval(pingDb, interval, this._db, interval);
    }

    util.inherits(OrientoStore, Store);

    OrientoStore.prototype.get = function(sid, callback) {
        var self = this, db = self._db;
        sid = self._getHashedSid(sid);
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                Session.findById(db, sid, function(err, dbInstance) {
                    var session = null;
                    if (!err && dbInstance) {
                        session = JSON.parse(dbInstance.session || "{}");
                        if (!session.cookie) {
                            session = null;
                            err = new Error("persisted session is expected to have a cookie");
                        }
                    }
                    done(err, session);
                });
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype.set = function(sid, session, callback) {
        var self = this, db = self._db;
        sid = self._getHashedSid(sid);
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                done(!(session && session.cookie) ? new Error("session is expected to have a cookie") : null);
            },
            function(done) {
                Session.findById(db, sid, done);
            },
            function(dbInstance, done) {
                if (!dbInstance) {
                    // new session, otherwise update
                    dbInstance = new Session({ id: sid });
                }
                dbInstance.session = JSON.stringify(session);
                dbInstance.touched = new Date();
                dbInstance.expiry = self._computeExpiry(session);
                dbInstance.save(db, function(err, dbInstance) {
                    var session = {};
                    if (!err && dbInstance) {
                        session = JSON.parse(dbInstance.session || "{}");
                        if (!session.cookie) {
                            session = null;
                            err = new Error("persisted session is expected to have a cookie");
                        }
                    }
                    done(err, session);
                });
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype.touch = function(sid, session, callback) {
        var self = this, db = self._db;
        sid = self._getHashedSid(sid);
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                Session.findById(db, sid, done);
            },
            function(dbInstance, done) {
                done(!(dbInstance && dbInstance.session) ? new Error("can only touch already persisted session") : null, dbInstance);
            },
            function(dbInstance, done) {
                var now = new Date();
                if (now - dbInstance.touched < self._options.minTouchInterval) {
                    // do not touch if interval too small
                    return done(null, dbInstance.touched);
                }
                dbInstance.touched = now;
                dbInstance.expiry = self._computeExpiry(session);
                dbInstance.save(db, function(err) {
                    done(err, now);
                });
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype.destroy = function(sid, callback) {
        var self = this, db = self._db;
        sid = self._getHashedSid(sid);
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                Session.delete(db, { id: sid }, done);
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype.length = function(callback) {
        var self = this, db = self._db;
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                db.select("count(*)").from(Session.name).scalar().then(function(total) {
                    done(null, total);
                }).catch(done);
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype.clear = function(callback) {
        var self = this, db = self._db;
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                Session.delete(db, {}, done);
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype._ensureConnection = function(callback) {
        var self = this;
        if (!callback) {
            callback = defaults.returnOneCallback;
        }
        if (self._state == CONNECTED && self._db) {
            return callback(null, self._db);
        }
        /* ignore that we may be already connecting */
        self._setState(CONNECTING);
        var err;
        try {
            self._db = oriento(self._options.server).use(self._options.server.db);
            self._setState(CONNECTED);
        } catch(ex) {
            err = ex;
            self._setState(DISCONNECTED);
        }
        return callback(err, self._db);
    };

    OrientoStore.prototype._ensureDBClass = function(callback) {
        var self = this, db = self._db,
            idIndexName = Session.name + ".id";
        return async.waterfall([
            function(done) {
                done(self._state < CONNECTED ? new Error("disconnected from the DB") : null);
            },
            function(done) {
                db.class.get(Session.name).then(function(DBSessionClass) {
                    done(null, DBSessionClass);
                }).catch(function() {
                    db.class.create(Session.name, "V").then(function(DBSessionClass) {
                        console.log("created " + Session.name + " cluster");
                        done(null, DBSessionClass);
                    }).catch(done);
                });
            },
            function(DBSessionClass, done) {
                DBSessionClass.property.get("id").then(function(prop) {
                    if (prop == null) {
                        DBSessionClass.property.create({ name: 'id', type: 'String' }).then(function() {
                            console.log("created " + idIndexName + " property");
                            done(null, DBSessionClass);
                        }).catch(done);
                    } else {
                        done(null, DBSessionClass);
                    }
                });
            },
            function(DBSessionClass, done) {
                db.index.get(idIndexName).then(function(){
                    done(null, DBSessionClass);
                }).catch(function() {
                    db.index.create({ name: idIndexName, type: 'unique'}).then(function() {
                        console.log("created " + idIndexName + " index");
                        done(null);
                    }).catch(done);
                });
            }
        ], callback || defaults.returnOneCallback);
    };

    OrientoStore.prototype._getHashedSid = function(sid) {
        var hash = this._options.hash;
        if (hash) {
            return crypto.createHash(hash.algorithm).update(hash.salt + sid).digest('hex');
        } else {
            return sid;
        }
    };

    OrientoStore.prototype._setState = function(state) {
        var event;
        switch (state) {
            case DISCONNECTED:
                event = "disconnected";
                break;
            case CONNECTING:
                event = "connecting";
                break;
            case CONNECTED:
                event = "connected";
                break;
            default:
                event = "init";
        }
        this.emit(event);
        this._state = state;
    };

    OrientoStore.prototype._computeExpiry = function(session) {
        if (session && session.cookie && session.cookie.expires) {
            return new Date(session.cookie.expires);
        }
        return new Date(Date.now() + this._options.maxAge);
    };

    OrientoStore.prototype._purgeExpired = function(callback) {
        var self = this, db = self._db;
        callback = callback || defaults.returnOneCallback;
        db.query("DELETE VERTEX WHERE expiry < :date AND @class=:clazz", {
            params: {
                date: new Date(),
                clazz: Session.name
            }
        }).then(function(total) {
            callback(null, total);
        }).catch(callback);
    };

    return OrientoStore;
};


module.exports = initForSession;


/**
 * @deprecated Oriento drops the binary connection, 
 * so keep this one until the issue is resolved
 */
var pingDb = function(db, interval) {
    var now = new Date();
    // do not ping the same DB multiple times
    if (now - db.ping >= interval) {
        db.ping = now;
        db.query("SELECT FROM OUser").then(function() {
        }).catch(function(err) {
            console.error(err);
        });
    }
};
