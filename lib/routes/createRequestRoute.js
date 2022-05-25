"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRequestRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _db = require("../db");

var createRequestRoute = {
  method: 'post',
  path: '/groups/:id/requests',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, id, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              id = req.params.id;
              _context.next = 4;
              return admin.auth().verifyIdToken(token);

            case 4:
              user = _context.sent;

              if (!token || !user) {
                res.status(401).json({
                  message: "Must be logged in to submit requests"
                });
              }

              _context.next = 8;
              return (0, _db.createJoinRequest)(id, user.uid);

            case 8:
              res.status(200).json({
                message: "Success"
              });

            case 9:
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
exports.createRequestRoute = createRequestRoute;