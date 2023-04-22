const load = (src) =>{
    return new Promise((resolve, reject) =>{
        let srcipt = document.createElement('script');
        srcipt.src = src;
        document.body.appendChild(srcipt);
        srcipt.onload = () =>{
            resolve("Done loading");
        }   
        srcipt.onerror = () =>{
            reject("Error loading");
        }
    })
}
let q = load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
q.then((value)=>{
    console.log(value);
    return value;
}).then((value)=>{
    console.log(value);
    console.log("Another script is ready");
}).then((value)=>{
     return load("abc://ab.min.js")
}).then((value)=>{
    console.log("this src is already loaded and ready");
}).catch((err)=>{
    console.log(err);
})