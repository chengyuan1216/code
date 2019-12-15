"use strict";
var LoggerJs;
(function (LoggerJs) {
    var EntryType;
    (function (EntryType) {
        EntryType[EntryType["Error"] = 0] = "Error";
        EntryType[EntryType["Warning"] = 1] = "Warning";
        EntryType[EntryType["Info"] = 2] = "Info";
    })(EntryType = LoggerJs.EntryType || (LoggerJs.EntryType = {}));
})(LoggerJs || (LoggerJs = {}));
