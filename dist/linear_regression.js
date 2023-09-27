"use strict";

require("./math-fx");
// Simple Linear Regression

// var e = 0; // error
// var y = a + b*x;

// variable x
var x = [-2, -1, 0, 1, 2];
var y = [1, 1, 3, 5, 5];
var n = avg(x, y);

// means
var _x = x.reduce(function (e, f) {
  return e + f;
}) / x.length;
var _y = y.reduce(function (e, f) {
  return e + f;
}) / y.length;
var a = 0; // y-intercept
var b = 1; // slope of line

// best-fitting line - regression line
var y_ = function y_(x) {
  return a + b * x;
};

// probabilistic model
var y_model = function y_model(x) {
  return a + b * x + e;
};

// line of means
var B = [];
var u = function u(x) {
  return B[0] + B[1] * x;
};

// line of best-fit
var B_ = [];
var u_ = function u_(x) {
  return B_[0] + B_[1] * x;
};

// Least Squares Estimators of a and B
var S = [];
var bb = function bb(r, x, y) {
  return r * (S[y] / S[x]);
};
var aa = _y - bb * _x;

// Least Square Error
// let sum = 0;
// for (let i = 0; i < y.length; i++) {
// 	sum += (y[i] - y_[i]);
// }
var s = sum(y_model, y_, function (a, b) {
  return a - b;
});
var SSE = Math.pow(s, 2);

// Exy
var xy = sum(x, y_model, function (a, b) {
  return a * b;
});
var Sxy = sum(x, y_model) - sum(x) * sum(y_model) / n;
var xx = Math.pow(sum(x), 2);
var Sxx = 0;

/**
 * Summation
 */
function sum(a, b, cb) {
  if (a instanceof Array && b instanceof Function) {}
  if (a.length != b.length) {
    throw new Error("arrays must be of same size");
  }
  var s = 0;
  for (var i = 0; i < a.length; i++) {
    s += cb(a[i], b[i]);
  }
  return s;
}

/**
 * Average
 */
function avg(a, b) {
  if (!(a instanceof Array) && !(b instanceof Array)) {
    throw new Error("a and b must arrays");
  }
  return (a.length + b.length) / 2;
}