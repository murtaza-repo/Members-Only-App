"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rejectRequestRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../db");

var admin = _interopRequireWildcard(require("firebase-admin"));

var rejectRequestRoute = {
  method: 'post',
  path: '/groups/:groupId/requests/:requestId/reject',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, _req$params, groupId, requestId, group, user, updatedRequests;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              _req$params = req.params, groupId = _req$params.groupId, requestId = _req$params.requestId;
              _context.next = 4;
              return (0, _db.getGroup)(groupId);

            case 4:
              group = _context.sent;
              _context.next = 7;
              return admin.auth().verifyIdToken(token);

            case 7:
              user = _context.sent;

              if (!(!user || group.ownerId !== user.uid)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                message: "User is not the owner of group"
              }));

            case 10:
              _context.next = 12;
              return (0, _db.rejectRequest)(requestId);

            case 12:
              _context.next = 14;
              return (0, _db.getRequestsForGroup)(groupId);

            case 14:
              updatedRequests = _context.sent;
              res.status(200).json(updatedRequests);

            case 16:
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
exports.rejectRequestRoute = rejectRequestRoute;