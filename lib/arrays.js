console.log('arr = [1, 2, 3]:');
var arr = [1, 2, 3];
var arrName = Object.keys({arr})[0];
logArray(arr, arrName);
console.log('');

console.log('arr[3] = 4:');
arr[3] = 4;
logArray(arr, arrName);
console.log('');

console.log('arr[5] = 6:');
arr[5] = 6;
logArray(arr, arrName);
console.log('');

console.log('arr.push(7):');
arr.push(7);
logArray(arr, arrName);
console.log('');

console.log('Popped ' + arr.pop() + ':');
logArray(arr, arrName);
console.log('');

console.log('arr.unshift(0):');
arr.unshift(0);
logArray(arr, arrName);
console.log('');

console.log('arr[arr.indexOf(1)] = 1.1:');
arr[arr.indexOf(1)] = 1.1;
logArray(arr, arrName);
console.log('');

console.log('subArr = arr.slice(2, 4):');
var subArr = arr.slice(2, 4);
var subArrName = Object.keys({subArr})[0];
logArray(subArr, subArrName);
logArray(arr, arrName);
console.log('');

console.log('subArr = arr.splice(2, 2):');
subArr = arr.splice(2, 2);
logArray(subArr, subArrName);
logArray(arr, arrName);
console.log('');

console.log('return values > 1 from arr:');
console.log(arr.filter(function(value) {
  return value > 1;
}));
console.log('');

console.log('new array with values in arr multiplied by 2:');
console.log(arr.map(function(value) {
  return value * 2;
}));
console.log('');

console.log('arr.reverse():');
arr.reverse();
logArray(arr, arrName);
console.log('');

console.log('arr.concat(subArr):');
console.log(arr.concat(subArr));
console.log('');

console.log('arr.join(":"):');
console.log(arr.join(":"));
console.log('');

console.log('sum values in arr:');
console.log(arr.reduce(function(total, value) {
  console.log('Total: ' + total + ', Value: ' + value);
  return total + value;
}));
console.log('');

function logArray(arr, name) {
  console.log(name + ' size: ' + arr.length);
  console.log(name + ' value: ' + arr);
  
  var elements = '';
  arr.forEach(function(element, i) {
    elements = elements.concat(element);
    if(i != arr.length - 1){
      elements = elements.concat(', ');
    }
  });
  console.log(name + ' elements: ' + elements);
}
