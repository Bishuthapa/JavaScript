//Channing in loops

const numbers = [2, 4, 6, 8];

const copy = numbers
                .map((item) => item * 10 )
                .map((item) => item + 10 )
                .filter((item) => item >= 40)

console.log(copy);
    


