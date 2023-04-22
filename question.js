let s = "Hello!";
console.log(typeof(s));
let a = 12;
let b = s.concat(a);
console.log(b);
let sum = s + a;
console.log(sum);
console.log(typeof(s + b));
// const o = 34;
// // o = 45;
// console.log(o);
const jk = {
    name: "abc",
    section: 1,
}
jk['friend'] = "hello"
jk['name'] = "harry"
console.log(jk);

const dic = {
    random: "abc is random number",
    yakka: "hardwork , work"

}
console.log(dic['yakka']);

let j = Math.round(23.34);
console.log(j);

const sum2 = (a, b) => {
    return a + b
}
console.log(sum2(3, 4));

const hello = () => {
    console.log("hello");
    return "bye";
}

let vi = hello();
console.log(vi);
// arrow function

const ht = (a, b, c) => {
    return a + b - c;
}
console.log(ht(1, 2, 3));


const helloji = (name) => {
    console.log("hello " + `${name}`);
}
helloji("random");
// second way of writni arrow funcion
const helloji2 = () => console.log("helloji second bar");
helloji2();

const helloji3 = name => console.log("abc");
helloji3("hjik");

const df = {
    name: "dfgl",
    age: 67,
    show: function() {
        console.log(this);
        setTimeout(() => {
            console.log(` the name is${this.name}\n age is ${this.age}`);
        }, 2000);
    }
}
df.show()


const random = (name, age) => {
    console.log(name, age)
}
random("abc", undefined);

const df5 = () => { console.log("say") }
df5();

const yh = {
    df: "xyz",
    er: 456,
    as: 2,
    show: function() {
        setTimeout(() => {
            // console.log(this);
            console.log(this.df);
        }, 3000)
    }
}
yh.show();
let compare = (a, b) => {
    return a - b;
}
let array = [1, 2, 3, 4, 667, 6, 18];
array.sort(compare);
console.log(array);
array.sort();
console.log(array);
delete array[3];
let ed = array.pop();
array.push(45);
let dr = array.shift();
array.unshift(0);
let g = array.join(",");
console.log(g);
console.log(ed);
console.log(dr);

let aw = [1, 3, 4, 5, 6, 7, 8];
aw.forEach(function(i) {
        console.log(i);
    })
    // aw.splice(1, 4, 102, 101);
    // console.log(aw);
let newaw = aw.slice(3, 6);
console.log(newaw);