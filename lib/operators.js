'use strict'

var bool = false;
var num = 1;
var arr = [2, 3];
var numStr = '4';
var str = 'five';
var float1 = 1.3;
var float2 = 2.2;

const UNDEF = undefined;
const NUL = null;
const NAN = NaN;
const INF = Infinity;
const ZERO = 0;
const ADD = 1;
const SUB = 2;
const MULT = 3;
const DIV = 4;

console.log(operateArith([bool, num, arr, numStr, str], ADD));
console.log(operateArith([num, numStr], ADD));
console.log(operateArith([NUL, bool, num], ADD));
console.log(operateArith([UNDEF, bool, num], ADD));
console.log('');

console.log(operateArith([numStr, num], SUB));
console.log(operateArith([numStr, str], SUB));
console.log('');

console.log(operateArith([float1, float2], MULT));
console.log(operateArith([float1, float2], MULT, true));
console.log(operateArith([numStr, str], MULT));
console.log(operateArith([num, NUL], MULT));
console.log(operateArith([num, INF], MULT));
console.log('');

console.log(operateArith([float1, float2], DIV));
console.log(operateArith([float1, float2], DIV, true));
console.log(operateArith([num, ZERO], DIV));
console.log(operateArith([num, INF], DIV));
console.log('');

console.log(bool + ' (' + typeof bool + ') == ' + ZERO + ' (' + typeof ZERO + '):');
console.log(bool == ZERO);
console.log(bool + ' (' + typeof bool + ') === ' + ZERO + ' (' + typeof ZERO + '):');
console.log(bool === ZERO);
console.log(bool + ' (' + typeof bool + ') != ' + ZERO + ' (' + typeof ZERO + '):');
console.log(bool != ZERO);
console.log(bool + ' (' + typeof bool + ') !== ' + ZERO + ' (' + typeof ZERO + '):');
console.log(bool !== ZERO);
console.log('');

console.log(num + ' (' + typeof num + ') >= && > ' + ZERO + ' (' + typeof ZERO + '),');
console.log(ZERO + ' (' + typeof ZERO + ') < && <= ' + num + ' (' + typeof num + '):');
console.log(num >= ZERO && num > ZERO && ZERO < num && ZERO <= num);
console.log('');

console.log(NAN + ' (' + typeof NAN + ') == ' + NAN + ' (' + typeof NAN + '):');
console.log(NAN == NAN);
console.log(ZERO + ' (' + typeof ZERO + ') == ' + NUL + ' (' + typeof NUL + ') ||');
console.log(ZERO + ' (' + typeof ZERO + ') == ' + UNDEF + ' (' + typeof UNDEF + '):');
console.log(ZERO == NUL || ZERO == UNDEF);
console.log(NUL + ' (' + typeof NUL + ') == ' + UNDEF + ' (' + typeof UNDEF + '):');
console.log(NUL == UNDEF);
console.log('');

console.log(bool + ' (' + typeof bool + ') == ' + ZERO + ' (' + typeof ZERO + ') ?:');
console.log(bool == ZERO ? 'Equal' : "Not equal");
console.log(bool + ' (' + typeof bool + ') != ' + ZERO + ' (' + typeof ZERO + ') ?:');
console.log(bool != ZERO ? 'Equal' : "Not equal");
console.log('');

console.log('(1 + 2 * 3):')
console.log(1 + 2 * 3);
console.log('((1 + 2) * 3):')
console.log((1 + 2) * 3);
console.log('(2 ** 2 % 3):')
console.log(2 ** 2 % 3);
console.log('(2 + 2 % 3):')
console.log(2 + 2 % 3);
console.log('(1 * ' + num + '++):')
console.log(1 * num++);

function operateArith(argArr, oper, isFixed) {
  console.log(getArgs(argArr, oper, isFixed));
  
  var output = argArr[0];
  switch (oper) {
    case ADD:
      for(var i = 1; i < argArr.length; i++){ output += argArr[i]; }
      break;
    case SUB:
      for(var i = 1; i < argArr.length; i++){ output -= argArr[i]; }
      break;
    case MULT:
      for(var i = 1; i < argArr.length; i++){ output *= argArr[i]; }
      break;
    case DIV: 
      for(var i = 1; i < argArr.length; i++){ output /= argArr[i]; }
      break;
    default:
      console.log('invalid operator');
  }
  
  if (isFixed) { output = output.toFixed(2); }
  
  return output;
}

function getArgs(argArr, oper, isFixed) {
  var returnArgs = 'Arguments: ';
  for(var i = 0; i < argArr.length; i++){
    returnArgs = returnArgs.concat(argArr[i] + ' (' + typeof argArr[i] + '), ');
  }
  
  switch (oper) {
    case 1:
      returnArgs = returnArgs.concat('ADD');
      break;
    case 2:
      returnArgs = returnArgs.concat('SUB');
      break;
    case 3:
      returnArgs = returnArgs.concat('MULT');
      break;
    case 4:
      returnArgs = returnArgs.concat('DIV');
      break;
    default:
      console.log('invalid operator');
  }
  
  if (isFixed) { returnArgs = returnArgs.concat(' (fixed)'); }
  
  return returnArgs;
}
