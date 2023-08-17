const person = {
  isHuman: true,
};

// const child = Object.create(person);
// child.maxAge = 18;

// const child = Object.assign(Object.create(person), { maxAge: 18 });

// const child = { maxAge: 18 };
// Object.setPrototypeOf(child, person); // Browser is not well optimized for this. It's slow.

// const child = {
//   maxAge: 18,
//   __proto__: person
// };

// const child = Object.create(person, {
//   maxAge: {
//     value: 18,
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   },
// });
//
// const john = Object.create(child);
// john.name = 'John';
// console.log(john.__proto__.__proto__);
// console.log(Object.getPrototypeOf(john));
//
// console.log(child.isHuman); // true
//
// const funcProto = Object.getPrototypeOf(() => {});
// console.log(Object.getOwnPropertyNames(funcProto));
//
// function Person(name: string): void {
//   this.name = name;
// }
//
// Person.prototype = {
//   constructor: Person,
//   isHuman: true
// };
//
// const conner = new Person('Conner');
// const clement = new Person('Clement');
//
// Person.prototype.speak = function() {
//   console.log('Hello this is ', this.name);
//   console.log(this.isHuman);
// };
//
// console.log(conner instanceof Object);
// console.log(clement instanceof Person);

class Person {
  static isHuman = true;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log('Hello this is ', this.name);
  }
}

