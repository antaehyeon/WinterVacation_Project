var storeLib = require("../src");

var session = require('express-session'),
    assert = require("assert"),
    async = require("async");

var Session = require("../src/session");


describe("Test OrientoStore", function() {

    if (!process.env.TEST_ORIENTDB) {
        it("needs TEST_ORIENTDB env var defined in order to test DBClass");
        
        return;
    }
    
    // Format: host=localhost&port=2424&username=root&password=root&db=test
    var OrientoStore = undefined,
        cleanupStore= undefined,
        options = {
            server: process.env.TEST_ORIENTDB
        };

    before(function(done) {
        OrientoStore = storeLib(session);
        cleanupStore = new OrientoStore(options, done);
    });

    after(function(done) {
        Session.drop(cleanupStore._db, done);
    });

    it("can get non-existent record as empty object", function(done) {
        var store = new OrientoStore(merge({}, options));
        store.get("122342345345", function(err, session) {
            assert(session == null);
            done(err);
        })
    });

    it("can set and get sessions unhashed", function(done) {
        var store = new OrientoStore(merge({}, options));
        var sid1 = "asfhq3nwbf", sid2 = "bfngq438owf";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: 25 }, done);
            },
            function(session, done) {
                assert(25 == session.val);
                /* update with a new value */
                store.set(sid1, { cookie: {}, val: 26 }, done);
            },
            function(session, done) {
                assert(26 == session.val);
                store.get(sid1, done);
            },
            function(session, done) {
                assert(26 == session.val);
                store.set(sid2, { cookie: {}, val: 34 }, done);
            },
            function(session, done) {
                assert(34 == session.val);
                /* update with a new value */
                store.set(sid2, { cookie: {}, val: 35 }, done);
            },
            function(session, done) {
                assert(35 == session.val);
                store.get(sid2, done);
            },
            function(session, done) {
                assert(35 == session.val);
                Session.find(store._db, "1=1 order by id", done);
            },
            function(items, done) {
                assert(2 == items.length);
                assert(sid1 == items[0].id);
                assert(new Date() >= items[0].touched);
                assert(sid2 == items[1].id);
                assert(new Date() >= items[1].touched);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("can set and get sessions hashed", function(done) {
        var store = new OrientoStore(merge({ hash: { algorithm: "sha1", salt: "foo" } }, options));
        var sid1 = "asfhq3nwbf", sid2 = "bfngq438owf";
        var hSid1 = store._getHashedSid(sid1), hSid2 = store._getHashedSid(sid2);

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: 25 }, done);
            },
            function(session, done) {
                assert(25 == session.val);
                /* update with a new value */
                store.set(sid1, { cookie: {}, val: 26 }, done);
            },
            function(session, done) {
                assert(26 == session.val);
                store.get(sid1, done);
            },
            function(session, done) {
                assert(26 == session.val);
                store.set(sid2, { cookie: {}, val: 34 }, done);
            },
            function(session, done) {
                assert(34 == session.val);
                /* update with a new value */
                store.set(sid2, { cookie: {}, val: 35 }, done);
            },
            function(session, done) {
                assert(35 == session.val);
                store.get(sid2, done);
            },
            function(session, done) {
                assert(35 == session.val);
                Session.find(store._db, "1=1 order by session.id", done);
            },
            function(items, done) {
                assert(2 == items.length);
                assert(hSid1 == items[0].id);
                assert(new Date() >= items[0].touched);
                assert(hSid2 == items[1].id);
                assert(new Date() >= items[1].touched);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("can will purge expired only", function(done) {
        var store = new OrientoStore(merge({}, options));
        var sid1 = "asdlgertw3s", sid2 = "b3458wzfw4rt3";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: sid1 }, done);
            },
            function(session, done) {
                store.set(sid2, { cookie: {}, val: sid2 }, done);
            },
            function(session, done) {
                Session.findById(store._db, sid2, done);
            },
            function(dbInstance, done) {
                dbInstance.expiry = new Date(Date.now() - 10000);
                dbInstance.save(store._db, done);
            },
            function(dbInstance, done) {
                store._purgeExpired(done);
            },
            function(totalPurged, done) {
                assert(1 == totalPurged);
                Session.find(store._db, done);
            },
            function(items, done) {
                assert(1 == items.length);
                assert(sid1 == items[0].id);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("will purge on schedule", function(done) {
        var store = new OrientoStore(merge({ purgeInterval: 10 }, options));
        var sid1 = "asi347f8gf443", sid2 = "b34pwthalifg34";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: sid1 }, done);
            },
            function(session, done) {
                store.set(sid2, { cookie: {}, val: sid2 }, done);
            },
            function(session, done) {
                Session.findById(store._db, sid2, done);
            },
            function(dbInstance, done) {
                dbInstance.expiry = new Date(Date.now() - 10000);
                dbInstance.save(store._db, done);
            },
            function(dbInstance, done) {
                setTimeout(done, 25); // make sure we go over 1 purge iteration
            },
            function(done) {
                Session.find(store._db, done);
            },
            function(items, done) {
                assert(1 == items.length);
                assert(sid1 == items[0].id);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("can destroy sessions", function(done) {
        var store = new OrientoStore(merge({}, options));
        var sid1 = "ae5tzsergh54", sid2 = "bw4tqw54z35wr";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: sid1 }, done);
            },
            function(session, done) {
                store.set(sid2, { cookie: {}, val: sid2 }, done);
            },
            function(session, done) {
                store.destroy(sid1, done);
            },
            function(count, done) {
                assert(1 == count);
                Session.find(store._db, done);
            },
            function(items, done) {
                assert(1 == items.length);
                assert(sid2 == items[0].id);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });
    
    it("will touch only after interval", function(done) {
        var store = new OrientoStore(merge({ minTouchInterval: 500 }, options));
        var sid1 = "a45zseh5w45z";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: 25 }, done);
            },
            function(session, done) {
                setTimeout(done, 50);
            },
            function(done) {
                store.touch(sid1, {}, done);
            },
            function(when, done) {
                assert(49 < new Date() - when); // touch did not update
                setTimeout(done, 450);
            },
            function(done) {
                store.touch(sid1, {}, done);
            },
            function(when, done) {
                assert(499 > new Date() - when); // touched
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("can get the number of stored sessions", function(done) {
        var store = new OrientoStore(merge({}, options));
        var sid1 = "aertgaselbf348", sid2 = "bqw4ptrhgqfg";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: sid1 }, done);
            },
            function(session, done) {
                store.set(sid2, { cookie: {}, val: sid2 }, done);
            },
            function(session, done) {
                store.length(done);
            },
            function(count, done) {
                assert(2 == count);
                Session.delete(store._db, {}, done);
            }
        ], done);
    });

    it("can clear all sessions from the DB", function(done) {
        var store = new OrientoStore(merge({}, options));
        var sid1 = "asezegtg5seg", sid2 = "bw34twehgrzh";

        async.waterfall([
            function(done) {
                store.set(sid1, { cookie: {}, val: sid1 }, done);
            },
            function(session, done) {
                store.set(sid2, { cookie: {}, val: sid2 }, done);
            },
            function(session, done) {
                store.clear(done);
            },
            function(count, done) {
                assert(2 == count);
                store.length(done);
            },
            function(count, done) {
                assert(0 == count);
                done();
            }
        ], done);
    });

    // local utility 
    var merge = function(to, from, overwrite) {
        if (from instanceof Object) {
            for (var key in from) {
                if (from.hasOwnProperty(key) && (overwrite || !to[key])) {
                    to[key] = from [key];
                }
            }
        }
        return to;
    };


});

