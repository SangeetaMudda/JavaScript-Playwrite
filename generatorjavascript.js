function* squaregenerator(limit){

    for( let i = 1; i<=limit; i++){
        yield i*i;

    }

}

const squares = squaregenerator(5);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().value);
console.log(squares.next().done);
