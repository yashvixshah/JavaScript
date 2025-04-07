class user{
    constructor(username,email,password)
    {
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user("yashvixshah","yashviabs@gmail.com","123")
console.log(user1.encryptPassword())
console.log(user1.changeUsername())