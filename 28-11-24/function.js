let marks={
    tamil:90,
    english:70,
    maths:80,
    computerscience:60,
    physics:75,
    chemistry:80
}

if(marks.maths>70|| marks.computerscience>70){
console.log("you are eligible")
}
else{
  console.log("you are not eligible")
}



if((marks.maths>70 && marks.physics>70 && marks.chemistry>70) || 
  (marks.maths>80 && marks.computerscience>80)){
  console.log("you are eligible")
}
else{
  console.log("you are not eligible")
}

let mark={
  maths:96,
  physics:82,
  chemistry:75,
  biology:80,
  computer:"fghggf"
}

let total=(mark.maths+mark.physics+mark.chemistry+mark.biology+mark.computer);
let percentage=total/5;


if(percentage>=90){
  console.log("grade a");
}

else if(percentage>=80){
  console.log("grade b")
}

else if(percentage>=70){
  console.log("grade c")
}

else if(percentage>=60){
  console.log("grade d")
}

else if(percentage>=40){
  console.log("grade e")
}

else if(percentage<40){
  console.log("grade f")
}
else{
  console.log("check the input")
}

//question 12
let month=[{name:"january",
            days:31},
 {name:"feb",
  days:28
  },
 {name:"mar",
  days:31
  },
 {name:"apr",
  days:30
  },
 {name:"may",
  days:31
  },
 {name:"jun",
  days:30
  },
 {name:"jul",
  days:31
  },
 {name:"aug",
  days:31
  },
 {name:"sep",
  days:30
  },
 {name:"oct",
  days:31
  },
 {name:"nov",
  days:30
  },
 {name:"dec",
  days:31
  },
]

console.log(month[t1-1].days)



