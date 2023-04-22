const loadscript = (src,callback) =>{
    let script = document.createElement('script');
    script.src = src;
   script.onload = function(){
       console.log("sucess " + src);
       callback(null, src);
   }
   script.onerror = function(){
    console.log("There is some error fix it " + src);
    callback(new Error("src got some error"));
   }
    document.body.appendChild(script);
}
const hello = (error ,src)=>{
if(error){
    console.log(error);
    return
}
console.log("hello "+ src);
}
// const goodmorning = (error ,src)=>{
//     if(error){
//         console.log(error);
//         sendEmergencyMessageToCeo();
//         return
//     }
//     console.log("Good Morning "+ src);
// }
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , function goodmorning(error){
    if(error){
        console.log(error);
        sendEmergencyMessageToCeo();
        return
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap2.bundle.min.js" , function goodmorning(error){
        if(error){
            console.log(error);
            sendEmergencyMessageToCeo();
            return
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap3.bundle.min.js" , function goodmorning(error){
            if(error){
                console.log(error);
                sendEmergencyMessageToCeo();
                return
            }
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha4/dist/js/bootstrap2.bundle.min.js" , function goodmorning(error){
                
            })
        })
    })
});