let promise= new Promise((resolve, reject) =>{
   console.log("promise is pending");
    setTimeout(()=>{
    // console.log("problem is resolve");
resolve(true);
// reject(new Error("promise is rejected"));
 }, 5000)
})

let promise2= new Promise((resolve, reject) =>{
   console.log("promise is pending");
    setTimeout(()=>{
    // console.log("problem is rejected");
// resolve(true);
reject(new Error("promise is rejected"));
 }, 5000)
})
promise.then((value)=>{
    console.log(value);
})
promise2.catch((error)=>{
    console.log("somee error occurred");
})
// promise2.then((value)=>{
//     console.log(value);
// })
// console.log("Hello world!");
// console.log("Hello");
// setTimeout(function() {
// console.log("Hello world!");
// },3000)
// console.log(promise);