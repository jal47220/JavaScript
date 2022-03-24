"use strict"

var isBool = true;
console.log(typeof isBool + " : " + isBool);
console.log("");

var str = 'hello';
console.log(typeof str + " : " + str);
console.log("");

var name = 'lower';
var Name = 'capitalized';
var NAME = 'upper';
console.log(name + ", " + Name + ", " + NAME)
console.log("");

var num = 1.1;
console.log(typeof num + " : " + num);
console.log("");

var arr = [true, 2, 'three'];
console.log(typeof arr + " : " + arr);
console.log("");

var nan = NaN;
console.log(typeof nan + " : " + nan);
console.log("");

var nul = null;
var undef = undefined;
console.log(typeof nul + " : " + nul);
console.log(typeof undef + " : " + undef);
console.log(nul == undef);
console.log(nul === undef);
console.log("");

var obj = {
  name: 'name'
}
console.log(typeof obj + " :");
console.log(obj);
console.log("");

var dynType = 1;
console.log(typeof dynType + " : " + dynType);
dynType = "one";
console.log(typeof dynType + " : " + dynType);
console.log("");

console.log(typeof hoist + " : " + hoist);
hoist = 'hoist';
console.log(typeof hoist + " : " + hoist);
var hoist;
