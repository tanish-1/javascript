// try{
//     throw new Error("this is error");
// } catch(e){
//     console.log(e.message);
// }
// let a = fetch("https://api.github.com")
// a.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json()
// }).then((va lue2)=>{
//    console.log(value2);
// })
let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((value)=>{
    console.log(value.status);
    console.log(value.ok);
    console.log(value.headers)
   
    return value.json()
}).then((value)=>{
  console.log(value);
})
// let req = fetch(url, {
//     headers:{
//         Authentication: 'secrets'
//     }
// })