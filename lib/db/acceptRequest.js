"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptRequest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var acceptRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(requestId) {
    var connection, request;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            connection = _db.db.getConnection();
            _context.next = 3;
            return connection.collection('requests').findOne({
              id: requestId
            });

          case 3:
            request = _context.sent;
            _context.next = 6;
            return connection.collection('requests').deleteOne({
              id: requestId
            });

          case 6:
            _context.next = 8;
            return connection.collection('groups').updateOne({
              id: request.groupId
            }, {
              $push: {
                members: request.userId
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function acceptRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.acceptRequest = acceptRequest;