let str = "My name is Shubh Doshi";

// length of the string

// let length = str.length;
// console.log(length); // 22

// iterating over string

// for (let char of str) {
//   if (char === " ") continue;
//   if (char === "S") break;
//   console.log(char);
// }
// for (let i = 0; i < length; i++) {
//   if (str[i] === " ") continue;
//   if (str[i] === "S") break;
//   console.log(str[i]);
// }

// charAt() & charCodeAt()

// console.log(str.charAt(4)); // char at index 4 of string str
// console.log(str.charCodeAt(4)); // ASCII code of char at index 4 of string str

// indexOf() --> -1 if char does not present in given string

// console.log(str.indexOf("s")); // 9
// console.log(str.indexOf("s", 10)); // returns index of "s" occuring on or after index 10 --> starts searching from index 10

// toUpperCase() & toLowerCase()

// console.log(str.toUpperCase()); // MY NAME IS SHUBH DOSHI
// console.log(str.toLowerCase()); // my name is shubh doshi
// console.log(str); // My name is Shubh Doshi --> non mutating methods i.e. preserves original string

// includes() --> returns boolean value

// console.log(str.includes("Shubh")); // true
// console.log(str.includes("shubh")); // false
// const vowels = "aeiou";
// let flag = false;
// for (const char of str) {
//   if (vowels.includes(char.toLowerCase())) {
//     flag = true;
//     break;
//   }
// }
// if (flag) console.log("string has vowels");
// else console.log("string does not have vowel");

// substring()

// console.log(str.substring(0, 5)); // index 0 included & 5 excluded

// trim() --> removes extra spaces

// const data = "      shubh       ";
// console.log(data, data.length);
// console.log(data.trim(), data.trim().length); // chaining of methods
// console.log(data); // non mutating method

// let c1 = "a";
// let c2 = "z";
// let result = "";
// for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0); i++) {
//   result += String.fromCharCode(i) + " ";
// }
// console.log(result);

function arraySortedOrNot(arr, n){
  // code here
  for(let i = 0 ; i < n-1 ; i++){
      if(arr[i] > arr[i+1]){
          return 0
      }
  }
  return 1
}
let arr = [10, 20, 30, 40, 50]
console.log(arraySortedOrNot(arr , 5));