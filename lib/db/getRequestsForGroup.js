"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequestsForGroup = void 0;

var _db = require("./db");

var _getUser = require("./getUser");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getRequestsForGroup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(groupId) {
    var connection, requests, usersForRequests, populatedRequests;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            connection = _db.db.getConnection();
            _context.next = 3;
            return connection.collection('requests').find({
              groupId: groupId
            }).toArray();

          case 3:
            requests = _context.sent;
            _context.next = 6;
            return Promise.all(requests.map(function (request) {
              return (0, _getUser.getUser)(request.userId);
            }));

          case 6:
            usersForRequests = _context.sent;
            populatedRequests = requests.map(function (request, i) {
              return _objectSpread(_objectSpread({}, request), {}, {
                userName: usersForRequests[i].fullName
              });
            });
            return _context.abrupt("return", populatedRequests);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRequestsForGroup(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRequestsForGroup = getRequestsForGroup;