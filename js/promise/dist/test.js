"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("./promise"));
new promise_1.default(function (resolve, reject) {
    setTimeout(() => {
        resolve('123');
    });
}).then(function (data) {
    console.log(data);
    return 'ok';
}, function (data) {
    console.log(data);
    return 'ok1';
}).then(function (data) {
    console.log(data);
});
