//reduce in js

const myNum = [1, 2, 3, 4];

const newNum = myNum.reduce(function (acc, current) {
    //console.log(`Acculumator: ${acc} and Current: ${current}`);

    return acc + current;
}, 0);

//console.log(newNum);


const myNumber  = [1, 2, 3, 4];
const newNumber = myNumber.reduce( (acc, current) => acc+ current, 0);
//console.log(newNumber);

const courses = [{
     courseName : "JavaScript",
     price : 949,
},
{
    courseName : "Python",
    price : 979,
},
{
    courseName : "Java",
    price : 999,
},

{
    courseName : "C++",
    price : 959
}
]

const totalPrice = courses.reduce( (acc, item) => acc + item.price, 0 );
console.log(`Total price is: ${totalPrice}`);

