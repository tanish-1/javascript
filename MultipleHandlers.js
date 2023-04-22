// let p1 = new Promise((resolve, reject) =>{
//     console.log("Hey , this is pending to resolved");
//     setTimeout(()=>{
//         resolve(1);
//     }, 3000)
// })
// p1.then((value)=>{
//     console.log("Congratulations you have done it!!");
// })


let p = new Promise((resolve, reject) =>{
let  a = 0;
setTimeout(()=>{
  if(a==0){
   resolve(1);
  } else{
   reject("Error");
  }
}, 2000);
})
p.then((value)=>{
   console.log(value);
   return value*2;
}).then((value)=>{
  console.log(value);
  return value*2;
}).then((value)=>{
  console.log("Final output " + value);
}).catch((err)=>{
  console.log("There is some error : " + err);
})

let p2 = new Promise((resolve, reject) =>{
  let  b = 0;
setTimeout(()=>{
  if(b==0){
   resolve(1);
  } else{
   reject(0);
  }
}, 2000)
})
p2.then((value)=>{
  console.log(value);
   return value*2;
}) 
p2.then((value)=>{
  console.log(value);
   return value*2;
}) 
p2.then((value)=>{
  console.log(value);
   return value*2;
}) 
p2.catch((err)=>{
  console.log("There is some error : " + err);
})

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//   console.log(result); // 1
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) { // (**)
  
//     console.log(result); // 2
  
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   }).then(function(result) {
  
//   console.log(result); // 4
  
//   });