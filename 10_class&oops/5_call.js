function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username)//op=>createUser { email: 'chai@fb.com', password: '123' }
    SetUsername.call(this, username)//=>createUser { username: 'chai', email: 'chai@fb.com', password: '123' } 
    //.call is used to save the reference also and "this" gves complete obj
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);