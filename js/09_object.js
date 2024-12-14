//ojects literals
//Object.create
const user = {
    name: "Bishesh",
    age: "19",
    grade: "bachelor",
    location: "brt",
    email :"thapabishu435@gmial.com",
    isLoggedIn : false

}



//console.log(user.name)
//console.log(user["name"]);
//console.log(user["email"]);

//Object.freeze(user);
user.email = "bishuthapa570@gmail.com";
//console.log(user["email"]);


user.greeting =function(){
    console.log("hello");
    
}

user.greetingTwo = function()
{
    console.log(`Hello, ${this.name}`),
    console.log(`Is youi email, ${this.email}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());