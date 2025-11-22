function person(name, age){
    this.name = name;
    this.age = age;
};

const person1 = new person('sangeeta', 22);
const person2 = new person('sushma', 30);

console.log(person1.name);
