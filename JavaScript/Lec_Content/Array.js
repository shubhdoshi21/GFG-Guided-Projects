let arr = ["shubh", "mann", "megh", ["hetvi", "riddhi", "priyal"]];

//for let of

// for (let name of arr) {
//   // returns element to variable name one by one
//   console.log(name);
// }

// for let in

// for (let ind in arr) {
//   // returns index to variable ind one by one
//   console.log(ind);
//   console.log(arr[ind]);
// }

// shallow copy

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // copy by reference --> reference of arr1 is passed to arr2
// console.log(arr1, arr2);
// arr2.push(4);
// console.log(arr1, arr2); // both arr gets updated since they are referencing to same memory location

// spread operator - soln to avoid shallow copy problem

// console.log(arr);
// console.log(...arr);
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr1, arr2);
// arr2.push(4);
// console.log(arr1, arr2); // arr1 remains unchanged - does not mutate array

// copy using for let of loop - same as spread operator

// converting string to array

// let str = "shubh";
// let arrFromStr = [...str];
// console.log(arrFromStr);

// push & concat

// console.log(arr);
// arr.push("riddhi", "priyal", "hetvi");
// console.log(arr);
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// console.log(arr3.concat(arr2, arr1)); // 7,8,9,4,5,6,1,2,3 --> original arrays will not change

// pop

// let popped = arr.pop();
// console.log(popped); // [ 'hetvi', 'riddhi', 'priyal' ] -- returns object
// console.log(`update arr - ${arr}`); // update arr - shubh,mann,megh

// slice & splice

// let sliced = arr.slice(1, 3); // 3 is exclusive & 1 is inclusive -- returns object
// console.log(sliced , arr); // does not mutate arr
// let userName = "SHUBH";
// let firstUpperCaseChar = userName[0].toUpperCase();
// let capitalizedName = firstUpperCaseChar + userName.slice(1).toLowerCase();
// console.log(capitalizedName);

// let spliced = arr.splice(1, 2); // removes 2 elem from index 1 and returns it
// console.log(spliced);
// console.log(arr); // mutate the array
// arr.splice(3, 0, "added"); // before index 3 , it adds elem , if length < 3 - adds elem at last position
// console.log(arr);

// includes - returns boolean value

// console.log(arr.includes("shubh")); // true

// sort - inplace sorting - mutates array

// let arr1 = [5, 26, 3, 234, 1];
// console.log(arr.sort());
// console.log(arr1.sort()); // converts it into string and check char by char according to its UTF-16/8 representation -- hence we are not getting desired output
// // solution
// function sortInAscOrder(a, b) {
//   return a - b;
// }
// function sortInDescOrder(a, b) {
//   return b - a;
// }
// console.log(arr1.sort(sortInAscOrder));
// console.log(arr1.sort(sortInDescOrder));

// split & join
// split - converts string into array of characters
// join - converts array of characters into string
//there is no reverse method in string

// let str = "shubh";
// let arrFromStr = str.split(""); // returns array of char
// console.log(arrFromStr);
// console.log(arrFromStr.reverse());
// let arrToStr = arrFromStr.join(""); // returns reversed string
// console.log(arrToStr);

// destructuring of array

// const [a, , , ladies] = arr;
// console.log(a);
// console.log(ladies);

// let arr1 = [[1, 2, 3], 4, 5, 6, 7, 8, 9, 0];
// const [b, ...rest] = arr1;
// console.log(b);
// console.log(rest);

// let a = 10;
// let b = 5;
// console.log(a, b);
// [a, b] = [b, a]; // swapping using destructuring
// console.log(a, b);

