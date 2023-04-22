// Syncronics programing
// let a = prompt("What do you want to do?");
// let b = prompt("What do you want to do?");
// let c = prompt("What do you want to do?");
// console.log(a, b, c);

// Asynchronous programming
// setTimeout(function () {
//  console.log("i am a command");
// }, 4000)


// callback
// function  abc(url, callback) {
// let scri = document.createElement("script");
// scri.src = url;
// scri.onload = function(){
//     console.log(url);
//     callback(null, url);
// }
// scri.onerror = function(){
//     console.log("error occured in "+ url);
//     callback(new Error("Error occured"));
// }
// document.body.appendChild(scri);
// }

// const hello = (error,url) =>{
//     if(error){
//         console.log(error)
//         return 
//     }
// alert('Hello ' + url);
// }
// const goodmorning = (url) =>{
// alert('goodmorning ' + url);
// }
// abc("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , hello);



let im = document.getElementById("im");
im.onerror = function() {
    alert("Failed to load");
}