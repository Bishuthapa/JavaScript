class user{
    constructor(username){
        this.username = username;
    }

    LogMe(){
        console.log(`Username is ${this.username}`);
        
    }
    }

    class Teacher extends user{
        constructor(username, email, password){
            super(username);
            this.email = email;
            this.password = password;
        }

        addCourse(){
            console.log(`Course added by ${this.username}`);
        }
    }
const tea = new Teacher('Bishesh', 'thapabishu435@gmail.com', '12345678');
tea.addCourse();    