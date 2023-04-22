// console.log("Weclome to javascript");
// document.write("hello world");
// console.error("some error");
// console.warn("last warning");
// let a = 12;
// console.log(a);
// let b = 12.3;
// console.log(b);
let str = "hello world";
let r = str.indexOf("r");
let d = str.substring(0, 4);
let v = str.toUpperCase();
let f = str.replace("h", "H");
console.log(f);
console.log(v);
console.log(d);
console.log(r);
console.log(str);
let arr = [1, 2, 3, "hello", Boolean, 12.3];
console.log(arr);

// loop in javascript
// first  normal for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// second for-each loop 
console.log("for-each loop");
let ar = [1, 2, 3, 4, 5];
ar.forEach(function(i) {
    console.log(i);
});

// third for of loop
console.log("for-of loop");
for (element of ar) {
    console.log(element);
}
// key for in loop
console.log("for-in loop");
let employee = {
    ab: "employe",
    age: "23",
    hobbies: ["music", "games"]
}
for (key in employee) {
    console.log(`${key} is ${employee[key]}`);
}
console.log(employee.hobbies);
console.log(employee['hobbies']);