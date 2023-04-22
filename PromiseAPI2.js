let p1  = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(1);
        // reject("error one");
    }, 11000)
})
let p2  = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // resolve(2);
        reject(new Error('Failed to load'));
    }, 2000)
})
let p3  = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(3);
    }, 3000)
})
// let result = Promise.all([p1, p2, p3]);
// result.then((value)=>{
//     console.log(value);
// })
// let result = Promise.allSettled([p1, p2, p3]);
// result.then((value)=>{
//     console.log(value);
// })
// let result = Promise.race([p1, p2, p3]);
// result.then((value)=>{
//     console.log(value);
// })
let result = Promise.any([p1, p2, p3]);
result.then((value)=>{
    console.log(value);
})
