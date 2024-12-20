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
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
  console.log(db)


document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("u_name").value),
        {
            name: document.getElementById("u_name").value,
            place: document.getElementById("place").value,
            objective: document.getElementById("objective").value,
            date: document.getElementById("date").value,
            education:JSON.stringify(resume.education_details),
            certification:JSON.stringify(resume.certification),
            project:JSON.stringify(resume.project),
            work:JSON.stringify(resume.work_experience),
            skills:JSON.stringify(resume.skills),
            hobbies:JSON.stringify(resume.hobbies),
            personal_details:JSON.stringify(resume.personal_details),
            language_known:JSON.stringify(resume.language_known)

        });



    alert("login successfull !")
})



function addValue(e, key, p_key) {
    if (p_key) {
        resume[p_key][key] = e.value;
    }
    else {
        resume[key] = e.value;
    }
    display_output();

}
window.addValue=addValue


function addArrayValue(key) {
    let value = document.getElementById(key).value;
    resume[key].push(value)
    document.getElementById(key).value = "";
    display_output();
}
window.addArrayValue=addArrayValue

function addMultiValue(p_key,key1, key2, key3, key4) {
    let newObj = {};
    
    if (key4) {
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;
        newObj[key3] = document.getElementById(key3).value;
        newObj[key4] = document.getElementById(key4).value;
        resume[p_key].push(newObj);
        document.getElementById(key1).value ="";
        document.getElementById(key2).value ="";
        document.getElementById(key3).value ="";
        document.getElementById(key4).value ="";
    }
    else if (key3) {
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;
        newObj[key3] = document.getElementById(key3).value;
        resume[p_key].push(newObj);
        document.getElementById(key1).value ="";
        document.getElementById(key2).value ="";
        document.getElementById(key3).value ="";

    }

    display_output();
}
window.addMultiValue=addMultiValue
   

    
function display_output(){
document.getElementById('output').innerHTML= JSON.stringify(resume);
}