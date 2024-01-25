// read data from user
const readlineSync = require("readline-sync");
const userName = readlineSync.question("Whats your name ? ");
const userAge = readlineSync.question("Whats your age ? ");
console.log("Welcome" + userName);
console.log("Welcome", userName);
console.log(`Welcome ${userName}`); //best practice
console.log(typeof userName, typeof userAge); //always string even if you enter number
console.log(`age + 2024 = ${userAge + 2024} or ${Number(userAge) + 2024}`);
