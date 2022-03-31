'use strict'

var person = {
  name: 'Josh',
  'currentAge': 26,
  details: {
    hairColor: 'brown',
    eyeColor: 'brown'
  },
  improperGreet: function() {
    console.log('Hi, my name is ' + name); 
  },
  properGreet: function() {
    console.log('Hi, my name is ' + this.name); 
  }
}
console.log('person description:');
console.log(person);
console.log('');

console.log('person["currentAge"]: ' + person['currentAge']);
console.log('person.details.hairColor: ' + person.details.hairColor);
console.log('');

console.log('calling improper, then proper greet:');
person.improperGreet();
person.properGreet();
console.log('');

person.name = 'Joshua';
console.log('calling proper greet (name changed to ' + person.name + '):');
person.properGreet();
console.log('');

console.log('var anotherPerson = Object.create(person)');
var anotherPerson = Object.create(person);
console.log('anotherPerson.name: ' + anotherPerson.name);
console.log('anotherPerson == person: ' + (anotherPerson == person));
console.log('anotherPerson.__proto__ == person: ' + (anotherPerson.__proto__ == person));
console.log('anotherPerson.__proto__.__proto__ == Object.prototype: ' + (anotherPerson.__proto__.__proto__ == Object.prototype));
console.log('Object.getPrototypeOf(anotherPerson) == person: ' + (Object.getPrototypeOf(anotherPerson) == person));
anotherPerson.name = 'Somebody';
console.log('calling proper greet (name changed to ' + anotherPerson.name + '):');
anotherPerson.properGreet();
console.log('');

console.log('person.__proto__: ' + person.__proto__);
console.log('person.toString(): ' + person.toString());
console.log('');

Object.prototype.greetProto = function () {
  console.log('Hi, my name is prototype');
}
console.log('calling person, then anotherPerson greetProto:');
person.greetProto();
anotherPerson.greetProto();
console.log('');

function Cat (type) {
  this.call = function () {
    console.log('mew');
  }
  this.getType = function () {
    console.log(this.type);
  }
  this.type = type;
}
Cat.prototype.call = function () {
  console.log('meow');
}

var cat = new Cat();
cat.type = 'tabby';
console.log('cat.type: ' + cat.type);
cat.call();
console.log('');

Cat.prototype.call();
console.log('cat.__proto__ == Cat.prototype: ' + cat.__proto__ == Cat.prototype)
console.log('cat instanceof Cat: ' + cat instanceof Cat);
console.log('');

var anotherCat = new Cat('siamese')
console.log('anotherCat.type: ' + anotherCat.type);
console.log('');

Object.defineProperty(cat, 'pattern', {
  value: 'no pattern',
  writable: true
});
console.log(cat.pattern);
cat.pattern = 'striped';
console.log(cat.pattern);
console.log('');

console.log('fields in cat object:');
for (const field in cat) {
  console.log(field + ': ' + cat[field]);
}
console.log('');

function fn (message) {
  console.log(message);
  console.log(this);
}
var obj = {
  _name: 'default',
  fn: fn
};
obj.fn('obj description:');
console.log('');

Object.defineProperty(obj, 'name', {
  get: function () {
    return this._name;
  },
  set: function (name) {
    if (name == 'obj') {
      this._name = name;
    }
  }
});
console.log(obj.name);
obj.name = 'Bob';
console.log(obj.name);
obj.name = 'obj';
console.log(obj.name);
console.log('');

console.log('_name in obj: ' + ('_name' in obj));
delete obj._name;
console.log('obj._name (after deletion): ' + obj._name);
console.log('_name in obj (after deletion): ' + ('_name' in obj));
console.log('');
  
obj.fn.bind(cat, 'cat object description (bind): ')();
console.log('');

obj.fn.call(cat, 'cat object description (call): ');
console.log('');

obj.fn.apply(cat, ['cat object description (apply): ']);
