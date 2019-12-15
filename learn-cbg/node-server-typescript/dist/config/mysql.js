"use strict";

const mysql = require('mysql'); // 数据库设置


const config = {
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'stockmgt'
};

class Mysql {
  constructor(cfg) {
    this.pool = null;
    this.config = cfg || config;
    this.createPool(this.config);
  }

  createPool(config) {
    this.pool = mysql.createPool(config);
  }

  getConnection() {
    if (!this.pool) {
      console.error('未创建数据连接池');
    }

    let connection = null;
    let connect = new Promise((reslove, reject) => {
      this.pool.getConnection(function (err, con) {
        if (err) {
          reject(err);
        }

        connection = con;
        reslove(con);
      });
    });
    connect.finally(() => {
      try {
        connection && connection.release();
      } catch (e) {
        console.error('connection.release() 执行异常');
      }
    });
    return connect;
  }

} // 保存实例


let instance = null;

Mysql.getInstance = () => instance;

Mysql.getConnection = () => instance.getConnection();

Mysql.init = () => {
  if (!instance) {
    instance = new Mysql();
    console.log("\u521D\u59CB\u5316 mysql \u6210\u529F");
  }
};

module.exports = Mysql;