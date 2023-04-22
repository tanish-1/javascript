// const main = async () =>{
//   return "return";
// }
// main().then((value)=>{
//     console.log(value);
// } , (err)=>{
//     console.log(err);
// })

// async function abc(){
//     let p1 = new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve(2);
            
//         }, 4000)
//     })
//     p1.then((value)=>{
//         console.log(value);
//     })
    // console.log("Collecting data...");
    // let res = await p1;
    // console.log("Collected data " + res);
    // return res;
// }
// abc()
// .then((value)=>{
//     console.log(value);
// })
async function abc(){
    // return Promise.reject(new Error("Invalid"));
    // return Promise.resolve("done");
    a = 0;
    let p = new Promise((resolve, reject) =>{
      let q =  setTimeout(() =>{
            if(a === 0){
                resolve(" success " + 1);
            } else{
                reject("error");
            }
        } ,3000)
        
    })
    console.log("Collecting data...");
    let res = await p;
    console.log("Collected data" + res);
    return res;
    
}
abc().then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})