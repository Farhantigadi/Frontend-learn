//named iffe
(function chai() {
    console.log("connected");

})();

//unamed iffe
(() => {
    console.log("connected two");

})();


((name) => {
    console.log(`${name} connected `);

})("farhan");

(function () {
    console.log('This is an IIFE');
})();



//Without IFFE vs With IFFE

//Here, a and b are declared in the global scope. Even though sum is declared inside the calculateSum function, it does not pollute the global scope directly. However, a and b are still accessible globally.
var a = 5;
var b = 10;

function calculateSum() {
    var sum = a + b;
    console.log(sum);
}

calculateSum(); // Output: 15
console.log(sum); // ReferenceError: sum is not defined


//In this case, a, b, and sum are declared within an IIFE. Since the IIFE is executed immediately, it performs the calculation and logs the result. However, because the variables are within the IIFE's local scope, they are not accessible outside of it. Therefore, any attempt to access a, b, or sum outside the IIFE will result in a ReferenceError.
(function () {
    var a = 5;
    var b = 10;
    var sum = a + b;
    console.log(sum); // Output: 15
})();

console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(sum); // ReferenceError: sum is not defined

