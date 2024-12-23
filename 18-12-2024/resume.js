let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    education_details: [],
    project:[],
    certification:[],
    work_experience:[],
    language_known:[],
    name:[],
    place:[],
    objective:[],
    date:[]


}

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref,onValue, push,remove,set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
  const tblName = 'user/'
  const intialDb = ref(db, tblName);
  function createresume(){


// document.getElementById("submit").addEventListener('click', function(e) {
//     e.preventDefault();
//     set(ref(db, 'user/' + document.getElementById("u_name").value),

push(intialDb,
        {
            name: resume?.name,
            place: resume?.place,
            objective: resume?.objective,
            date: resume?.date,
            education:JSON.stringify(resume?.education_details),
            certification:JSON.stringify(resume?.certification),
            project:JSON.stringify(resume?.project),
            work:JSON.stringify(resume?.work_experience),
            skills:JSON.stringify(resume?.skills),
            hobbies:JSON.stringify(resume?.hobbies),
            personal_details:JSON.stringify(resume?.personal_details),
            language_known:JSON.stringify(resume?.language_known)

        });



    alert("login successfull !")
    window.location.href="list.html";

    }

    window.createresume=createresume;
    

    function display() {
      let list = [];
      onValue(intialDb, (snapshot) => {
       
        let trs = "";
        if(snapshot.exists()){
          const data = snapshot.val();
          let userArray = Object.entries(data);     //obj to array
          let index = 1;
        for (let each of userArray) {
          console.log(each)
          trs = trs + `<tr>
                        <td>${index}</td>
                        <td>${each[1].name}</td>
                        <td>
                        <button onclick='editResume("${each[0]}",${JSON.stringify(each[1])})'>edit</button>
                        <button onclick="delateResume('${each[0]}')">delete</button>
                        </td>
    
                        </tr>`
          index = index + 1;
          
        }
      }
        document.getElementById("tbody").innerHTML = trs;
      });
    
    
    }
    
    window.display = display;
    display();
   

    function delateResume(id){
        let data =ref(db,`${tblName}${id}`);  
        remove(data);
        }

    window.delateResume=delateResume;



    function editResume(id,data){
      console.log(data.name)
      document.getElementById('email').value = data.email;
      document.getElementById('update_name').value = data.name;
      
    }
    window.editResume=editResume;
    


    function updateResume(){
      let u_name = document.getElementById('update_name').value;
      let id = document.getElementById('update_id').value;
      set(ref(db,'user/'+id),{
        name: name,
        place: "",
        objective:"",
        date: "",
        education:"",
        certification:"",
        project:"",
        work:"",
        skills:"",
        hobbies:"",
        personal_details:"",
        language_known:""

      })
      display()
    }

    
    
    window.updateResume=updateResume;
    
  


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
window.addArrayValue=addArrayValue;

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