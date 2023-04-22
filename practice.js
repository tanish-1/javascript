const create = () =>{
    const color = () =>{
        p.style.color = 'red';
    }  
    let div = document.createElement('div');
    div.id ='first';

    let p = document.createElement('p');
    p.id = 'p1';
    p.textContent = "this is a test text";

    p.addEventListener('mouseenter', color);
    div.appendChild(p);

    document.body.appendChild(div);
}
btn1.addEventListener('click', create);
// let text = document.createTextNode('First  Time , doing this');
//  div.innerHTML = "<p>I have done it</p>";

const create2 = () =>{
      const fonttext = () =>{
        h1.style.fontWeight = "700";
        h1.style.fontFamily = "Arial, Helvetica, sans-serif"; 
        h1.style.color = 'green';
        h1.style.textTransform = "capitalize";
      }

    let div = document.createElement('div');
    div.claassName = 'random';
    div.id = 'b';

    let h1 = document.createElement('h1');
    h1.id = 'h_1';
    h1.className = 'heading-1';
    h1.textContent = 'This is a Heading after event is clicked';
    h1.addEventListener('mouseenter', fonttext);
    div.appendChild(h1);

      document.body.appendChild(div);
}

btn2.addEventListener('click', create2);


const create3 = () => {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.textContent = 'click me to stop';
    const a = setInterval(() => {
        p.textContent += 'paragraph';
    }, 3000);
    const stop = () =>{
        clearInterval(a);
    }
    p.textContent = 'paragraph';
     btn.addEventListener('click',stop);
    document.body.appendChild(p);
    document.body.appendChild(btn);
}

btn3.addEventListener('click', create3);

const create4 = () =>{
    let p1 = document.createElement('p');
    p1.textContent = 'this is a paragraph';

    let btn = document.createElement('button');
    btn.textContent = 'loop button';

   const abc = () =>{
    let div = document.createElement('div');
     let p2 = document.createElement('p');
     p2.textContent = 'this is another content';
     div.appendChild(p2);
     document.body.appendChild(div);
   }
    btn.addEventListener('click', abc);

    document.body.appendChild(p1);
    document.body.appendChild(btn);
}


btn4.addEventListener('click', create4);