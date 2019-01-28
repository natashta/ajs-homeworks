'use strict'
var arr = [74989, 74990, 74990, 62000, 58480, 61800];

var sorted = arr.sort(function(a,b){return b-a;});
var max = sorted[0];
var middle = sorted.slice(0, 3).reduce((a, b) => a + b, 0)/3;

console.log(max);
console.log(middle);
