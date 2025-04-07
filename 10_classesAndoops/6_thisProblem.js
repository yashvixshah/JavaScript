function setUsername(username)
{
    this.username=username;
    console.log("Called")
}

function createUser(username,email,password)
{
    this.email=email
    this.password=password
    //setUsername(username) //By default we think setUsername would be accesible but here's the catch
    //it is being called but as soon as we call and it finishes it execution, the function setUsername will delete it's execution from the stack
    //so we need a way to call it and store it's reference
    setUsername.call(this,username) //passing this of this function to store reference
}   

const blah=new createUser("yashvi","yashvi@abc","123")
console.log(blah) //won't print username