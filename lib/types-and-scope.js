'use strict'

var a = 1;
var b = a;
console.log(a + ' | ' + b);
a = 2;
console.log(a + ' | ' + b);
console.log('');

var x = { value:3 };
var y = x;
console.log(x.value + ' | ' + y.value);
x.value = 4;
console.log(x.value + ' | ' + y.value);
console.log('');

var arr1 = [1, 2, 3]
var arr2 = arr1;
console.log(arr1 + ' | ' + arr2);
arr1.push(4);
console.log(arr1 + ' | ' + arr2);
arr1 = [3, 2, 1]
console.log(arr1 + ' | ' + arr2);
console.log('');

var text = 'global';
function scopeTest () {
  console.log('2: ' + text);
  text = 'local';
  console.log('3: ' + text);
  var text = 'local'
  console.log('4: ' + text);
}
function scopeTest2 () {
  console.log('6: ' + text);
}
function scopeTest3 () {
  text = 'local';
}
console.log('1: ' + text);
scopeTest();
console.log('5: ' + text);
scopeTest2();
scopeTest3();
console.log('7: ' + text);
