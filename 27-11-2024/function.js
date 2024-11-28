function printmyname(){
    console.log("thevayani")
  }
  printmyname()
  printmyname()
  
  
  
  function printname(name){
    console.log(name)
  }
  printname("arthi")
  
  
  function addnumber(x,y){
    let sum=x+y
    console.log(sum)
    
  }
  addnumber(2,3)
  addnumber(5,6)
  
  function find(x,y,z,q){
    let sum=x+y
    let multiply=z*q
    let subtract=sum-multiply
    console.log(subtract)
    
  }
  find(1,2,3,4)
  
  
  function fullname(x,y){
  let sum=x+y
  console.log(sum)
  }
  fullname("agaram","academy")
  
  let detail={
    fname:"thevayani",
    lname:"i"
  }
  function getfullname(object){
    console.log(object.fname+object.lname)
  }
  getfullname(detail)
  
  
  
  let name={
    fname:"thevayani",
    lname:"i"
  }
  let colors=["red","grn","yellow"];
  function getfullsentence(object,color)
  {
  console.log(object.fname+object.lname+ " likes "+colors.length+" colors "+color)
  }
  getfullsentence(name,colors);
  
  
  function addition(name1,name2)
  {
    return name1+name2;
  }
  let total1=addition(5,6);
  let total2=addition(8,16);
  console.log(total1+total2)
  
  
  function addition(num1,num2)
  {
    return num1+num2;
  }
  function multiply(num1,num2)
  {
    return num1*num2;
  }
  function sub(num1,num2)
  {
    return num1-num2;
  }
  let solve1=addition(6,7);
  let solve2=multiply(3,4);
  let solve3=sub(solve1,solve2);
  console.log(solve3)
  
  
 let mathsmark=55; 
  if(mathsmark>60){ 
    console.log("you are pass") 
  } 
  else 
    { 
      console.log("you are fail") 
    } 

  let gender="female"; 
  if (gender=="female"){ 
    console.log("color is pink")
  } 
  else if(gender=="male"){ 
    console.log("color is blue") 
  } 
  else{ 
      console.log("color is red") 
    } 


  let number=6; 
  let result=number%2 
  if(result==0){ 
    console.log(" number is even") 
  } 
  else{ 
    console.log("number is add") 
  } 
     
  let marks={ 
    m:90, 
    t:80, 
    e:60, 
    sci:70, 
    s:50 
  } 
  function percentage(m,t,e,sci,s){ 
    return (m+t+e+sci+s)/5 
  } 
  let total= percentage(marks.m,marks.t,marks.e,marks.sci,marks.s) 
   
  if(total>60){ 
    console.log(" you are eligible") 
  } 
  else{ 
    cosole.log("you are not eligible") 
  } 
  
  