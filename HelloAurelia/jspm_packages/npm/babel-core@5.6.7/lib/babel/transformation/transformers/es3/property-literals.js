/* */ 
"format cjs";
"use strict";

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _types = require("../../../types");

var t = _interopRequireWildcard(_types);

var metadata = {
  group: "builtin-trailing"
};

exports.metadata = metadata;
var visitor = {
  Property: {
    exit: function exit(node) {
      var key = node.key;
      if (!node.computed && t.isIdentifier(key) && !t.isValidIdentifier(key.name)) {
        // default: "bar" -> "default": "bar"
        node.key = t.literal(key.name);
      }
    }
  }
};
exports.visitor = visitor;