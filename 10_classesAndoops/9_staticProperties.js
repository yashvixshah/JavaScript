class User{
    constructor(username)
    {
        this.username=username
    }

    logME(){
        console.log(this.username)
    }

    static createID(){  //would not be accessible to child or anyone else
        return `123`
    }
}

const yashvi = new User("yashvi")
console.log(yashvi.createID());