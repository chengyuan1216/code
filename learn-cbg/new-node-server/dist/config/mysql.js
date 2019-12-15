"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

// 数据库设置
var config = {
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'learn_cbg'
};

class Mysql {
  constructor(cfg) {
    this.pool = null;
    this.config = cfg || config;
    this.createPool(this.config);
  }

  createPool(config) {
    this.pool = _mysql.default.createPool(config);
  }

  getConnection() {
    if (!this.pool) {
      console.error('未创建数据连接池');
    }

    var connection = null;
    var connect = new Promise((reslove, reject) => {
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


exports.default = Mysql;
var instance = null;

Mysql.getInstance = () => instance;

Mysql.getConnection = () => instance.getConnection();

Mysql.init = () => {
  if (!instance) {
    instance = new Mysql();
    console.log("\u521D\u59CB\u5316 mysql \u6210\u529F");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbXlzcWwudHMiXSwibmFtZXMiOlsiY29uZmlnIiwiY29ubmVjdGlvbkxpbWl0IiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwiTXlzcWwiLCJjb25zdHJ1Y3RvciIsImNmZyIsInBvb2wiLCJjcmVhdGVQb29sIiwibXlzcWwiLCJnZXRDb25uZWN0aW9uIiwiY29uc29sZSIsImVycm9yIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJQcm9taXNlIiwicmVzbG92ZSIsInJlamVjdCIsImVyciIsImNvbiIsImZpbmFsbHkiLCJyZWxlYXNlIiwiZSIsImluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJpbml0IiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNkQyxFQUFBQSxlQUFlLEVBQUUsRUFESDtBQUVkQyxFQUFBQSxJQUFJLEVBQUUsV0FGUTtBQUdkQyxFQUFBQSxJQUFJLEVBQUUsTUFIUTtBQUlkQyxFQUFBQSxRQUFRLEVBQUUsUUFKSTtBQUtkQyxFQUFBQSxRQUFRLEVBQUU7QUFMSSxDQUFmOztBQVFlLE1BQU1DLEtBQU4sQ0FBWTtBQU8xQkMsRUFBQUEsV0FBVyxDQUFDQyxHQUFELEVBQVk7QUFDdEIsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLVCxNQUFMLEdBQWNRLEdBQUcsSUFBSVIsTUFBckI7QUFDQSxTQUFLVSxVQUFMLENBQWdCLEtBQUtWLE1BQXJCO0FBQ0E7O0FBRURVLEVBQUFBLFVBQVUsQ0FBQ1YsTUFBRCxFQUFjO0FBQ3ZCLFNBQUtTLElBQUwsR0FBWUUsZUFBTUQsVUFBTixDQUFpQlYsTUFBakIsQ0FBWjtBQUNBOztBQUVEWSxFQUFBQSxhQUFhLEdBQUc7QUFDZixRQUFJLENBQUMsS0FBS0gsSUFBVixFQUFnQjtBQUFFSSxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxVQUFkO0FBQTJCOztBQUM3QyxRQUFJQyxVQUFlLEdBQUcsSUFBdEI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUM5QyxXQUFLVixJQUFMLENBQVVHLGFBQVYsQ0FBd0IsVUFBVVEsR0FBVixFQUFvQkMsR0FBcEIsRUFBOEI7QUFDckQsWUFBSUQsR0FBSixFQUFTO0FBQ1JELFVBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0E7O0FBQ0RMLFFBQUFBLFVBQVUsR0FBR00sR0FBYjtBQUNBSCxRQUFBQSxPQUFPLENBQUNHLEdBQUQsQ0FBUDtBQUNBLE9BTkQ7QUFPQSxLQVJhLENBQWQ7QUFTQUwsSUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCLE1BQU07QUFDckIsVUFBSTtBQUNIUCxRQUFBQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ1EsT0FBWCxFQUFkO0FBQ0EsT0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNYWCxRQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywyQkFBZDtBQUNBO0FBQ0QsS0FORDtBQU9BLFdBQU9FLE9BQVA7QUFDQTs7QUFyQ3lCLEMsQ0F3QzNCOzs7O0FBQ0EsSUFBSVMsUUFBYSxHQUFHLElBQXBCOztBQUNBbkIsS0FBSyxDQUFDb0IsV0FBTixHQUFvQixNQUFNRCxRQUExQjs7QUFDQW5CLEtBQUssQ0FBQ00sYUFBTixHQUFzQixNQUFNYSxRQUFRLENBQUNiLGFBQVQsRUFBNUI7O0FBR0FOLEtBQUssQ0FBQ3FCLElBQU4sR0FBYSxNQUFNO0FBQ2xCLE1BQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2RBLElBQUFBLFFBQVEsR0FBRyxJQUFJbkIsS0FBSixFQUFYO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ2UsR0FBUjtBQUNBO0FBQ0QsQ0FMRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdteXNxbCdcclxuXHJcbi8vIOaVsOaNruW6k+iuvue9rlxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0Y29ubmVjdGlvbkxpbWl0OiA1MCxcclxuXHRob3N0OiAnbG9jYWxob3N0JyxcclxuXHR1c2VyOiAncm9vdCcsXHJcblx0cGFzc3dvcmQ6ICcxMjM0NTYnLFxyXG5cdGRhdGFiYXNlOiAnbGVhcm5fY2JnJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeXNxbCB7XHJcblx0cHJpdmF0ZSBwb29sOiBhbnlcclxuXHRwcml2YXRlIGNvbmZpZzogYW55XHJcblx0cHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZTogYW55XHJcblx0cHVibGljIHN0YXRpYyBnZXRDb25uZWN0aW9uOiBhbnlcclxuXHRwdWJsaWMgc3RhdGljIGluaXQ6IGFueVxyXG5cclxuXHRjb25zdHJ1Y3RvcihjZmc/OiBhbnkpIHtcclxuXHRcdHRoaXMucG9vbCA9IG51bGxcclxuXHRcdHRoaXMuY29uZmlnID0gY2ZnIHx8IGNvbmZpZ1xyXG5cdFx0dGhpcy5jcmVhdGVQb29sKHRoaXMuY29uZmlnKVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlUG9vbChjb25maWc6IGFueSkge1xyXG5cdFx0dGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbChjb25maWcpXHJcblx0fVxyXG5cclxuXHRnZXRDb25uZWN0aW9uKCkge1xyXG5cdFx0aWYgKCF0aGlzLnBvb2wpIHsgY29uc29sZS5lcnJvcign5pyq5Yib5bu65pWw5o2u6L+e5o6l5rGgJykgfVxyXG5cdFx0bGV0IGNvbm5lY3Rpb246IGFueSA9IG51bGxcclxuXHRcdGxldCBjb25uZWN0ID0gbmV3IFByb21pc2UoKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbiAoZXJyOiBhbnksIGNvbjogYW55KSB7XHJcblx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycilcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29ubmVjdGlvbiA9IGNvblxyXG5cdFx0XHRcdHJlc2xvdmUoY29uKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdGNvbm5lY3QuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29ubmVjdGlvbiAmJiBjb25uZWN0aW9uLnJlbGVhc2UoKVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcignY29ubmVjdGlvbi5yZWxlYXNlKCkg5omn6KGM5byC5bi4JylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBjb25uZWN0XHJcblx0fVxyXG59XHJcblxyXG4vLyDkv53lrZjlrp7kvotcclxubGV0IGluc3RhbmNlOiBhbnkgPSBudWxsXHJcbk15c3FsLmdldEluc3RhbmNlID0gKCkgPT4gaW5zdGFuY2VcclxuTXlzcWwuZ2V0Q29ubmVjdGlvbiA9ICgpID0+IGluc3RhbmNlLmdldENvbm5lY3Rpb24oKVxyXG5cclxuXHJcbk15c3FsLmluaXQgPSAoKSA9PiB7XHJcblx0aWYgKCFpbnN0YW5jZSkge1xyXG5cdFx0aW5zdGFuY2UgPSBuZXcgTXlzcWwoKVxyXG5cdFx0Y29uc29sZS5sb2coYOWIneWni+WMliBteXNxbCDmiJDlip9gKVxyXG5cdH1cclxufVxyXG4iXX0=