function SetUsername(username) {
    this.username = username;
}


function createUser(username, email, password) {
    SetUsername .call(this, username);
    this.email = email;
    this.password = password;
}
const tea = new createUser('tea', 'thapabishu435@gmail.com', '12345678');
console.log(tea);