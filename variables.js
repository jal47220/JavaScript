"use strict"

var bool = true;
console.log(typeof bool + " : " + bool);
console.log("");

var str = 'hello';
console.log(typeof str + " : " + str);
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
};
console.log(typeof obj + " :");
console.log(obj);
console.log("");

var dyntype = 1;
console.log(typeof dyntype + " : " + dyntype);
dyntype = "one";
console.log(typeof dyntype + " : " + dyntype);
console.log("");

console.log(typeof hoist + " : " + hoist);
hoist = 'hoist';
console.log(typeof hoist + " : " + hoist);
var hoist;
