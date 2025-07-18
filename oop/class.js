// class User{
//     constructor(username,email,password){
//         this.username= username;
//         this.email= email;
//         this.password= password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const cc = new User('saim','s@s.com','123')
// console.log(cc.encryptPassword());

// inheriance
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);