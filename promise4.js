let pro = new Promise((resolve, reject) => {
    x = 0;
    if(x==0){
        resolve("ok");
    } else{
        reject("error");
    }
}).then((value) => {
    console.log(value);
}).then((value) => {
    
      let b = new Promise((resolve, reject) => {
        reject(" there is some error");
        // resolve(34);
      })
      return b;
}) .then(()=>{
    console.log("Done loading");
})
.catch((err) => {
    console.log(err);
})


const loadscript = (src) => {
    return new Promise((resolve,reject)  =>{
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
resolve(1);
    }
    script.onerror = () => {reject(0)};
})
}
let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
 p1.then((value)=>{
    console.log(value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
 }).then((value)=>{
    console.log("Second is ready")
 }).catch((err) => {
    console.log("There is some error " + err);
 })