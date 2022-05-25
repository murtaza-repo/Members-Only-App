"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJoinRequest = void 0;

var _uuid = require("uuid");

var _db = require("./db");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createJoinRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(groupId, userId) {
    var connection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            connection = _db.db.getConnection();
            _context.next = 3;
            return connection.collection('requests').insertOne({
              id: (0, _uuid.v4)(),
              groupId: groupId,
              userId: userId
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createJoinRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createJoinRequest = createJoinRequest;