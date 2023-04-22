// let arri = [23, 450, 6, 78];
// const func = (a) => {
//     return a > 10
// }
// let ui = arri.filter(func)
// console.log(ui);
// let g2 = arri.filter((a) => {
//     return a < 10;
// })
// console.log(g2);

// let op = arri.map((i, index) => {
//         console.log(i, index, arri);
//         return i + index;
//     })
// console.log(arr);
// console.log(op);
// array.map((i) => {
//     console.log(i);
// })
// arri.forEach((i, index) => {
//     console.log(i, index);
// })
// const qa = (t, y) => {
//     return t + y;
// }
// let reg = arri.reduce(qa)
// console.log(reg);

// Math.floor(Math.random() * 5) + 1;
const x = (a) => {
    return Math.floor(Math.random() * (a - 0));
}
let fg = x(100);
console.log(fg);
let guess = 99;
let chances = 0;
if (guess == fg) {
    console.log("correct");
    // chances++;
} else if (guess > fg) {
    console.log("too high");
    chances++;
} else if (guess < fg) {
    console.log("too low");
    chances++;
}
console.log(100 - chances + " " + "Guess number is " + guess);

// let og = {
//     a: 1,
//     name: "random",
//     Show: function() {
//         console.log(this);

//     }
// }
// og.Show();