"use strict";

function isEqual(p1, p2) {
  return p1[0] == p2[0] && p1[1] == p2[1];
}
function mod(a, p) {
  if (a < 0) {
    var e = a % p;
    return e + p;
  } else {
    return a % p;
  }
}
function modInverse(a, p) {
  return Math.pow(a, p - 2) % p;
}
function findEEC(p1, p2, a, b, p) {
  var s, x3, y3;
  if (isEqual(p1, p2)) {
    var m = 3 * Math.pow(p1[0], 2) + a;
    var n = 2 * p1[1];
    if (Number.isInteger(m / n)) {
      s = m / n % p;
    } else {
      s = modInverse(n, p) * a % p;
    }
  } else {
    var _m = p2[1] - p1[1]; // y2-y1
    var _n = p2[0] - p1[0]; // x2-x1
    if (Number.isInteger(_m / _n)) {
      s = _m / _n % p;
    } else {
      s = modInverse(_n, p);
    }
  }
  console.log(s);
  x3 = mod(Math.pow(s, 2) - p1[0] - p2[0], p);
  console.log(x3);
  y3 = mod(s * (p1[0] - x3) - p1[1], p);
  console.log(y3);
  return [x3, y3];
}
;