"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Vector = /*#__PURE__*/function () {
  function Vector() {
    _classCallCheck(this, Vector);
  }
  _createClass(Vector, [{
    key: "size",
    get: function get() {}
  }, {
    key: "transpose",
    value: function transpose() {
      var newVector = _createVector(this.m);

      // iterate and swap the entries
      for (var i = 0; i < N.length; i++) {
        for (var j = 0; j < N[i].length; j++) {
          newVector[j][i] = N[i][j];
        }
      }
      return newVector;
    }
  }, {
    key: "_createVector",
    value: function _createVector(m_size, n_size) {
      for (var i = 0; i < m_size; i++) {
        M[i] = [];
      }
    }
  }]);
  return Vector;
}();
exports.Vector = Vector;