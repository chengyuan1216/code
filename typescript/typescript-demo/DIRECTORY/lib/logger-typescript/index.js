"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntryType;
(function (EntryType) {
    EntryType[EntryType["Error"] = 0] = "Error";
    EntryType[EntryType["Warning"] = 1] = "Warning";
    EntryType[EntryType["Info"] = 2] = "Info";
})(EntryType = exports.EntryType || (exports.EntryType = {}));
function logger(entry) {
    switch (entry.type) {
        case EntryType.Error: {
            console.error(entry.message);
            break;
        }
        case EntryType.Warning: {
            console.warn(entry.message);
            break;
        }
        case EntryType.Info: {
            console.info(entry.message);
            break;
        }
        default: {
            console.log(entry.message);
        }
    }
}
exports.logger = logger;
