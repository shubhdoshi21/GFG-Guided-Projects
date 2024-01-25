/**
 * pure functions
 *
 * it takes an argument
 * it should return something
 * for same input , you should get a same output
 * the result should not be influenced by outer parameter
 * it should not mutate the original argument
 */

/**
 * first class function
 * A programming language is said to have First-class functions if functions in that language are treated like other variables.
 * So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
 */

// function outer() {
//   return function inner() {
//     console.log("inner");
//   };
// }
// outer()(); // inner
// let out = outer();
// console.log(out); // [Function: inner]
// out(); // inner same as outer()()

/**
 * higher order function
 * A function that accepts another function as an argument or returns a function or does both is called an H.O.F
 */

//first class function
// function wrapper() {
//   return "i am firstclass function";
// }
//higher order function
// function greetMsg(wrapper) {
//   console.log("hello", wrapper());
// }
// greetMsg(wrapper);
//higher order function
// function displayMsg() {
//   return function () {
//     console.log("i am inner func , which is being returned");
//   };
// }

// reduce

// const output = arr.reduce((acc, curr) => {acc + curr}, initialValue);

/**
 * Arguments Object in Non-Arrow Function (regular function)
 * arguments object is an array like object present locally inside a function and it contains value of all the arguments passed to a function.
 
function test() {
  console.log(arguments); // [Arguments] { '0': 4, '1': 3, '2': 7, '3': 5, '4': 9 }
  arguments[2] = 0;
  console.log(arguments); // [Arguments] { '0': 4, '1': 3, '2': 0, '3': 5, '4': 9 }
}
test(4, 3, 7, 5, 9);
// we cant use all array method to arguments , since its a array like object.. hence we will convert it into array using spread operator
// let arr = [...arguments]
// now we can apply all methods of array on arr
*/

// local scope - var , let , const inside any functional block - not available outside function block
// global scope - var outside function or inside conditional block
// block scope - let , const inside any functional or conditional block - not available outside functional or conditional block

// a closure is the combination of a function bundled together with references to its lexical environment -- or -- a closure is a function that remembers its outer variables and can access them
