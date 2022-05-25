"use strict";

var _require = require('body-parser'),
    json = _require.json;

var fs = require('fs');

var fakeData = require('./fake-data');

Object.keys(fakeData).forEach(function (key) {
  fs.writeFileSync("".concat(key, ".json"), JSON.stringify(fakeData[key]), 'utf-8');
});
console.log("Done!");