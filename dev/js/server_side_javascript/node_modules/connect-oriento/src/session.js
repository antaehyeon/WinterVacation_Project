"use strict";

var DBClass = require("oriento-odm").DBClass;
    
function Session(data) {
    DBClass.apply(this, arguments);
}

DBClass.subclass(Session);

module.exports = Session;
