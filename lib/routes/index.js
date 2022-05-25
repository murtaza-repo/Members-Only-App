"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _acceptRequestRoute = require("./acceptRequestRoute");

var _createGroupRoute = require("./createGroupRoute");

var _createRequestRoute = require("./createRequestRoute");

var _createMessageRoute = require("./createMessageRoute");

var _getAllGroupsRoute = require("./getAllGroupsRoute");

var _getGroupRoute = require("./getGroupRoute");

var _getGroupMessagesRoute = require("./getGroupMessagesRoute");

var _getJoinGroupRequestsRoute = require("./getJoinGroupRequestsRoute");

var _getUserGroupsRoute = require("./getUserGroupsRoute");

var _rejectRequestRoute = require("./rejectRequestRoute");

var routes = [_acceptRequestRoute.acceptRequestRoute, _createGroupRoute.createGroupRoute, _createRequestRoute.createRequestRoute, _createMessageRoute.createMessageRoute, _getAllGroupsRoute.getAllGroupsRoute, _getGroupRoute.getGroupRoute, _getGroupMessagesRoute.getGroupMessagesRoute, _getJoinGroupRequestsRoute.getJoinGroupRequestsRoute, _getUserGroupsRoute.getUserGroupsRoute, _rejectRequestRoute.rejectRequestRoute];
exports.routes = routes;