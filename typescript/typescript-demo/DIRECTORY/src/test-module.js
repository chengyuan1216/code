"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../types/logger.d.ts"/>
var index_logger_1 = __importStar(require("../lib/logger/index!logger"));
//logger('hhh') //报错
var entry = {
    message: 'hello typescript!!',
    type: index_logger_1.EntryType.Error
};
index_logger_1.default(entry);
