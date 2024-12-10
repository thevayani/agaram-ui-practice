
//eg1
class Child extends Parent{

  getchildName(){
    this.getName();
    console.log("Child func")
  }
}
let childobj = new Child();

childobj.getchildName();


//eg2
class Parent{

    constructor(p_name){
      this.p_name = p_name;
    }
    
    
    getName(){
      console.log(this.p_name)
    }
  }
  
  
  class Child extends Parent{
  
    constructor(c_name,p_name){
      super(p_name)
      this.c_name = c_name;
    }
    getchildName(){
      this.getName();
      console.log(this.c_name)
    }
  }
  let childobj = new Child("MANJU","Chitra");
  
  childobj.getchildName();


// 3
  class Parent{
    constructor(p_name){
      this.p_name=p_name;
    }
    getName(){
      console.log(this.p_name)
    }
  }
  class Child extends Parent{
    constructor(c_name,p_name){
      super(p_name)
      this.c_name=c_name
    }
    
    getChildName(){
      this.getName();
      console.log(this.c_name)
    }
  }
  let childobj=new Child("arthi","iyyappan");
  childobj.getChildName();

//4
  class Users{
    constructor(email,password){
      this.email=email;
      this.pass=password;
    }
    
    login(){
      if(this.email=="arthi@gmail.com"){
        console.log(this.email)
      }
      let e=this.getEmail();
      console.log(e)
    }
    getEmail(){
      return this.email;
    }
  }
    let obj=new Users("arthi@gmail.com",12345);
    obj.login()
  