"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Math formulars
 * (c) 2022, Christian Augustyn
 */
var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: "X",
    get: function get() {
      return this.x;
    },
    set: function set(x) {
      this.x = x;
    }
  }, {
    key: "Y",
    get: function get() {
      return this.y;
    },
    set: function set(y) {
      this.y = y;
    }
  }]);
  return Point;
}();
function Line() {
  var _this = this;
  this.p1 = new Point();
  this.p2 = new Point();
  this.setP1 = function (p) {
    _this.p1 = p;
  };
  this.setP2 = function (p) {
    _this.p2 = p;
  };
  this.getP1 = function () {
    return _this.p1;
  };
  this.getP2 = function () {
    return _this.p2;
  };
}
function dot(multicand, multiplier) {
  var el = [0, 0, 0];
  for (var i = 0; i < multicand.length; ++i) {
    for (var j = 0; j < multiplier.length; ++j) {
      el[i] += multicand[i][j] * multiplier[j];
    }
  }
  return el;
}
;
function calculateTurningPoint() {
  return {
    x: '',
    y: ''
  };
}
;
function xCoordinates() {
  return {
    x: '',
    y: 0
  };
}
;
function yCoordinates() {
  return {
    x: 0,
    y: ''
  };
}
;
function calculatePointOfIntersectioon() {
  return {
    x: '',
    y: ''
  };
}
;
function isPerpendicular(p1, p2) {
  return -1 === calculateGradient(p1, p2) * calculateGradient(p2, p1);
}
;
function isParallel() {
  if (true) {
    return true;
  }
  return false;
}
;
function isConcurrent(eqn, p) {
  return false;
}
;
function isCollinear(p1, p2, p3) {
  var m = new Array();
  var m1 = calculateGradient(p1, p2);
  var m2 = calculateGradient(p2, p3);
  if (m1 === m2) {
    return true;
  }
  ;
  return false;
}
;
function constructEquation(e) {

  // "y=3x+1" == "3x-y+1=0"

  // if (y[\-\+\=]?) {}
  // if (y[\-\+]?) {}
  // if (y[\-\+\=]?) {}
}
;
function calculateGradient(p1, p2) {
  var m = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  return m;
}
;
function calculateDistance(p1, p2) {
  var x1 = p1[0];
  var y1 = p1[1];
  var x2 = p2[0];
  var y2 = p2[1];
  // let d = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
  var d = pythagoreanTheorem(x2 - x1, y2 - y1);
  return d;
}
;
function pythagoreanTheorem(x, y) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
  return d;
}
;
function calculateMidPoint(p1, p2) {
  var x1 = p1[0];
  var y1 = p1[1];
  var x2 = p2[0];
  var y2 = p2[1];
  var x = (x1 + x2) / 2;
  var y = (y1 + y2) / 2;
  return {
    x: x,
    y: y
  };
}
;
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
;
// function factorial(n) {
// 	if (n == 0) return 1;
// 	while (n) {
// 		return n * factorial(n-1);
// 	}
// };

/**
 * Modulo function
 * % - modular operator
 */
function mod(m, n) {
  var a = m,
    b = n,
    c,
    r;
  r = Math.floor(a / b);
  c = r * b;
  return a - c;
}
;

/**
 * Used for calculating Greatest Common Denominator (GCD)
 * using Euclid's Algorithm
 */
function gcd(m, n) {
  if (n == 0) {
    return m;
  } else {
    return gcd(n, m % n);
  }
}
;

/**
 * Used for calculating Least Common Denominator (LCD)
 */
function lcd(m, n) {}
function rem(m, n) {}
function gcf(m, n) {}
function lcf(m, n) {}
function hcf(text1, text2) {
  var gcd = 1;
  if (text1 > text2) {
    text1 = text1 + text2;
    text2 = text1 - text2;
    text1 = text1 - text2;
  }
  if (text2 == Math.round(text2 / text1) * text1) {
    gcd = text1;
  } else {
    for (var i = Math.round(text1 / 2); i > 1; i = i - 1) {
      if (text1 == Math.round(text1 / i) * i) {
        if (text2 == Math.round(text2 / i) * i) {
          gcd = i;
          i = -1;
        }
      }
    }
  }
  return gcd;
}

/**
 * Lowest Common Multiple
 * LCM(a,b) = ( a × b) / GCF(a,b)
 */
function lcm(t1, t2) {
  var cm = 1;
  var f = hcf(t1, t2);
  cm = t1 * t2 / f;
  return cm;
}
function findRelativelyPrimes(m) {
  var _rel = [];
  for (var _i = 0; _i < m; _i++) {
    if (gcd(m, _i) == 1) {
      _rel.push(_i);
    }
    console.log("gcd(".concat(m, ", ").concat(_i, ")=").concat(gcd(m, _i)));
  }
  console.log('relatively primes of ' + m + ' = {' + _rel + '}');
}

// function deci2Bin(deci) {
// 	var temp = [];
// 	if (deci == 0) {
// 		return deci;
// 	}
// 	return deci2Bin(Math.floor(deci / 2)) % deci;
// };

function bin_2_dec(bin) {
  var r = null;
  var d = bin.length;
  for (var i = 0; i < bin.length; i++) {
    d -= 1;
    r += Math.pow(2, Number(bin[i]) * d) * Number(bin[i]);
  }
  return r;
}
;
function dec_2_bin(dec) {
  var i = dec;
  var r = [];
  while (dec > 0) {
    i = dec % 2;
    dec /= 2;
    dec = Math.floor(dec);
    r.push(i);
  }
  r.push(dec);
  return r.reverse().join('');
}
;
function dec_2_oct(dec) {}
function difference() {
  var diff = 0;
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }
  a.forEach(function (n) {
    diff += n;
  });
  return diff;
}
;
function summation() {
  var sum = 0;
  for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    a[_key2] = arguments[_key2];
  }
  a.forEach(function (n) {
    sum += n;
  });
  return sum;
}
;

// nth term: t = a + (n - 1) * d
function nthTerm(a, d, n) {
  return a + (n - 1) * d;
}
;

// t = 
function arithmeticProgression(a, b, n) {
  var sequences = [];
  var d = b - a;
  for (var i = 1; i <= n; i++) {
    var t = a + (i - 1) * d;
    sequences.push(t);
  }
  return sequences;
}
;
function geometricProgression(a, b, n) {
  var r = b / a;
  // -1 < r < 1
  if (!(-1 < r && r < 1)) return a * (Math.sqrt(r, n) - 1) / (r - 1);else return a * (1 - Math.sqrt(r, n)) / (1 - r);
}
;
function geometricSeries(seq) {
  // less than 1 means one element or none
  if (seq.length < 1) {
    throw new Error("Cannot determine the GP with only one element.");
  }
  if (seq[1] / seq[0] == seq[3] / seq[2]) {
    return summation.apply(void 0, _toConsumableArray(seq));
  }
}
;
function isSequenceArithmetic() {
  if (arguments.length < 2) {
    return "Cannot determine the common difference with only one element.";
  }
  if (arguments.length == 3) {
    return (arguments.length <= 1 ? undefined : arguments[1]) - (arguments.length <= 0 ? undefined : arguments[0]) == ((arguments.length <= 2 ? undefined : arguments[2]) - (arguments.length <= 0 ? undefined : arguments[0])) / 2;
  }
  if (arguments.length > 3) {
    return (arguments.length <= 1 ? undefined : arguments[1]) - (arguments.length <= 0 ? undefined : arguments[0]) == (arguments.length <= 3 ? undefined : arguments[3]) - (arguments.length <= 2 ? undefined : arguments[2]);
  }
}
;
function arithmeticSeries(seq) {
  // less than 1 means one element or none
  if (seq.length < 1) throw new Error("Cannot determine the AP with only one element.");
  if (seq[1] - seq[0] == seq[3] - seq[2]) return summation.apply(void 0, _toConsumableArray(seq));else throw new Error("Sequence is not arithmetic.");
}
;
function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}
;
function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}
;
function binomialExpansion(n) {
  var d = [];
  for (var i = 0; i < n + 1; i++) {
    var e = "".concat(combination(n, i), "(x)^").concat(n - i, "(y)^").concat(i);
    d.push(e);
  }
  ;
  return d.join(' + ');
}
;

// Graph: Equation of calculating the number of edges in a number of vertices
function numberOfEdgesOfVertex(v) {
  var n = v * (v + 1) / 2 - v;
  return n;
}
;

// Computes and output the result of the quadratic
function outputRoots(a, b, c) {
  var d = b * b - 4 * a * c;

  // Two real roots
  if (d > 0) {
    var sqrtd = Math.sqrt(d);
    console.log("There are two real roots " + eval((-b + sqrtd) / (2 * a)) + " and " + eval((-b - sqrtd) / (2 * a)));
  }
  // Both roots are the same
  else if (d == 0) {
    console.log("There is only one distinct root " + eval(-b / (2 * a)));
  }
  // Complex conjugate roots
  else {
    console.log("The roots are complex" + "\nThe real part is " + eval(-b / (2 * a)) + "\nThe imaginary part is " + eval(Math.sqrt(-d) / (2 * a)));
  }
}
function transpose(A) {
  var A = [[12, 7], [4, 5], [3, 8]];
  var T = [[0, 0, 0], [0, 0, 0]];
  for (var k = 0; k < A.length; k++) {
    for (var j = 0; j < A[0].length; j++) {
      T[j][k] = A[k][j];
    }
  }
  for (var _i2 = 0, _T = T; _i2 < _T.length; _i2++) {
    r = _T[_i2];
    return r;
  }
}
function __sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}
function train(inputs, outputs, num) {
  for (var iteration = 0; i < num; ++i) {
    output = think(inputs);
    error = outputs - output;
    // adjustment = dot(inputs.T, error * output * (1-output))
    adjustment = 0.01 * dot(matrix(inputs), error);
    weights += adjustment;
  }
}
function think(inputs) {
  return __sigmoid(dot(inputs, weights));
}

// inputs = [[1,1,1],[1,0,1],[0,1,1]];
// outputs = matrix([[1,1,0]])
// train(inputs, outputs, 10000);
// console.log(think(array([1,0,0])));