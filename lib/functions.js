'use strict'

console.log('Calling ' + hoistedHello.name + ':');
hoistedHello();
function hoistedHello() {
  console.log('hoisted hello!');
}
newLine();

function returnHello() {
  return 'returned hello!';
}
console.log('Calling ' + returnHello.name + ':');
var returned = returnHello();
console.log(returned);
newLine();

var globalVar = 'global';
function getScope() {
  var localVar = 'local';
  return globalVar + ', ' + localVar;
}
console.log('Calling ' + getScope.name + ':');
console.log(getScope());
newLine();

function concatArgs(str1, str2) {
  console.log(getArgs(arguments));
  return str1 + ', ' + str2;
}
console.log('Calling ' + concatArgs.name + ':');
console.log(concatArgs('hello', 'world', 'ignored'));
newLine();

function funcAsVar() {
  return 'I am both a variable and a function!';
}
var varAsFunc = funcAsVar;
console.log('Calling ' + varAsFunc.name + ':');
console.log(varAsFunc());
newLine();

function dynTypeCalc(var1, var2) {
  console.log(getArgs(arguments));
  return var1 + var2;
}
console.log('Calling ' + dynTypeCalc.name + ' (multiple times):');
console.log(dynTypeCalc(true, false));
console.log(dynTypeCalc(null, null));
console.log(dynTypeCalc(undefined, undefined));
console.log(dynTypeCalc([1, 2], [3, 4]));
console.log(dynTypeCalc(1, 2));
console.log(dynTypeCalc('h', 'i'));
newLine();

function newLine() {
  console.log('');
}

function getArgs(argArr) {
  var returnArgs = 'Arguments: ';
  for(var i = 0; i < argArr.length; i++){
    returnArgs = returnArgs.concat(argArr[i]);
    if(i != argArr.length - 1){
      returnArgs = returnArgs.concat(', ');
    }
  }
  return returnArgs;
}

function generator (input) {
  var number = input;
  return function() {
    return number * 2;
  }
}

var calc = generator(900);
var calc2 = generator(1000);
console.log(calc());
newLine();

var gen = generator;
console.log(gen.name);
console.log(gen.length);
newLine();

(function iife(msg) {
  var local;
  console.log(msg)
})('this code is immediately executed');
console.log('intentional error:');
console.log(local);
newLine();
