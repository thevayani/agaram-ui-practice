
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,ref,push,onValue,remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

  const appSetting = {
    databaseURL:"https://playground-fcf81-default-rtdb.firebaseio.com/"
  }

  const firebaseConfig = {
    apiKey: "AIzaSyBZYdILYGl1UgQrWQnl5kG8HSz_LFsq4R8",
    authDomain: "playground-fcf81.firebaseapp.com",
    projectId: "playground-fcf81",
    storageBucket: "playground-fcf81.firebasestorage.app",
    messagingSenderId: "42100173169",
    appId: "1:42100173169:web:8c3a27a093af145ea8eed0"
  };

  // Initialize Firebase
  const app = initializeApp(appSetting );
  const db  = getDatabase(app);
  const tblname = 'shoppinglist';
  const shoppingInDB = ref(db, tblname);

 

  function createShopping(){
    push( shoppingInDB,{
        Name:document.getElementById("bread").value,
    });

    alert("okay")

  }
  window.createShopping = createShopping 


  function display(){
    onValue(shoppingInDB, (snapshot) => {
        let trs =""
        const data = snapshot.val();
        let userArray=Object.entries(data);
        // let index = 1;
        for(let each of userArray){
            // console.log(each)
            trs = trs + `
                    <li>${each[1].Name}</li>`
            // index= index+1;
        }
        
        document.getElementById("shopping_list").innerHTML = trs
        
      });

  }
  window.display = display
  display()

  // function deleteShopping(data){
  //  let data=  ref(db,`${tblname}${id}`);
  //  remove(data);
  // }
  // window.deleteShopping = deleteShopping

// function getelements(data){

  addEventListener("click",function(shoppingInDB){
   
  })
  
// }

