'use strict'

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
  return 'returned hello!';
}
var returned = returnHello();
console.log(returned);
newLine();

var globalVar = 'global';
function getScope() {
  var localVar = 'local';
  return globalVar + ', ' + localVar;
}
console.log(getScope());
newLine();

function concatArgs(str1, str2) {
  console.log(getArgs(arguments));
  return str1 + ', ' + str2;
}
console.log(concatArgs('hello', 'world', 'ignored'));
newLine();

function funcAsVar() {
  return 'I am both a variable and a function!';
}
var varAsFunc = funcAsVar;
console.log(varAsFunc());
newLine();

function dynTypeCalc(var1, var2) {
  console.log(getArgs(arguments));
  return var1 + var2;
}
console.log(dynTypeCalc(true, false));
console.log(dynTypeCalc(null, null));
console.log(dynTypeCalc(undefined, undefined));
console.log(dynTypeCalc([1, 2], [3, 4]));
console.log(dynTypeCalc(1, 2));
console.log(dynTypeCalc('h', 'i'));
newLine();

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
