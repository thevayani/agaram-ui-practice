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
  let students=[
    {
      name:"stu1",
       age:20,
      marks:[40,80,100,80,50],
    },
     
    {
      name:"stu2",
      age:25,
      marks:[100,80,70,60,50],
    },
                
     {
       name:"stu3",
        age:29,
       marks:[80,80,70,60,50]
     }
    ]
  
  let value=0;
  
  for(let each of students){
    for(let n of each.marks){
      value=value+n;
    }
    console.log(value);
  }
  
  
  
  
    