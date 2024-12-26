const facebookUser = {}
    facebookUser.name=  "Bishesh"
    facebookUser.age =  "19"
    facebookUser.grade = "bachelor"
    facebookUser.location = "brt"
    facebookUser.email = "thapabishu435@gmial.com"
    facebookUser.isLoggedIn = false

//console.log(facebookUser);

const googleUser = {
    email :"bisheshthapagmail.com",
    fullname :{
        firstName : "bishu",
        lastName : "thapa"
    },
    isLoggedIn : false
}
//console.log(googleUser.fullname.firstName);


//combine objects

const user = {
    ...facebookUser,
    ...googleUser
}
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
