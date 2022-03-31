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

console.log(person);
console.log('');

console.log(person['currentAge']);
console.log(person.details.hairColor);
console.log('');

person.improperGreet();
person.properGreet();
console.log('');

person.name = 'Joshua';
person.properGreet();
console.log('');

var anotherPerson = Object.create(person);
console.log(anotherPerson.name);
console.log(anotherPerson == person);
console.log(anotherPerson.__proto__ == person);
console.log(anotherPerson.__proto__.__proto__ == Object.prototype);
console.log(Object.getPrototypeOf(anotherPerson) == person);
anotherPerson.name = 'Somebody';
anotherPerson.properGreet();
console.log('');

console.log(person.__proto__);
console.log(person.toString());
console.log('');

Object.prototype.greetProto = function () {
  console.log('Hi, my name is prototype');
}
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
console.log(cat.type);
cat.call();
console.log('');

Cat.prototype.call();
console.log(cat.__proto__ == Cat.prototype)
console.log(cat instanceof Cat);
console.log('');

var anotherCat = new Cat('siamese')
console.log(anotherCat.type);
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

obj.fn.bind(cat, 'cat object description (bind): ')();
console.log('');

obj.fn.call(cat, 'cat object description (call): ');
console.log('');

obj.fn.apply(cat, ['cat object description (apply): ']);
console.log('');

Object.defineProperty(cat, 'pattern', {
  value: 'no pattern',
  writable: true
});
console.log(cat.pattern);
cat.pattern = 'striped';
console.log(cat.pattern);
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

console.log('_name' in obj);
delete obj._name;
console.log(obj._name);
console.log('_name' in obj);
console.log('');

for (const field in cat) {
  console.log(field + ': ' + cat[field]);
}
console.log('');
