
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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
  const tblname = 'shoppinglist/';
  const shoppingInDB = ref(db, tblname);

 

  function createShopping(){
    push( shoppingInDB,{
        Name:document.getElementById("bread").value,
      
    });

    alert("okay")
    clear()

  }
  window.createShopping = createShopping 

function clear(){
  document.getElementById("bread").value = ""
}
                                  
function display(){
  onValue(shoppingInDB, (snapshot) => {
      let trs =""
      const data = snapshot.val();
      let userArray=Object.entries(data);
      // let index = 1;
      for(let each of userArray){
         // console.log(each)
          trs = trs + `
                  <li><a href="#" onclick="deleteShopping('${each[0]}')">${each[1].Name}</a>
                  <button onclick='editShopping("${each[0]}",${JSON.stringify(each[1])})'>edit</button>
                  </li>`
          // index= index+1;
      }
      
      document.getElementById("shopping_list").innerHTML = trs
      
    });

}
window.display = display
display()



//
  function deleteShopping(id){
  alert(id)
   let data=  ref(db,`${tblname}${id}`);
   remove(data);
  }
  window.deleteShopping = deleteShopping

//
  function editShopping(id,data){
    
    document.getElementById('bread').value = data.Name;
    document.getElementById('update_id').value = id;
    document.getElementById('add_to_cart').style.display ="none";
    document.getElementById('update').style.display = "block";

  }
window.editShopping = editShopping

//
  function updateShopping(){
   let Name = document.getElementById('bread').value;
   let id = document.getElementById('update_id').value;

  
    set(ref(db,'shoppinglist/'+id),{
         Name:Name,
         
       });
      clear()
       document.getElementById('add_to_cart').style.display ="block";
       document.getElementById('update').style.display = "none";

  }
window. updateShopping =  updateShopping
display()



 

