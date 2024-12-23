// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
const appSetting = {
  dataBaseUrl: "https://practice-87cbd-default-rtdb.firebaseio.com/"
};



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvlqzPoDYhsny_MLSOcqofHXQ6ITqv3w",
  authDomain: "practice-87cbd.firebaseapp.com",
  projectId: "practice-87cbd",
  storageBucket: "practice-87cbd.firebasestorage.app",
  messagingSenderId: "810892700970",
  appId: "1:810892700970:web:130d835ed5b854b56c0253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, 'user/');

function createresume(){
  Push( starCountRef,{
    name:document.getElementById("name").value,
    age:document.getElementById("age").value,
    city:document.getElementById("city").value
  });

  alert("login successful")

}

window.createresume=createresume;




// onValue(starCountRef, (snapshot) => {
//   let list=[];
// const data = snapshot.val();
// let userArray = Object.entries(data);

// let index =1;
// for(let each of userArray){
//   trs=trs+` <tr>
//               <td>${index}</td>
//               <td>${Name}</td>
//               <td>${Age}</td>
//               <td>
//                   <button>Delete</button>
//                   <button>Edit</button>
//               </td>
//           </tr>`
//           index=index+1;
//           list.push(each);
// }
// console.log(list);

// });