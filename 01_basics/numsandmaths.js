let score = 100
console.log(score)

let numb = new Number(100)
console.log(numb)

console.log(numb.toString().length)
console.log(numb.toFixed(2))

let nnum = 27.86;
console.log(nnum.toPrecision(2))

let hun = 100000000000
console.log(hun.toLocaleString());


// Maths

console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(2.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(3.9))

console.log(Math.random());
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10) + 1)

const max = 6
const min = 1

console.log(Math.floor(Math.random()*(max - min + 1)) + min)

// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());