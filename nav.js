// const changebody = ()=>{
//     document.body.firstElementChild.style.background="orange";
// }
// changebody();
// let a= document.body
// console.log("first child " , a.firstChild)
// console.log("first element " , a.firstElementChild)
// console.log(document.getElementsByTagName("body"))
let c = document.getElementById("firstC")
c.style.color = "red";
let title = document.querySelectorAll(".card-title")
title[0].style.color = "red";
title[1].style.color = "orange";
title[2].style.color = "green";
console.log(title)

console.log(document.querySelector(".card").getElementsByTagName("a"))
const b = document.getElementById("p_1");
b.innerHTML = "this is a random text...";
const x = document.getElementsByClassName("card-title");
console.log(x);
x[0].style.background = "orange";


const d = new Date();
console.log(typeof d);
// document.getElementsByClassName("datee").innerHTML = d;
// console.log(d);
const da = new Date('2001-02-12 04:54:03')
console.log(da);
const d2 = new Date("January 12 , 2002 02:45:2")
console.log(d2);

let va = document.getElementById("theInput");
console.log(va);

const abc = () =>{
    document.getElementById("theInput").innerHTML = "BYEE.";
}


