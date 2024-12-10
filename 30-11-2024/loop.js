//loop

let colors=["blue","green","red","white","black"];

for(let each of colors){
  if(each !="white" && each !="red"){
    if(each=="blue"){
      console.log("black")
    }
    else if(each=="black"){
      console.log("blue")
    }
    else{
      console.log(each)
    }
  }
    
}

let marks=[90,80,95,50,70,60];
let total=0;

for(let each of marks){
  total=total+each;
}

console.log(total)


let marks=[90,80,95,50,70,60];
let total=0;

for(let each in marks){
  total=total+marks[each];
}

console.log(total)

let students=[
    {
      name:"stu1",
       age:20,
    },
     
    {
      name:"stu2",
      age:25,
    },
                
     {
       name:"stu3",
        age:29
     }
    ]
  
  
  for(let each of students){
   console.log(each.name)
  }
  
  
  
  
  
  
    