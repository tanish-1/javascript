const choose = () =>{
    let a = [1,2,3,4,5];
  let value = document.createElement('p');
   let found = false;
  for(let i = 0; i < a.length; i++){ 
    if(a[i] === parseInt(Select.value)){
        value.textContent = Select.value;
        document.body.appendChild(value);
         found = true;
         break;
    }
  }
  if(!found){
    value.textContent = "not found";
    document.body.appendChild(value);
  }
}

btn.addEventListener("click",choose)



const add = ()=>{
    let a = document.createElement('p');
    a.textContent = additems.value;
    Items.appendChild(a);
    document.body.appendChild(Items);
   let e = Items.lastElementChild;
   e.addEventListener("click", ()=>{
     Items.removeChild(e);
   });

}
 let f = 0;
btn2.addEventListener("click", add)

const mouseover = () =>{
    para.textContent = f+= 1;
}
para.addEventListener("mouseenter" , mouseover)


const lists = () =>{
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = list.value;
    ul.appendChild(li);
    listItem.appendChild(ul);
    document.body.appendChild(listItem);
    let d =  ul.lastElementChild;
    d.addEventListener("click", ()=>{
        ul.removeChild(d);
    })
}
btn3.addEventListener("click", lists)

const sets = () =>{
    let p = document.createElement('p');
    p.textContent = "paragraph";
    let del =  setInterval(()=>{
        p.textContent += "paragraph";
       },3000)
       const stop = () =>{
        clearInterval(del);
       }
    btn4.addEventListener("click", stop);
         set1.appendChild(p);
     document.body.appendChild(set1);
}

btn4.addEventListener("click", sets)