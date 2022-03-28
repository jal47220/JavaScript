'use strict'

var hex = 'F00001';
var parsed = parseInt(hex, 16);
console.log(typeof hex + ' : ' + hex)
console.log(typeof parsed + ' : ' + parsed)
console.log('');

var num = 10.3;
var numStr = num.toString();
var numFixed = num.toFixed();
console.log(typeof num + ' : ' + num);
console.log(typeof numStr + ' : ' + numStr);
console.log(typeof numFixed + ' : ' + numFixed);
console.log('');

var str = ' text  ';
console.log('var str = " text. "');
console.log('str.length: ' + str.length);
console.log('str[2]: ' + str[2]);
console.log('str.charAt(2): ' + str.charAt(2));
console.log('str.concat(" and more text "): ' + str.concat(' and more text'));
console.log('str.toUpperCase(): ' + str.toUpperCase());
console.log('str.split("t"): ' + str.split('t'));
console.log('str.trim("t"): ' + str.trim('t'));
console.log('');

var pi = Math.PI;
var e = Math.E;
var neg = -1
var float = 1.234
console.log('Math.PI: ' + pi);
console.log('Math.E: ' + e);
console.log('Math.abs(' + neg + '): '+ Math.abs(neg));
console.log('Math.round(' + float + '): '+ Math.round(float));
console.log('Math.ceil(' + float + '): '+ Math.ceil(float));
console.log('Math.floor(' + float + '): '+ Math.floor(float));
console.log('Math.exp(' + float + '): '+ Math.exp(float));
console.log('Math.log(' + float + '): '+ Math.log(float));
console.log('Math.max() for above vars: '+ Math.max(pi, e, neg, float));
console.log('Random number between e and pi: ' + (Math.random() * (pi - e) + e));
console.log('Random integer between 0 and 100: ' + Math.floor(Math.random() * 100 + 1));
console.log('');

var timestamp = new Date();
var birthday = new Date(1995, 7, 2);
var fakeDay = new Date(2022, 12, 32);
function appendOrdinalSuffix (number) {
  if (number == 1 || (number % 10 == 1 && number != 11)) { return number + 'st'; }
  else if (number == 2  || (number % 10 == 2 && number != 12)) { return number + 'nd'; }
  else if (number == 3  || (number % 10 == 3 && number != 13)) { return number + 'rd'; }
  else { return number + 'th'; }
}
function getDayOfWeek (dayNum) {
  switch (dayNum) {
    case 0: return 'Sunday'; case 1: return 'Monday'; case 2: return 'Tuesday'; case 3: return 'Wednesday';
    case 4: return 'Thursday'; case 5: return 'Friday'; case 6: return 'Saturday';
  }
}
function getMonthName (monthNum) {
  switch (monthNum) {
    case 0: return 'January'; case 1: return 'February'; case 2: return 'March'; case 3: return 'April';
    case 4: return 'May'; case 5: return 'June'; case 6: return 'July'; case 7: return 'August';
    case 8: return 'September'; case 9: return 'October'; case 10: return 'November'; case 11: return 'December';
  }
}
console.log('current timestamp: ' + timestamp.toString());
console.log('fancy timestamp: Presently, it is the ' + appendOrdinalSuffix(timestamp.getMilliseconds()) + 
            ' millisecond of the ' + appendOrdinalSuffix(timestamp.getSeconds()) + 
            ' second of the ' + appendOrdinalSuffix(timestamp.getMinutes()) + 
            ' minute of the ' + appendOrdinalSuffix(timestamp.getHours()) + 
            ' hour of ' + getDayOfWeek(timestamp.getDay()) + ', the ' + appendOrdinalSuffix(timestamp.getDate()) + 
            ' of ' + getMonthName(timestamp.getMonth()) + ', ' + timestamp.getFullYear());  
console.log('birthday: ' + birthday.toString());
console.log('milliseconds lived: ' + (timestamp - birthday));
console.log('fake date (rolled over): ' + fakeDay.toString());
console.log('');

var str2 = 'abcdef';
var pattern = /bcd/;
console.log(pattern + ' in ' + str2 + '?: ' + pattern.test(str2));
console.log('pattern.exec(str2).value == str2.match(pattern).value: ' + 
            (pattern.exec(str2).value == str2.match(pattern).value));
console.log('');

var i = 0;
var interval = setInterval(spinner, 500);
function spinner () {
  i++;
  if (i == 1) { console.log('loading...'); }
  if (i % 4 == 0) { console.log('/'); }
  else if (i % 4 == 1) { console.log('-'); }
  else if (i % 4 == 2) { console.log('\\'); }
  else { console.log('|'); }
}
setTimeout(function () {
  clearInterval(interval);
  console.log('done loading');
}, 3000);
console.log('');
