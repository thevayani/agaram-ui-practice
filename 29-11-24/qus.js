//question 1
let a=72;
let b=90;

if(a>b){
  console.log("a is maximum");
}
else{
  console.log("b is maximum");
}

//question 2
let n1=85;
let n2=65;
let n3=87;

if(n1>n2 || n2>n3 || n1<n3 || n2>n1){
  console.log("maximum valiue");
}
else{
  console.log("not maximum value");
}

//qustion 3
let x=-11;
let y=21;
let z=0;

if(x<0){
  console.log("negative");
}
else if(x>0){
  console.log("positive");
}
else{
  console.log("zero")
}

//question 4
let value=11;
if(value%5==0 && value%11==0)
  {
    console.log("divisible by 5 and 11")
  }
else{
  console.log("not")
}

//question 5
let number=10
if(number%2==0){
  console.log("even")
}
else{
  console.log("odd")
}

//question 6
let leap=2022;
if(leap%4==0){
  console.log("leap year")
}
else{
  console.log("not")
}

//question 7
let alpha="s"
if(alpha>="a" && alpha<="z"){
  console.log("alphabet")
}
else{
  console.log("not")
}

//question 8
let vowel="e"
if(vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
  console.log("vowel")
}
else{
  console.log("consonent")
}

//question 9
let val="7"
if(val>="a" && val<="z"){
  console.log("alphabet")
}
else if(val>="0" && val<="9"){
  console.log("digit")
}
else{
  console.log("special character")
}

//question 10
let pos="H"
if(pos>="A" && pos<="Z"){
  console.log("uppercase alphabet")
}
else if(pos>="a" && pos<="z"){
  console.log("lowercase alphabet")
}

//question 11
let no=3
if(no==1){
  console.log("sunday")
}
else if(no==2){
  console.log("monday")
 }
else if(no==3){
  console.log("tuesday")
}
else if(no==4){
  console.log("wednesday")
}
else if(no==5){
  console.log("thursday")
}
else if(no==6){
  console.log("friday")
}
else{
  console.log("saturday")
}


//question 14
let angel1=60;
let angel2=60;
let angel3=60;
let tot=angel1+angel2+angel3
console.log(tot)
if(tot==180){
  console.log("triangle")
}
else{
  console.log("not valid")
}

//question 16
let ang1=60;
let ang2=60;
let ang3=80;

if(ang1==ang2 && ang2==ang3 && ang1==ang3){
  console.log("equilateral")
}
else if (ang1 == ang2 || ang2 == ang3 || ang3 == ang1){
  console.log("isosceles")
}
else{
  console.log("scalane")
}

