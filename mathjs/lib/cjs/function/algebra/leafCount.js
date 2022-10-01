"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLeafCount = void 0;

var _factory = require("../../utils/factory.js");

var name = 'leafCount';
var dependencies = ['parse', 'typed'];
var createLeafCount = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var parse = _ref.parse,
      typed = _ref.typed;

  // This does the real work, but we don't have to recurse through
  // a typed call if we separate it out
  function countLeaves(node) {
    var count = 0;
    node.forEach(function (n) {
      count += countLeaves(n);
    });
    return count || 1;
  }
  /**
   * Gives the number of "leaf nodes" in the parse tree of the given expression
   * A leaf node is one that has no subexpressions, essentially either a
   * symbol or a constant. Note that `5!` has just one leaf, the '5'; the
   * unary factorial operator does not add a leaf. On the other hand,
   * function symbols do add leaves, so `sin(x)/cos(x)` has four leaves.
   *
   * The `simplify()` function should generally not increase the `leafCount()`
   * of an expression, although currently there is no guarantee that it never
   * does so. In many cases, `simplify()` reduces the leaf count.
   *
   * Syntax:
   *
   *     leafCount(expr)
   *
   * Examples:
   *
   *     math.leafCount('x') // 1
   *     math.leafCount(math.parse('a*d-b*c')) // 4
   *     math.leafCount('[a,b;c,d][0,1]') // 6
   *
   * See also:
   *
   *     simplify
   *
   * @param {Node|string} expr    The expression to count the leaves of
   *
   * @return {number}  The number of leaves of `expr`
   *
   */


  return typed(name, {
    Node: function Node(expr) {
      return countLeaves(expr);
    }
  });
});
exports.createLeafCount = createLeafCount;