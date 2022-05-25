"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _uuid = require("uuid");

var _db = require("./db");

var createGroup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(groupName, userId) {
    var connection, newGroupId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            connection = _db.db.getConnection();
            newGroupId = (0, _uuid.v4)();
            _context.next = 4;
            return connection.collection('groups').insertOne({
              id: newGroupId,
              name: groupName,
              ownerId: userId,
              members: [userId]
            });

          case 4:
            return _context.abrupt("return", newGroupId);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createGroup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createGroup = createGroup;