const todof =  async (list)=>{
let options = {
    method: "POST",
    headers:
    {
        "content-type": "application/json"
    } ,
    body: JSON.stringify(list)
}
let p = await fetch('https://jsonplaceholder.typicode.com/posts',options )
 let response = await p.json();
 return response
}
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const mainfunc = async () =>{
    let list ={
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    let todo = await todof(list)
    console.log(todo)
}
mainfunc()