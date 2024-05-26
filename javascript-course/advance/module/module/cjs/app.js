//app.js
//解構賦值
/*
const { add, subtract } = require("./calculate");
const { add:add2 } = require("./calculate2");
const {PI,E} = require('./constants');

console.log(PI);
console.log(E);
console.log(add(2,3));
console.log(subtract(5,3));
*/

const calculate = require("./calculate");
const constants = require("./constants");

console.log(constants.PI);
console.log(constants.E);
console.log(calculate.add(2, 3));
console.log(calculate.subtract(5, 3));
