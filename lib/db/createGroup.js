"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = void 0;

var _uuid = require("uuid");

var _db = require("./db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createGroup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(groupName, userId) {
    var connection, newGroupId;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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