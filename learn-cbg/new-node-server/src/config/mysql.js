"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
// 数据库设置
var config = {
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'learn_cbg'
};
var Mysql = /** @class */ (function () {
    function Mysql(cfg) {
        this.pool = null;
        this.config = cfg || config;
        this.createPool(this.config);
    }
    Mysql.prototype.createPool = function (config) {
        this.pool = mysql_1.default.createPool(config);
    };
    Mysql.prototype.getConnection = function () {
        var _this = this;
        if (!this.pool) {
            console.error('未创建数据连接池');
        }
        var connection = null;
        var connect = new Promise(function (reslove, reject) {
            _this.pool.getConnection(function (err, con) {
                if (err) {
                    reject(err);
                }
                connection = con;
                reslove(con);
            });
        });
        connect.finally(function () {
            try {
                connection && connection.release();
            }
            catch (e) {
                console.error('connection.release() 执行异常');
            }
        });
        return connect;
    };
    return Mysql;
}());
exports.default = Mysql;
// 保存实例
var instance = null;
Mysql.getInstance = function () { return instance; };
Mysql.getConnection = function () { return instance.getConnection(); };
Mysql.init = function () {
    if (!instance) {
        instance = new Mysql();
        console.log("\u521D\u59CB\u5316 mysql \u6210\u529F");
    }
};
