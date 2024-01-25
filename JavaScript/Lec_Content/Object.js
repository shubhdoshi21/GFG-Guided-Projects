const obj = {
  name: "shubh", // key(stored as string internally) : value pairs
  age: 20, // property
  job: "student",
  cource: ["html", "css", "js", "react", "mongodb"],
  "is Admin": true,
  address: { city: "bharuch", state: "gujarat" },
  func: function () {
    console.log("Hello Geeks!");
  },
  func2() {
    console.log("again Hello Geeks!");
  },
};

// object literal

// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj["is Admin"]); // cant use obj.is Admin since there is space in key name

// function as object property
// console.log(obj.func); // [Function: func]
// obj.func(); // Hello Geeks!
// console.log(obj.func2); // [Function: func2]
// obj.func2(); // again Hello Geeks!

// adding property to object
// obj.email = "shubhdoshi21@gmail.com";
// console.log(obj);

// computed property
// const key = "name"; // any property given by user
// const key1 = "notAPropOfObj";
// console.log(obj[key]); // shubh
// console.log(obj[key1]); // undefined

// short hand
// const name = "shubh";
// const age = 20;
// const obj1 = { name: name, age: age }; // name:name = name
// const obj1 = { name, age }; // use property name only once if key and value are same
// console.log(obj1);
// console.log({ name, age });

// for let in
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// shallow copy - copy by reference

// let obj1 = obj;
// console.log(obj, obj1);
// obj1.name = "Man";
// console.log(obj, obj1); // both name changed due to shallow copying

// Object.assign({},target obj) - do deep copy one level only, if we have nested objects - both prop changes due to shallow copying

// let obj1 = Object.assign({}, obj);
// console.log(obj, obj1);
// obj1.name = "Man";
// obj1.address.city = "vadodara";
// console.log(obj, obj1); // obj name does not change but city of both changed

// optional chaining - for nested objects

// console.log(obj.address.city); // bharuch
// console.log(obj.address.landmark); // undefined
// // console.log(obj.address.landmark.street); // error - cant read props of undefined property
// console.log(obj.address.landmark?.street); // undefined -- after .landmark , if landmark is present then only go to street -- i.e. after ? other chaining is optional
// obj.func2?.(); // again Hello Geeks! -- if func2 is present then only call it
// obj.func3?.(); // does not do anything
// console.log(obj.func3?.()); // undefined

// destructuring object

// let { address, name, dontknow, ...rest } = obj; // name of prop at left must match prop name of object (ie. key) at right - otherwise undefined
// console.log(address, name, dontknow, rest); // we can take only needed props too
// let { name: userName } = obj; // key name will be changed to userName
// // console.log(Name); // refernce error - name is not defined
// console.log(userName); // shubh
// let {
//   address: { city },
// } = obj;
// console.log(city); // accesed prop of nested object
// console.log(address); // error - address is not defined , since we destructured it as city only

// Object methods

// let entries = Object.entries(obj); // makes array of key : value paired array
// console.log(entries);
// let keysEntriesArr = Object.keys(entries); // works on array - returns indexes
// let keysObj = Object.keys(obj);
// console.log(keysEntriesArr);
// console.log(keysObj);
// let valuesEntriesArr = Object.values(entries); // works on array - returns subArray of entries
// let valuesObj = Object.values(obj);
// console.log(valuesEntriesArr);
// console.log(valuesObj);

// this - refers object that is executing the function

// const obj1 = {
//   name: "shubh",
//   display: function () {
//     console.log(this.name); // implicit binding - this refers to obj1
//   },
//   displayArrow1: () => {
//     console.log(this.name); // this does not refer to obj1 , since arrow functions does not refer current invoking object
//   },
//   displayArrow2: () => {
//     console.log(obj1.name);
//   },
// };
// obj1.display(); // shubh
// obj1.displayArrow1(); // undefined
// obj1.displayArrow2(); // shubh

// function display1() {
//   console.log(this); // refers global object - window
// }
// display1();
// console.log(this); // also refers global object - window
// // i.e. alert() = this.alert() = window.alert() !!!

// function borrowing - call , apply & bind - imp for interview

// const user1 = {
//   name: "shubh",
//   age: 20,
// };
// const user2 = {
//   name: "mann",
//   age: 19,
// };
// const user3 = {
//   name: "megh",
//   age: 21,
// };
// function display(degree, year) {
//   console.log("hii! " + this.name, degree, year);
// }
// explicit binding
// // user1.display(); // error - user1.display is not a function
// display.call(user1); // hii! shubh undefined undefined - value of this becomes user1
// display.call(user1, "B-Tech", 2026); // hii! shubh B-Tech 2026 - same as display.apply(user1,["B-Tech","2026"]);
// display.apply(user1,["B-Tech","2026"]); // hii! shubh B-Tech 2026 - same as call but takes array of arguments
// const result = display.bind(user1, "B-Tech"); // returns function
// console.log(result); // [Function: bound display]
// result(2026); // hii! shubh B-Tech 2026

// constructor function - "new" keyword

// function Person(name, age) {
//   this.name = name; // "this" - refers current object
//   this.age = age;
// }
// const user = new Person("shubh", 20); // Person becomes constructor function since we have used "new" keyword
// const user1 = new Person("mann", 22);
// console.log(user, user1); // Person { name: 'shubh', age: 20 } Person { name: 'mann', age: 22 }

