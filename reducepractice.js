let numbers = [1,2,3,4];
let sum = numbers.reduce((acc, num) => acc+num, 0);
console.log(sum);

let results = ['pass', 'Fail', 'pass','pass'];
let passResults = results.reduce((acc, p) => p=== 'pass' ? acc + 1 : acc, 0);
console.log(passResults);