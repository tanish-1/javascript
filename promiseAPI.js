// 1.promise.all

let p1 = new Promise((resolve, reject) =>{
     setTimeout(()=>{
        resolve("Value 1");
     }, 12000)
})
let p2 = new Promise((resolve, reject) =>{
     setTimeout(()=>{
     //    resolve("Value 2");
     reject(new Error("Error occured"));
     }, 3000)
})
let p3 = new Promise((resolve, reject) =>{
     setTimeout(()=>{
        resolve("Value 3");
     }, 4000)
})

// p1.then((value) =>{
//      console.log(value);
// })
// p2.then((value) =>{
//      console.log(value);
// })
// p3.then((value) =>{
//      console.log(value);
// })
// let promise_all = Promise.all([p1,p2,p3]);

// 2. promise.all settled
// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((value) =>{
//      console.log(value);
// })

// 3. promise.race
// let promise_all = Promise.race([p1,p2,p3]);
// promise_all.then((value) =>{
//      console.log(value);
// })

// 4. promise.any
// let promise_all = Promise.any([p1,p2,p3]);
// promise_all.then((value) =>{
//      console.log(value);
// })
// 4. promise.resolve , reject
// let promise_all = Promise.resolve(6);
let promise_all = Promise.reject(new Error("Errrorr , hey"));
promise_all.then((value) =>{
     console.log(value);
})