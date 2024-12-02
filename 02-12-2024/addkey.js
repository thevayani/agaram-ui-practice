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

    for(let student of students){ 
        if(student.age>=25){
        student.eligible="true"
        
      }
      else {
        student.eligible="false"
       
      }
      
    console.log(student)
    }

//name push into array
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
      
     
      let x=[ ]
      for(let student of students){
        if(student.age>=25)
          x.push(student.name)
          
      }
      console.log(x)

      let value=[2,3,5,1,0,-7,89,100,30,70]

      //find high value
let high=0;
for(let each of value){
  if(each>high){
    high=each
  }
    
}

console.log(high)


let numbers=[2,3,5,1,0,-7,89,100,30,70]

let sum=0
for(let num of numbers){
  sum=sum+num
}
if(sum<0){
  alert("value sign is -")
}
else if(sum>0){
  alert("value sign is +")
}
else{
  alert(" value zero")
}

let number=[2,3,5,6,7,8]
 let tmp=[]
 for(let i in number){
   
    tmp.push(number[number.length-(parseInt(i)+1)])
    
 }
  
 console.log(tmp)
 number=tmp
 console.log(number)

 
   