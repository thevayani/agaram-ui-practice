import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
   
const appSetting = {
  databaseURL: "https://practice-710ae-default-rtdb.firebaseio.com/"
}
  const firebaseConfig = {
    apiKey: "AIzaSyBLEGZ72cZwdGv55-D4VNWr1bQ92aFViPM",
    authDomain: "practice-710ae.firebaseapp.com",
    projectId: "practice-710ae",
    storageBucket: "practice-710ae.firebasestorage.app",
    messagingSenderId: "546311054546",
    appId: "1:546311054546:web:90cc338d901e3610e3390b"
  };

  // Initialize Firebase
  const app = initializeApp(appSetting);
  const db =getDatabase(app);
  const tblname ='user/'
  const userListInDB = ref(db, tblname);

  function createResume(){        //store the data in firebase
  push( userListInDB,{
      Name:document.getElementById("name").value,
      Age:document.getElementById("age").value
     
    });
  
    alert("login successful !");
  
  }
  
  window.createResume=createResume;


  // display in table

  function display(){
   
    onValue(userListInDB , (snapshot) => {
      let trs= "";
      // if(snapshot.exists()){
        const data = snapshot.val();
        let userArray=Object.entries(data);
        let index=1;
        for(let each of userArray){
          console.log(each)
          trs = trs+`<tr>
                           <td>${index}</td>
                           <td>${each[1].Name}</td>
                           <td>${each[1].Age}</td>
                          
                           
                           <td>
                           <button onclick="delateResume('${each[0]}')">delete</button>
                           </td>
                           <td>
                           <button onclick='editResume("${each[0]}",${JSON.stringify(each[1])})'>edit</button>
                           </td>
                            
                           
                       </tr> `

          index = index+1;

        // }
      }
      document.getElementById("tBody").innerHTML = trs;
      
    });

  }
   window.display = display
   display()


//
   function delateResume(id){
    let data=ref(db,`${tblname}${id}`)
    remove(data);
   }

   window.delateResume = delateResume;

   //
   function editResume(id,data){
    document.getElementById('update_name').value= data.Name;
    document.getElementById('update_age').value = data.Age;
    document.getElementById('update_id').value = id;
   }
   window.editResume = editResume;

   
   //
   function updateResume(){
    let name = document.getElementById('update_name').value;
    let id= document.getElementById('update_id').value ;
    let age =document.getElementById('update_age').value
    set(ref(db,'user/'+id),{
      Name:name,
      Age:age,
    })
   }

window.updateResume=updateResume;
display()




  // const idEL = document.querySelector('#id')
  // const nameEL = document.querySelector('#name')
  // const ageEL = document.querySelector('#age')
  // const cityEL = document.querySelector('#city')
  // const tbodyEL = document.querySelector('#tbody')

  // frm.addEventListener("submit",function(e){
  //   e.preventDefault();
   

  //   const newuser ={
  //     name:nameEL.value,
  //     city:cityEL.value,
  //     age:ageEL.value
  //   }

  //   push( userListInDB,newuser)
  // })
  
  
 






  