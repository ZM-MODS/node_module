"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPossibleNumber;

var _getNumberType = require("./getNumberType.js");

var _isPossibleNumber_ = _interopRequireDefault(require("./isPossibleNumber_.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Checks if a given phone number is possible.
 * Which means it only checks phone number length
 * and doesn't test any regular expressions.
 *
 * Examples:
 *
 * ```js
 * isPossibleNumber('+78005553535', metadata)
 * isPossibleNumber('8005553535', 'RU', metadata)
 * isPossibleNumber('88005553535', 'RU', metadata)
 * isPossibleNumber({ phone: '8005553535', country: 'RU' }, metadata)
 * ```
 */
function isPossibleNumber() {
  var _normalizeArguments = (0, _getNumberType.normalizeArguments)(arguments),
      input = _normalizeArguments.input,
      options = _normalizeArguments.options,
      metadata = _normalizeArguments.metadata;

  return (0, _isPossibleNumber_["default"])(input, options, metadata);
}
//# sourceMappingURL=isPossibleNumber.js.map