"use strict"

function newLine() {
  console.log('');
}
newLine();

hoistedHello();
function hoistedHello() {
  console.log('hoisted hello!');
}
newLine();

function returnHello() {
  return "returned hello!";
}
var returned = returnHello();
console.log(returned);
newLine();

var globalVar = 'global';
function returnScope() {
  var localVar = 'local';
  return globalVar + ", " + localVar;
}
console.log(returnScope());
newLine();

function concatArgs(str1, str2) {
  return str1 + ", " + str2;
}
console.log(concatArgs('hello', 'world', 'ignored'));
newLine();

function funcAsVar() {
  return "I am both a variable and a function!";
}
var varAsFunc = funcAsVar;
console.log(varAsFunc());
newLine();

function dynTypeCalc(var1, var2) {
  return var1 + var2;
}
console.log(dynTypeCalc(true, false));
console.log(dynTypeCalc(null, null));
console.log(dynTypeCalc(undefined, undefined));
console.log(dynTypeCalc([1, 2], [3, 4]));
console.log(dynTypeCalc(1, 2));
console.log(dynTypeCalc('h', 'i'));
newLine();
