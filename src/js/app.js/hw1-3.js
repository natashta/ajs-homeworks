'use strict'
let arr = [74989, 74990, 74990, 62000, 58480, 61800];

let sorted = arr.sort(function(a,b){return b-a;});
const max = sorted[0];
const middle = (sorted[0] + sorted[1] + sorted[2])/3;

console.log(max);
console.log(middle);
