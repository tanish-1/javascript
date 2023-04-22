async function abc(){
let p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("27 deg");
    }, 2000)
})

let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("45 deg");
    }, 3000)
})
// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
console.log("fetching data1..");
let resp1 = await p1;
console.log("fetched data1 " + resp1);
console.log("fetching data2..");
let resp2 = await p2;
console.log("fetched data2 " + resp2);
return [resp1, resp2];
}
const xyz = async () =>{
    console.log("yooooo");
}
const main = async () =>{
    let s = await abc();
    let q = await xyz();
    // s.then((value)=>{
    //     console.log(value);
    // })
}
main()
// abc().then((x)=>{
//     console.log(x)
// })

// async function abc(){
//     return 5;
// }