
//qus 4
let naturalno=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,
    37,38,39,40,41,42,43,44,45,46,47,48,49,50]
let sum=0;
for(let no of naturalno){
sum=sum+no;
}
console.log(sum)

//qus 8
let word="JavaScript is fun"

let total=0
for(let each of word){
  if(each=="a" || each=='e' || each=="i" || each=="o" || each=="u"){
    total=total+each
  }

 }
console.log(total.length)

//qus 5
let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
          20,21,22,23,24,25,26,27,28,29,30,31,32,33,34.35,36,
          37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,
          54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,
           71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,
           89,90,91,92,93,94,95,96,97,98,100]

for(let value of number){
  
if(value%3==0 && value%5==0){
    console.log("Fizz")
  }
else if(value%5==0){
    console.log("Buzz")
  }
else if(value%3==0){
    console.log("FizzBuzz")
  }
 else {
    console.log(value)
  }
    
}

for(let i=6; i>=-59; i--){
    console.log(i)
  }
  
  
 
  //qus 2

for(let i=1; i<=20; i++){
    if(i%2==0){
      console.log(i+"is"+" "+"even")
    }
  else{
    console.log(i+"is"+" "+"odd")
  }
  }
  
  // qus 1
  
  for(let i=1; i<=10; i++){
    console.log(i)
  }

  //qus 7

for(let i=1; i<=50; i++){
    if(i !=1){
      let isprime=true;
      for(let j=2; j<i; j++){
        if(i%j==0){
          isprime=false;
        }
      }
      if(isprime==true){
    console.log(i+"is prime number")
  }
  else{
    console.log(i+"is not a primenumber")
  }
      
    }
        }
  
        // let sent="hello";
        // let rev = "";
        // for(let i=sent.length-1; i>=0; i--){
        //    rev += sent[i];
        // }
        //  console.log(rev);  

//qus 6
let word="hello";
let tem="";
for(let sent in word){
  tem=tem+(word[word.length-(parseInt(sent)+1)])
}
console.log(tem)



//qus 3
let x=6;
for(let i=1; i<=10; i++){
let mul=x*i;
  console.log(i+"*"+x+"="+mul);
  }

//qus 10
let num=[1, 2, 2, 3, 4, 4, 5];
for(let n of num){
  let count=0;
  for(let m of num){
    if(n==m){
      count=count+1;
    }
  }
  if(count>1){
      console.log(n+ "isduplicate")
  }
}

// qus 9


let value=5
let star="\n";                       //"
for(let i=1; i<=value; i++){             *
  for(let j=1; j<=i; j++){               **
    star=star+"*"                         "    
  }
  star=star+"\n"
}
console.log(star)


let value=5
let star="\n";                        //"
                                         ***** 
for(let i=5; i>=1; i--){                 ****
  for(let j=1; j<=i; j++){               ***
    star=star+"*"
  }
  star=star+"\n"
}
console.log(star)

