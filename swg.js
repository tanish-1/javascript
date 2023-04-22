let a = Math.floor(Math.random()*10)
// console.log(document.body)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// let arr = Array.from(document.body.childNodes)
// console.log(arr)
let arr1 = [1,3,4,5,67]
Math.floor(Math.random())
console.log(document.body.firstChild)
console.log(document.head)

let ab = [1,2,3,4,5,6,7]
const x = (h,index)=>{
    console.log(h,index)
   return h + 1

}
let df = ab.map(x)
console.log(df)

let df2 = ab.filter((compare)=>{
    // if(compare<5){
    //     console.log("smaller element "+ compare);
    //     return compare;
    // } else{
    //     console.log("bigger element" , compare);
    //     return compare;
    // }
    return compare<5
})
console.log(df2)
// const funct = ()=>{
//     console.log("heloo arrow function")
// }
// funct()


const array = [11,4,5,66,6,7]
console.log(array);
array.push(34);
array.pop();
array.shift();
array.unshift(11);
for(let i of array){
    console.log(i)
}
const Obj = {
    name: "John",
    age:20,
    random: "sdf",
    show: function(){
        setTimeout(()=>{
            console.log(this.name)

        }, 3000)
    }
}
Obj.show()
// for(element in Obj){
//     console.log(element)
// }


const OBj = {
    name:"random",
    age: 45,
    "channel 1" : "channel 1",
    "channel 2": "channel 2"
}
for(elements in OBj){
    console.log(`${elements} is ${OBj[elements]}`)
}
//Types of LOOPS 
const array2 = [34,45,6,4,3,2,11]
console.log(array2)
array2.splice(1,2,103,123)
console.log(array2)
console.log(array2.sort())

for(let i  = 0 ; i<array2.length ; i++){
    console.log(array2[i]);
}
console.log("For-each-Loop")
array2.forEach((i)=>{
    console.log(i)
})
console.log("For-of-Loop")
for(let i of array2){
    console.log(i)
}
console.log(document.body)
console.log(document.head)
console.log(document.documentElement)
// console.log($0)
 console.log(document.body.firstChild)
 u = document.body.firstChild
console.log(u.parentNode)
console.log(u.parentElement)
console.log(u.firstChild.nextSibling)