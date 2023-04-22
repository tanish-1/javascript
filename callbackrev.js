const greet = (hello) =>{
      hello();
}

const hello = () =>{
    console.log("Hello javascript");
}

const goodevening = () =>{
    console.log("Goodevening javascript");
}
greet(hello)