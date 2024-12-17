function one (){
    let userName = "Bishesh";
    //console.log(this);
}
one();//window

const two =  () => {
    let userName = "Bishesh";
    //console.log(this.userName);//undefined in arrow function
}


const addTwo = (num1, num2) => {
    return num1 + num2;

}
// console.log(addTwo(3,4));


//const addThree = (num1, num2) => (num1 + num2);
const addThree = (num1, num2) => ({userName: "Bishesh"});


    

