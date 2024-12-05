//  function test(x,y){
//     alert(1)
//  }



let object=[];
function login(){
    let email_value=document.getElementById("email_input").value
    let password_value=document.getElementById("password_input").value

    
   let data = {'email':email_value, 'password':password_value};


  
  object.push({email:email_value,password:password_value})

    if(email_value=="ithevayani@gmail.com" && password_value=="arthi1601"){
        alert("login success")
    }
    else{
         alert("login failure")
    }


    console.log(email_value)
    console.log(password_value)
    console.log(object)
   
}