// console.log("hello geeks");
// const a = "67";
// const b = 67;
// console.log(Number(a)); //67
// console.log(String(b)); //67
// console.log(Boolean("")); //false
// console.log(Boolean(0)); //false
// console.log(Boolean(a)); //true
// console.log(Boolean(b)); //true
// console.log(40 == "40"); // equality - checks value
// console.log(40 === "40"); // strict equality - checks reference with typeof argument
// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(null == 0); // false - null is not zero in equality operation
// console.log(null >= 0); // null becomes 0 when any comparision operator is used
// console.log(undefined == 0); // false - undefined is undefined in equality operation
// console.log(undefined >= 0); // false - undefined is undefined in comparision operation too
// if(boolean prefered) // true - executed but false, null, undefined - not executed
// console.log("executed");

/**
 * a program that compares 3 string and print the smallest one

const str1 = "applee";
const str2 = "banana";
const str3 = "watermelon";

if (str1.length < str2.length && str1.length < str3.length) console.log(str1);
else if (str2.length < str3.length && str2.length < str1.length)
console.log(str2);
else if (str3.length < str1.length && str3.length < str2.length)
console.log(str3);
else console.log("two or more strings has same length");
*/

// short circuiting :
// const userName = firstName || nickName || "Hidden User" // if user doest not enter anything, hidden user will assigned to userName as OR returns first truthy value
// let a = 12; let b; console.log(a + ( b || 0 )); // if b is not given any value --> undefined --> OR will return last fallacy value and 12 + 0 will be returned

// val1 || val2 || val3 --> OR operator returns first truthy value if overall condition becomes true --- also OR operator returns last fallacy value if overall condition becomes false

// val1 && val2 && val3 --> AND operator returns last truthy value if overall condition becomes true --- also AND operator returns first fallacy value if overall condition becomes false

// || -> search for first truthy value --> used for short circuiting
// && -> search for first fallacy value

/**
 * nullish coalescing operator :
 
// const firstName = ""; // or 0 or false
// const firstName = null;
// const firstName; // unefined
// console.log(firstName ?? "Hidden User"); // ?? --> return "Hidden User" iff firstName is undefined or null
*/

/**
 * patterns
 const symbol = "* ";
 for (let i = 1; i <= 5; i++) {
   console.log(symbol.repeat(i));
  }
  */

/**
 * exception handling
try {
  console.log(myname);
} catch (e) {
  console.log(e.message);
  console.log(e.name);
  console.log(e.stack);
} finally {
  console.log("executes wiether error occurred or not");
}
 */

/**
    * function
greet("shubh"); // we can access func before initialization
function greet(name) {
  // name is called parameter
  console.log(`Welcome ${name}!!`);
}
greet("shubh"); // shubh is called as an argument
*/

/**
 * Anonymous function aka function expression
// we cant access anonymous func before initialization
let anonymousFunc = function () {
  // if we use var --> js engine will treat it as a variable , not a function -- hence it will return undefined if we log before initiallisation
  console.log("Hello from anonymous function");
};
anonymousFunc();
console.log(typeof anonymousFunc);
 */

/**
 * Named function expression
let anonymousFunc = function greet() {
  console.log("Hello from named function expression");
  console.log(typeof greet); // function --> accessible here
};
anonymousFunc();
console.log(typeof anonymousFunc); // function
//greet(); // cant access as greet, only be used as anonymousFunc() --> not accessible here
*/

// pure function : accept parameters, won't change parameters, return value

/**
 * arrow function <==> function expression 
const sum = function (a, b) {
  return a + b;
};
const sumArrow = (a, b) => a + b; // automatically returns a + b;
*/

// javaScript is a single threaded synchronous language
// execution context --> imp

// hoisting is the process whereby you can access the value of a variable or a fucntion even before it is initialized. --> imp

// hoisting - var
// hoisting - let & const --> temporal dead zone - hoisted

// TDZ starts at starting of block and ends when let or const gets its initialization

// mutable object - changable - array
// immutable object - not changable - string

// polyfills, machine coding interview problems & asynchronous javascript --> imp for interview

let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};
let employee = {
  salary: 50000,
};
employee._proto_ = person;
console.log(employee.salary);
employee.greet();
console.log(employee.hasOwnProperty("salary"));
console.log(employee.hasOwnProperty("name"));
