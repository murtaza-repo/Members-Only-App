"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _credentials = _interopRequireDefault(require("./credentials.json"));

var _db = require("./db");

var _routes = require("./routes");

admin.initializeApp({
  credential: admin.credential.cert(_credentials["default"])
});
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.use(_bodyParser["default"].json());

_routes.routes.forEach(function (route) {
  app[route.method](route.path, route.handler);
});

var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.db.connect('mongodb+srv://murtaza:spPFPKTICNXmJzgv@cluster0.kkyjt.mongodb.net/test');

          case 2:
            if (process.env.NODE_ENV === 'production') {
              app.use(_express["default"]["static"]('client/build'));
              app.get('*', function (req, res) {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
              });
            }

            app.listen(PORT, function () {
              console.log("Server is listening on port ".concat(PORT));
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

start();