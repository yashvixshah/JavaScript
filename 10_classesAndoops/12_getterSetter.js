class User{
    constructor(email,password)
    {
        this.email=email,
        this.password=password
    }
    get password(){       //by default getter setter for everyone
        return this._password.toUpperCase() //the user will see this value
    }

    set password(value){
        //this.password=value.toUpperCase() //this and the constructore both sets password so call stack exceeded error
        //this._password=value.toUpperCase()    //solution is to assign a new property
        this._password=value   //the getter will return uppercase but setter will set the original value only
    }

    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email=value
    }
}

const yashvi=new User("yashvi@abc.com","abc")
console.log(yashvi.password)
console.log(yashvi.email)

  //closures 
    //a closure gives you accesss to outer function's scope from inner function

    //lexicalscoping