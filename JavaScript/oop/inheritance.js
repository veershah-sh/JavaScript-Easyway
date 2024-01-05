class User{
    constructor(username){
        this.username = username
    }

    sayMyName(){
        console.log(this.username)
    }
}

class Coder extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    commitCode(){
        console.log(`Code is commited by ${this.username}`)
    }
}

let devanshu = new Coder("Devanshu", "devanshu@meta.com", "abc123")

devanshu.commitCode()
devanshu.sayMyName()

console.log(devanshu instanceof User);