"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserGroupsRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _db = require("../db");

var getUserGroupsRoute = {
  method: 'get',
  path: '/users/:id/groups',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, userId, user, userGroups;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              userId = req.params.id;
              _context.next = 4;
              return admin.auth().verifyIdToken(token);

            case 4:
              user = _context.sent;

              if (!(user.uid != userId)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                message: "Not authorized!"
              }));

            case 7:
              _context.next = 9;
              return (0, _db.getUserGroups)(userId);

            case 9:
              userGroups = _context.sent;
              res.status(200).json(userGroups);

            case 11:
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
exports.getUserGroupsRoute = getUserGroupsRoute;