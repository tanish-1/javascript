let a = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        reject("error");
        // resolve(3);
    }, 13000);
})
let b = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(4);
    }, 4000);
})
let c = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(5);
    }, 5000);
})

let res = Promise.race([a,b,c]);
res.then((value)=>{
    console.log(value);
})