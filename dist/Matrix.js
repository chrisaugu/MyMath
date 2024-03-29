"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Matrix = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Matrix = /*#__PURE__*/function () {
  function Matrix(m, n) {
    _classCallCheck(this, Matrix);
    var M = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    var N = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    this.size = m * n;
  }
  _createClass(Matrix, [{
    key: "size",
    get: function get() {
      return this.size;
    }
  }, {
    key: "add",
    value: function add() {
      if (m * n > 2) {
        for (var i = 0; i < Things.length; i++) {
          Things[i];
        }
        ;
      }
      return new Error("Can't add one vector");
    }
  }, {
    key: "multiply",
    value: function multiply() {}

    /**
     * If A is any matrix, then the transpose of A, denoted by AT
    , is defined to be the matrix that results
    by interchanging the rows and columns of A; that is, the first column of AT
    is the first row of A, the second
    column of AT
    is the second row of A, and so forth.
     */
  }, {
    key: "transpose",
    value: function transpose() {
      var newMatrix = _createMatix(this.m, this.n);

      // iterate and swap the entries
      for (var i = 0; i < N.length; i++) {
        for (var j = 0; j < N[i].length; j++) {
          newMatrix[j][i] = N[i][j];
        }
      }
    }
  }, {
    key: "_createMatix",
    value: function _createMatix(m_size, n_size) {
      for (var i = 0; i < m_size; i++) {
        M[i] = [];
      }
    }
  }]);
  return Matrix;
}();
exports.Matrix = Matrix;
var Matrix2 = /*#__PURE__*/function () {
  function Matrix2(m, n) {
    _classCallCheck(this, Matrix2);
    var A = [];
    this.size = m * n;
  }
  _createClass(Matrix2, [{
    key: "size",
    get: function get() {
      return this.size;
    }
  }, {
    key: "add",
    value: function add(matrix1, matrix2) {}
  }, {
    key: "multiply",
    value: function multiply(matrix1, matrix2) {}
  }, {
    key: "subtract",
    value: function subtract(matrix1, matrix2) {}
  }, {
    key: "divide",
    value: function divide(matrix1, matrix2) {}
  }]);
  return Matrix2;
}();