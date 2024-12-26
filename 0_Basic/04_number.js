/*const number = 4000.456789;
console.log(number.toFixed(4)) ;
console.log(number.toPrecision()) ;


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-US'));*/


/*****************Math*************************/



console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,8,9));
console.log(Math.max(4,6,8,9));
console.log(Math.random());
console.log((Math.random()*10)+1);


const max =20;
const min =10;


//math random is use to generate the random value between 0-1.
// use the max and min to generate the value between them plus 1 add to make sure the generative value is non-negative.
//add add the min at last to make sure the generative valu is between min to max.
//And also use math.floor to generative the lower round off value.
console.log(Math.floor(Math.random()*(max-min + 1))+min)