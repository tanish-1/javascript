console.log(window)
console.log(document)
document.body.style.background = "yellow"

let runA = true;
const drive = (age)=>{
    return age>=18?true:false
}
while(runA){
    let age = prompt("Enter your age");
     age = Number.parseInt(age);

if(drive(age)){
    alert("you can drive");
}
else{
    alert("no you cannot");
}
runA = confirm("Are you sure you want to drive again?");
}