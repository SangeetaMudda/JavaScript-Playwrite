let numbers = [1, 2, 3];
let double = numbers.map(num=> num*2);
console.log(double);

let users = ['user1', 'user2'];
let testusers = users.map(u=> ({user:u, password: 'Test@123'}));
console.log(testusers);