"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var admin = _interopRequireWildcard(require("firebase-admin"));

var _db = require("../db");

var getGroupRoute = {
  method: 'get',
  path: '/groups/:id',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, id, user, group, ownerPopulatedGroup, memberPopulatedGroup;
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

              if (!(!user || !token)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                message: "Must be logged in to request group info"
              }));

            case 7:
              _context.next = 9;
              return (0, _db.getGroup)(id);

            case 9:
              group = _context.sent;

              if (!(group.ownerId === user.uid)) {
                _context.next = 15;
                break;
              }

              _context.next = 13;
              return (0, _db.getOwnerPopulatedGroup)(id);

            case 13:
              ownerPopulatedGroup = _context.sent;
              return _context.abrupt("return", res.status(200).json(ownerPopulatedGroup));

            case 15:
              if (!group.members.includes(user.uid)) {
                _context.next = 20;
                break;
              }

              _context.next = 18;
              return (0, _db.getMemberPopulatedGroup)(id);

            case 18:
              memberPopulatedGroup = _context.sent;
              return _context.abrupt("return", res.status(200).json(memberPopulatedGroup));

            case 20:
              res.status(200).json(group);

            case 21:
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
exports.getGroupRoute = getGroupRoute;