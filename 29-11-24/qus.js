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
let n2=95;
let n3=87;

if(n1>=n2 && n1>=n3){
  console.log("n1maximum valiue");
}
else if(n2>=n3 && n2>=n1){
  console.log(" n2, maximum value");
}
else{
  console.log("n3 maximum value")
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

let amount=3750;
if(amount>=500){
  let notes=Math.floor(amount/500);
  console.log("500 count note is"+notes)
  amount=amount%500;
  
}

if(amount>=200){
  let notes=Math.floor(amount/200);
  console.log("200 count note is"+notes)
  amount=amount%200;
  
}
  
if(amount>=100){
  let notes=Math.floor(amount/100);
  console.log("100 count note is"+notes)
  amount=amount%100;
  
}  

if(amount>=50){
  let notes=Math.floor(amount/50);
  console.log("50 count note is"+notes)
  amount=amount%50;
  
}

if(amount>=10){
  let notes=Math.floor(amount/10);
  console.log("10 count note is"+notes)
  amount=amount%10;
  
}

//question 21
  
let unit=160;
let price=0;

if(unit>250){
 price=25+75+120+(unit-250)*1.5
}
else if(unit>150){
 price=25+75+(unit-150)*1.2
} 

else if(unit>100){
 price=25+(unit-50)*0.75
}

else if(unit>50){
 price=25+(unit-50)*0.75
}

else {
 price=unit*0.5
}

let surcharge=price*20/100;

console.log(surcharge);

//question 20

let basic_salary=17000;
let hra=0;
let da=0;
if(basic_salary<=10000){
  hra=20;
  da=80;
  
}
else if(basic_salary<=20000){
  hra=25;
  da=90;
}


let hra_amt=basic_salary*hra/100;
  let da_amt=basic_salary*da/100;
  let final=basic_salary+hra_amt+da_amt;
  console.log(final)    
