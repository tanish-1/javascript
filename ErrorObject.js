try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age);
   if(age>120)
  throw new Error("This is not a valid age");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("Script is running")