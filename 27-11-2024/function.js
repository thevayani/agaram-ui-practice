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
  
  
  
  
  