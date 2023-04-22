const loadscript3 = (src) =>{
    return new Promise((resolve, reject) => {
      let script = document.createElement('script');
    //   script.type = 'text/javascript';
      script.src = src;
      document.body.appendChild(script);
      script.onload = () =>{
          resolve(1);
      }
      script.onerror = () =>{
        reject(0);
      }
    })
}

let p5 = loadscript3("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
p5.then((value) =>{
      console.log("Load sucessful " + value);
  
}).then((value) =>{
    console.log("Another Script is available to check " + value);
}).then(() =>{
       let t = [23,45,6,7];
       let n = t.length;
       let s = 23;
       let found = false;
       let q = new Promise((resolve, reject) =>{
          for(let i= 0 ; i<n ; i++){
            if(s==t[i]){
                resolve("element found");
                found = true;
                break;
            }
          }
          if(!found){
            reject(0);
          }
        }) 
        return q;
}).then((value) =>{
    console.log("Load sucessful hooray!!! " + value);
})
.catch((err) =>{
    console.log("Error occured: " + err);
})