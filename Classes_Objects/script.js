class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }
    veiwData(){
        console.log("access granted");
        
    }
}
let user1 = new user("farhan","farhan@.com");

console.log(user1);

class Admin extends user{
   
    constructor(name,email){
        super(name,email)
    }
    editData(){
        console.log("editing website data");
        
    }
}
let admin = new Admin("bob","bob@gmail.com");