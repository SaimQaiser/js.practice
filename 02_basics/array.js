let myarr= new Array(1,2,3,4,5)
console.log(myarr)

//Array Methods

myarr.push(6)
console.log(myarr);
myarr.pop()
console.log(myarr);

console.log(myarr.includes(3));
console.log(myarr.indexOf(3));

console.log(myarr.join());

console.log(myarr.slice(1,3));
console.log(myarr.splice(1,3));
console.log(myarr);

mheros = ['thor','ironman','hulk']
dcheroes= ['superman', 'batman', 'flash']

const allh = mheros.concat(dcheroes);
console.log(allh);

const allheros = [...mheros , ...dcheroes];  // Spread Operator
console.log(allheros);

const arr1 = [1, 2, [3, 4,[5,6]]]
console.log(arr1.flat(Infinity))

const arr2 = "saim"
console.log(Array.isArray(arr2))
console.log(Array.from(arr2))

let s1 = 11
let s2 = 23
let s3 = 34
console.log(Array.of(s1,s2,s3))