const c = false;
let p = new Promise((resolve, reject) =>{
if(c){
    resolve("resolve");
} else{
    reject("reject");
}
});
console.log(p);
p.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})
// p.then(()=>{
//     console.log("you have successfully");
// })

let result = new Promise((resolve, reject) =>{
    setTimeout(()=>{
       
    //   resolve(true);
      reject(new Error("Error is here"));
    }, 5000)
})
console.log(result);
result.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log("error is");
})
.finally(()=>{
    console.log("finally");
})