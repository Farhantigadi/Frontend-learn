const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // 'this' refers to the 'user' object
    }
}

// user.welcomeMessage()  // Output: "hitesh , welcome to website"
// user.username = "sam"
// user.welcomeMessage()  // Output: "sam , welcome to website"

// console.log(this);  // In Node.js: {}, In Browser: window object

// Regular Function
function chai() {
    let username = "hitesh"
    console.log(this.username);  // 'this' is undefined in a regular function
}

// chai();  // Output: undefined

// Function Expression
const chaiFunc = function () {
    let username = "hitesh"
    console.log(this.username);  // 'this' is still undefined
}

// chaiFunc();  // Output: undefined

// Arrow Function
const chaiArrow = () => {
    let username = "hitesh"
    console.log(this);  // 'this' refers to the outer lexical scope (global scope in Node.js, window in browsers)
}

// chaiArrow();  // Output: {} in Node.js, window in Browser

// Arrow Function with Implicit Return
const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));  // Output: 7

// Arrow Function with Parentheses (Implicit Return)
const addTwoParens = (num1, num2) => (num1 + num2);

// console.log(addTwoParens(3, 4));  // Output: 7

// Arrow Function Returning an Object
const addTwoObject = (num1, num2) => ({ username: "hitesh" });

console.log(addTwoObject(3, 4));  // Output: { username: "hitesh" }

// Using forEach Loop on an Array
const myArray = [2, 5, 3, 7, 8];

// myArray.forEach((element) => {
//     console.log(element);  // Prints each element in the array one by one
// });
