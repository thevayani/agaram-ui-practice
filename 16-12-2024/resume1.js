

let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    education_details: [],
    project:[],
    certification:[],
    work_experience:[],
    language_known:[]

}

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, onValue, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpUwtKIA_NV2f0UCm-PcIHDW5T6yrozzw",
    authDomain: "resume-194f8.firebaseapp.com",
    databaseURL: "https://resume-194f8-default-rtdb.firebaseio.com",
    projectId: "resume-194f8",
    storageBucket: "resume-194f8.firebasestorage.app",
    messagingSenderId: "998382847033",
    appId: "1:998382847033:web:edc40de3643c274f82b9e8",
    measurementId: "G-XJ67CG9NT2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const intialDb =ref(db,'user/');
  






function display() {
    let list = [];
    onValue(intialDb, (snapshot) => {
        const data = snapshot.val();
        let userArray = Object.entries(data);
        let trs = "";
        let index = 1;
        for (let each of userArray) {
            trs = trs + `<tr>
                    <td>${index}</td>
                    <td>${each[1].name}</td>
                    <td>${JSON.parse(each[1].personal_details).email}</td>
                    <td>
                        <button>
                          Delete
                        </button>
                   
                        <button>
                          Edit
                        </button>
                    </td>
                </tr>`
            index = index + 1;
        }
        document.getElementById("tbbody").innerHTML = trs;
    });

    
}

window.display = display;
display();



