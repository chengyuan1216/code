"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _context = _interopRequireDefault(require("./context"));

var _mysql = _interopRequireDefault(require("./config/mysql"));

var _env = _interopRequireDefault(require("./config/env"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

// 系统模块
const app = (0, _express.default)();
app.set('express', _express.default);
app.use(_bodyParser.default.json());

_context.default.init(app);

_mysql.default.init();

app.listen(_env.default.port, () => {
  console.log("\u670D\u52A1\u542F\u52A8\u6210\u529F ==> http://".concat(_env.default.hostname, ":").concat(_env.default.port, "/"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiYXBwIiwic2V0IiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwiY29udGV4dCIsImluaXQiLCJteXNxbCIsImxpc3RlbiIsImVudiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiaG9zdG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFMQTtBQU9BLE1BQU1BLEdBQVksR0FBRyx1QkFBckI7QUFDQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsU0FBUixFQUFtQkMsZ0JBQW5CO0FBRUFGLEdBQUcsQ0FBQ0csR0FBSixDQUFRQyxvQkFBV0MsSUFBWCxFQUFSOztBQUVBQyxpQkFBUUMsSUFBUixDQUFhUCxHQUFiOztBQUNBUSxlQUFNRCxJQUFOOztBQUVBUCxHQUFHLENBQUNTLE1BQUosQ0FBV0MsYUFBSUMsSUFBZixFQUFxQixNQUFNO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsMkRBQWlDSCxhQUFJSSxRQUFyQyxjQUFpREosYUFBSUMsSUFBckQ7QUFDQSxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiLy8g57O757uf5qih5Z2XXHJcbmltcG9ydCBleHByZXNzLCB7IEV4cHJlc3MgfSBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICcuL2NvbnRleHQnXHJcbmltcG9ydCBteXNxbCBmcm9tICcuL2NvbmZpZy9teXNxbCdcclxuaW1wb3J0IGVudiBmcm9tICcuL2NvbmZpZy9lbnYnXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5cclxuY29uc3QgYXBwOiBFeHByZXNzID0gZXhwcmVzcygpXHJcbmFwcC5zZXQoJ2V4cHJlc3MnLCBleHByZXNzKVxyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcclxuXHJcbmNvbnRleHQuaW5pdChhcHApXHJcbm15c3FsLmluaXQoKVxyXG5cclxuYXBwLmxpc3RlbihlbnYucG9ydCwgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGDmnI3liqHlkK/liqjmiJDlip8gPT0+IGh0dHA6Ly8ke2Vudi5ob3N0bmFtZX06JHtlbnYucG9ydH0vYClcclxufSkiXX0=