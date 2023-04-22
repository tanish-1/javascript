let date = new Date();
// let timestring = date.toLocaleTimeString();
// console.log(timestring);
console.log(date);
let datestring = date.toLocaleDateString();
let tmestring = date.toLocaleTimeString();
console.log(datestring);
console.log(tmestring);

let count= 0;
 let a = setInterval(()=>{
    count++;
    if(count==5){
        clearInterval(a);
    }
  console.log("hello world!");  
}, 2000)