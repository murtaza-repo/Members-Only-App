"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _mongodb = require("mongodb");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DB_NAME = 'members-only';
var db = {
  _dbClient: null,
  connect: function () {
    var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var client;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _mongodb.MongoClient.connect(url, {
                poolSize: 10,
                useNewUrlParser: true,
                useUnifiedTopology: true
              });

            case 2:
              client = _context.sent;
              this._dbClient = client;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function connect(_x) {
      return _connect.apply(this, arguments);
    }

    return connect;
  }(),
  getConnection: function getConnection() {
    if (!this._dbClient) {
      console.log('You need to call .connect() first!');
      process.exit(1);
    }

    return this._dbClient.db(DB_NAME);
  }
};
exports.db = db;