"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroupRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _db = require("../db");

var createGroupRoute = {
  method: 'post',
  path: '/groups',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, name, user, newGroupId;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              name = req.body.name;

              if (!token) {
                res.status(401).json({
                  message: "Must be authenticated to create new Groups"
                });
              }

              _context.next = 5;
              return admin.auth().verifyIdToken(token);

            case 5:
              user = _context.sent;
              _context.next = 8;
              return (0, _db.createGroup)(name, user.uid);

            case 8:
              newGroupId = _context.sent;
              res.status(200).json({
                newGroupId: newGroupId
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
};
exports.createGroupRoute = createGroupRoute;