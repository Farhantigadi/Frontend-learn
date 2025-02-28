// Example 1: Basic Object Properties
const person = {
  name: "John Doe",
  age: 25,
  city: "New York",
  isStudent: false
};

console.log(person.name); // Output: John Doe
console.log(person["age"]); // Output: 25
console.log(person.age); // Fixed this line to access 'age'

// Example 2: Nested Objects and Arrays
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  engine: {
    type: "V6",
    horsepower: 300
  },
  features: ["GPS", "Bluetooth", "Backup Camera"]
};

console.log(car.engine.type); // Output: V6
console.log(car.features[1]); // Output: Bluetooth

// Example 3: Adding Methods to Objects
const person1 = {
  name: "John Doe",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person1.greet(); // Output: Hello, my name is John Doe!

// Iterating Over Object Properties
for (let key in person1) {
  console.log(`${key}: ${person1[key]}`);
}
// Output:
// name: John Doe
// age: 25
// greet: function() { ... }

// Object Destructuring
const { name, age } = person1;
console.log(name); // Output: John Doe
console.log(age); // Output: 25

// Merging Objects Using Object.assign()
const details = {
  occupation: "Software Engineer",
  hobbies: ["Reading", "Traveling"]
};

const fullProfile = Object.assign({}, person1, details);
console.log(fullProfile);
// Output: { name: "John Doe", age: 25, greet: [Function], occupation: "Software Engineer", hobbies: ["Reading", "Traveling"] }

// Accessing Object Keys, Values, and Entries
console.log(Object.keys(person1)); // Output: ["name", "age", "greet"]
console.log(Object.values(person1)); // Output: ["John Doe", 25, [Function]]
console.log(Object.entries(person1)); // Output: [["name", "John Doe"], ["age", 25], ["greet", [Function]]]

// Using 'this' in Object Methods
const car1 = {
  brand: "Toyota",
  start: function() {
    console.log(`Starting the ${this.brand}...`);
  }
};

car1.start(); // Output: Starting the Toyota...

// Making Objects Immutable
const frozenObj = Object.freeze({ a: 1, b: 2 });
frozenObj.a = 3; // This won't work
console.log(frozenObj); // Output: { a: 1, b: 2 }

const sealedObj = Object.seal({ x: 10, y: 20 });
sealedObj.x = 100; // This works
sealedObj.z = 30; // This won't work
console.log(sealedObj); // Output: { x: 100, y: 20 }

// Optional Chaining
const user = {
  profile: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};

console.log(user.profile?.address?.city); // Output: New York
console.log(user.profile?.contact?.phone); // Output: undefined (no error)

// Practise: Creating an Object for a Book
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book.getSummary());
// Output: The Great Gatsby was written by F. Scott Fitzgerald in 1925.

// Advanced: Factory Functions
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I'm ${this.name} with ${this.age}!`);
    }
  };
}

const alice = createPerson("Alice", 30);
alice.greet(); // Output: Hello, I'm Alice!

// Advanced: Classes and Objects
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof!

// Advanced: Symbols as Object Keys
const id = Symbol("id");
const user1 = {
  [id]: 123,
  name: "John"
};

console.log(user1[id]); // Output: 123
console.log(user1.name); // Output: John
console.log(user1.id);//undefined

