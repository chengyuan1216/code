"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ENTRY_TYPE = {
    ERROR: 'error',
    WARING: 'waring',
    INFO: 'info'
};
function logger(entry) {
    switch (entry.type) {
        case ENTRY_TYPE.ERROR: {
            console.error(entry.message);
            break;
        }
        case ENTRY_TYPE.WARING: {
            console.warn(entry.message);
            break;
        }
        case ENTRY_TYPE.INFO: {
            console.info(entry.message);
            break;
        }
        default: {
            console.log(entry.message);
        }
    }
}
exports.default = logger;
