let numbers = [1,3,5,7];
let evenNumbers = numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

let results = [{testcaseId:'smoke', status: 'Pass'}, {testcaseId:'sanity', status:'Fail'}];
let failedCase = results.filter(r => r.testcaseId==='smoke');
console.log(failedCase);