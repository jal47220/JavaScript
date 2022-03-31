'use strict'

const isBool = true;
console.log(typeof isBool + ' : ' + isBool);
console.log('');

const str = 'hello';
console.log(typeof str + ' : ' + str);
console.log('');

const name = 'lower';
const Name = 'capitalized';
const NAME = 'upper';
console.log(name + ', ' + Name + ', ' + NAME)
console.log('');

const num = 1.1;
console.log(typeof num + ' : ' + num);
console.log('');

const arr = [true, 2, 'three'];
console.log(typeof arr + ' : ' + arr);
console.log('');

const NAN = NaN;
console.log(typeof NAN + ' : ' + NAN);
console.log('');

const NUL = null;
const UNDEF = undefined;
console.log(typeof NUL + ' : ' + NUL);
console.log(typeof UNDEF + ' : ' + UNDEF);
console.log(NUL == UNDEF);
console.log(NUL === UNDEF);
console.log('');

const obj = {
  name: 'name'
}
console.log(typeof obj + ' :');
console.log(obj);
console.log('');

var dynType = 1;
console.log(typeof dynType + ' : ' + dynType);
dynType = 'one';
console.log(typeof dynType + ' : ' + dynType);
console.log('');

console.log(typeof hoist + ' : ' + hoist);
hoist = 'hoist';
console.log(typeof hoist + ' : ' + hoist);
var hoist;
