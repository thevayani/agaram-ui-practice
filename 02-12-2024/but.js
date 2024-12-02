// function test(1,2){
//    alert(1)
// }

function login(){
    let email_value=document.getElementById("email_input").value
    let password_value=document.getElementById("password_input").value

    if(email_value=="ithevayani@gmail.com" && password_value=="arthi1601"){
        alert("login success")
    }
    else{
         alert("login failure")
    }


    console.log(email_value)
    console.log(password_value)

}