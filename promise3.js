let p = new Promise((resolve, reject) =>{
      setTimeout(()=>{
console.log("Resolved");
resolve(56);
      }, 2000) 
})
p.then((value)=>{
   console.log(value);
   let p2 = new Promise((resolve, reject) =>{
    resolve("Promise 2");
   })
 
   return p2;
}).then((value)=>{
    console.log("We are done")
})