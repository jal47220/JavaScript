function testIfConditions (condition) {
  if (condition) {
    return 'this will execute if condition is true/non-zero/a string';
  } else if (true) {
    return 'this will execute if condition is false/zero/null';
  } else {
    process.exit;
    return 'this will never execute';
  }
}

var condition = -1;
console.log(condition + ' : ' + testIfConditions(condition));
condition = 0;
console.log(condition + ' : ' + testIfConditions(condition));
condition = true;
console.log(condition + ' : ' + testIfConditions(condition));
condition = false;
console.log(condition + ' : ' + testIfConditions(condition));
condition = 'false';
console.log(condition + ' : ' + testIfConditions(condition));
condition = null;
console.log(condition + ' : ' + testIfConditions(condition));
console.log('');

function testSwitchConditions (condition) {
  if(typeof condition == 'number'){
    switch (condition % 4) {
      case 0:
        return 'this will execute if x us 0 or x - 4 is a multiple of 4';
      case 1:
        return 'this will execute if x is 1 or x - 4 is a multiple of 1';
      case 2:
        return 'this will execute if x is 2 or x - 4 is a multiple of 2';
      case 3:
        return 'this will execute if x is 3 or x - 4 is a multiple of 3';
      default:
        return 'this will execute if x is a negative number';
    }
  }

  return 'this will execute if x is not a number'
}

condition = null;
console.log(condition + ' : ' + testSwitchConditions(condition));
for (var x = -1; x < 9; x++){
  console.log(x + ' : ' + testSwitchConditions(x));
}
console.log('');

function get3DCoordinates (length, height, width) {
  var coordinates = 'List of coordinates: ';
  var maxOutput = 100;
  var counter = 0;
  var exit = false;

  for (var i = 0; i <= length; i++) {
    if (exit) { break; }
    for (var j = 0; j <= height; j++) {
      if (exit) { break; }
      for (var k = 0; k <= width; k++) {
        counter++;
        if (counter == maxOutput){
          coordinates = coordinates.concat('[truncated due to size limit]');
          exit = true;
          break;
        }

        if (!(i == 0 && j == 0 && k == 0) || (i == length && j == length && k == length)){ 
          coordinates = coordinates.concat(', ');
        }

        coordinates = coordinates.concat('(' + i + ', ' + j + ', ' + k + ')');
      }
    }
  }
  return coordinates;
}

console.log(get3DCoordinates(4, 4, 4));
console.log('');
