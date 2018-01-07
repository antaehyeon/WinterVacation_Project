"use strict";

var oriento = require("oriento"),
    qs = require("qs");

var ORIENT_DEFAULTS = {
        minTouchInterval: 1000,        // 1 second
        pingInterval: 1000 * 60,       // 1 minute
        purgeInterval: 1000 * 600,     // 10 minutes
        maxAge: 1000 * 3600 * 24 * 10, // 10 days
        hash: false
    };

exports.ensureGenericStoreOptions = function(options) {
    var incoming = options || {},
        res = {};
    for (var key in incoming) {
        if (incoming.hasOwnProperty(key) && !ORIENT_DEFAULTS[key] && key != "server") {
            res[key] = incoming[key];
        }
    }
    return res;
};

exports.ensureOrientoStoreOptions = function(options) {

    var incoming = options || {},
        res = {};
    for (var key in ORIENT_DEFAULTS) {
        res[key] = incoming[key] || ORIENT_DEFAULTS[key];
    }

    /* the following mandatory fields do not have defaults */
    if (incoming.server) {
        res.server = typeof incoming.server == "string" ? qs.parse(incoming.server) : incoming.server;
    } else {
        throw new Error("'server' configuration missing");
    }

    if (res.hash && !(res.hash.algorithm && res.hash.salt)) {
        throw new Error("supply 'algorithm' and 'code' to enable SID hashing");
    }

    /* test connection */
    oriento(res.server).use(res.server.db);

    return res;
};

exports.returnOneCallback = function(err, data) {
    if (err) {
        throw err;
    }
    return data;
};
