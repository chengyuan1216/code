"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../types/logger.ts"/>
var index_1 = __importDefault(require("../lib/logger/index"));
var log = index_1.default;
// log('hhh') 报错
log({
    message: 'hello typescript!!'
});
