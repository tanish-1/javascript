const greet = (name, callback) =>{
   console.log(`what is your ${name}`);
   callback();
}

const message = ()=>{
    console.log("This is a message");
}

greet("XYZ" , message);


const sum = (a,b,add)=>{
    console.log("Callback function")
        add(a,b);
}
const add = (a,b) =>{
   console.log(a+b);
}

 sum (12,34 ,add);

const greet2 = (name, func)=>{
    console.log("Hello javascript");
    func(name);
 }
const name2 = (name)=>{
    console.log(`name  is ${name}`);
}

 let a = setTimeout(greet2, 4000, 'xyz' , name2)