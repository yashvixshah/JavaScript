class User{
    constructor(username)
    {
        this.username=username
    }

    logME(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        super(username) //because of classes we don't have to pass "this" explicitly
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log("This course was added by",this.username)
    }
}

const teacher1=new Teacher("maamda","maamda@abc.com","123")
teacher1.addCourse()

const user1=new User("masalaChai")
user1.logME()

console.log(user1===teacher1)
console.log(teacher1 instanceof Teacher)
console.log(teacher1 instanceof User)