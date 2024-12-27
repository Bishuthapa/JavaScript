// function multipleBy5(num){
//     return num*5;
// }

// multipleBy5.power = 2;
// //console.log(multipleBy5.power)
// //console.log(multipleBy5.prototype);
// //console.log(multipleBy5(5));


// function createUser(username, price){
//     this.username = username; 
//     this.price = price;
// }

// createUser.prototype.increament = function(){
//     this.price++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.price}`);
// }

// const tea = new createUser('tea', 20);
// const coffe = new createUser('coffe', 24)

// tea.printMe()
// coffe.printMe()


class Animal{
    constructor(name)
    {
        this.name = name;
        console.log("Object is created...")

    }
    eats()
    {
        console.log("we eat");
    }

    jump(){
        console.log('we jump');
        
    }
}

class Lion extends Animal{

}

let a = new Animal("bunny");
console.log(a);

let l = new Lion("sher")
console.log(l);

