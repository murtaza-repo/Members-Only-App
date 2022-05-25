"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessageRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../db");

var admin = _interopRequireWildcard(require("firebase-admin"));

var createMessageRoute = {
  method: 'post',
  path: '/groups/:id/messages',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, id, text, user, group, updatedMessages;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.headers.authtoken;
              id = req.params.id;
              text = req.body.text;
              _context.next = 5;
              return admin.auth().verifyIdToken(token);

            case 5:
              user = _context.sent;
              _context.next = 8;
              return (0, _db.getGroup)(id);

            case 8:
              group = _context.sent;

              if (!(!user || !group.members.includes(user.uid))) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                message: "User is not authorize to post messages in this group"
              }));

            case 11:
              _context.next = 13;
              return (0, _db.addMessageToGroup)(id, user.uid, text);

            case 13:
              _context.next = 15;
              return (0, _db.getMessagesForGroup)(id);

            case 15:
              updatedMessages = _context.sent;
              res.status(200).json(updatedMessages);

            case 17:
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
exports.createMessageRoute = createMessageRoute;