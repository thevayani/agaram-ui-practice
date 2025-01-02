let resume = {
    personal_details:{},
    skills: [],
    hobbies: [],
    education_details: [],
    project:[],
    certification:[],
    work_experience:[],
    language_known:[],
    name:"",
    place:"",
    objective:"",
    date:""


}

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,ref,onValue, push,remove,set, get,child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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


  function createResume(){
    if(resume.name== ""){
      alert("fill");
    }
    else{push(intialDb,
      {
          name: resume?.name,
          place: resume?.place,
          objective: resume?.objective,
          date: resume?.date,
          education_details:JSON.stringify(resume?.education_details),
          certification:JSON.stringify(resume?.certification),
          project:JSON.stringify(resume?.project),
          work_experience:JSON.stringify(resume?.work_experience),
          skills:JSON.stringify(resume?.skills),
          hobbies:JSON.stringify(resume?.hobbies),
          personal_details:JSON.stringify(resume?.personal_details),
          language_known:JSON.stringify(resume?.language_known)

      });



  alert("finished !")
  window.location.href="list.html";
  
}




   

    }

    window.createResume = createResume;
    

    function display() {
      let list = [];
      onValue(intialDb, (snapshot) => {
       
        let trs = "";
        if(snapshot.exists()){
          const data = snapshot.val();
          let userArray = Object.entries(data);     //obj to array
          let index = 1;
        for (let each of userArray) {
         // console.log(each)
          trs = trs + `<tr>
                        <td>${index}</td>
                        <td>${each[1].name}</td>
                        <td>${each[1].objective}</td>
                        <td>${each[1].place}</td>
                        <td>${each[1].date}</td>
                        <td>${JSON.parse(each[1].personal_details).email}</td>
                        <td>${JSON.parse(each[1].personal_details).father_name}</td>
                        <td>${JSON.parse(each[1].personal_details).mother_name}</td>
                        <td>${JSON.parse(each[1].personal_details).phone_no}</td>
                        <td>${JSON.parse(each[1].personal_details).address}</td>
                        <td>${JSON.parse(each[1].personal_details).dob}</td>
                        <td>${JSON.parse(each[1].personal_details).Gender}</td>

                    
                        
                       
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



    // function displayList(data, key){
  
    //   let ul= "";
    //     for (let each of data) {
    //       ul = ul + `<li>${each}</li>`
    //       document.getElementById(key).innerHTML = ul
    //     }
    //   }


function displayArrayValue(list,id){
  let ul = "";
  for(let each of list){
     ul = ul + `<li>${each}</li>`
  }
  document.getElementById(id).innerHTML = ul
}



      function displayList(){
  
        let trs= ""
          
          for (let each of resume.education_details) {
            console.log(each)
            trs = trs + `<tr>
                     <td>${each.course_name}</td>
                     <td> ${each.course_institute}</td>
                     <td> ${each.course_year}</td>
                     <td> ${each.course_percentage}</td>

                      </tr>`
                       
             }
      document.getElementById("education_details").innerHTML = trs
      }

      function displayWork(){
  
        let trs= ""
          
          for (let each of resume. work_experience) {
            console.log(each)
            trs = trs + `<tr>
                     <td>${each.company_name}</td>
                     <td> ${each.position}</td>
                     <td> ${each.duration}</td>
                     <td> ${each.year}</td>

                      </tr>`
                       
             }
      document.getElementById("work_experience").innerHTML = trs
      }

      function displayCertification(){
  
        let trs= ""
          
          for (let each of resume.certification) {
            console.log(each)
            trs = trs + `<tr>
                     <td>${each.certification_name}</td>
                     <td> ${each.institute_name}</td>
                     <td> ${each.year1}</td>
                     

                      </tr>`
                       
             }
      document.getElementById("certification").innerHTML = trs
      }

      function displayProject(){
  
        let trs= ""
          
          for (let each of resume.project) {
            console.log(each)
            trs = trs + `<tr>
                     <td>${each.title}</td>
                     <td> ${each.company_name1}</td>
                     <td> ${each.year2}</td>
                     

                      </tr>`
                       
             }
      document.getElementById("project").innerHTML = trs
      }
      
    
  



 function editResume(id,data){
      //console.log(data)
      const{father_name,mother_name,dob,address,phone_no,email,Gender} =  JSON.parse(data.personal_details);  
      document.getElementById("update_dob").value = dob;
      document.getElementById("update_address").value = address;
      document.getElementById("update_phone_no").value = phone_no;
      document.getElementById("update_mothername").value = mother_name;
      document.getElementById("update_fathername").value = father_name;
      document.getElementById("update_email").value = email;
      document.getElementById("update_date").value = data.date;
      document.getElementById("update_place").value = data.place;
      document.getElementById("update_objective").value = data.objective;
      document.getElementById("update_name").value = data.name;
      document.getElementById("update_id").value=id;

      let skills = JSON.parse(data.skills);
      resume.skills = skills;
      // displayList()
      displayArrayValue(resume.skills, "skill")


      let hobbies = JSON.parse(data.hobbies);
      resume.hobbies = hobbies;
     displayArrayValue(resume.hobbies, "hby")
      //displayList1()

      

      let language = JSON.parse(data.language_known);
      resume.language_known = language;
      displayArrayValue(resume.language_known,"language")

      let education_details = JSON.parse(data.education_details);
      resume.education_details = education_details;
      displayList()

      let work_experience = JSON.parse(data.work_experience);
      resume.work_experience = work_experience;
      displayWork()

      let certification = JSON.parse(data.certification);
      resume.certification = certification;
      displayCertification()

      let project = JSON.parse(data.project);
      resume.project = project;
      displayProject()


      if(Gender == "male"){
        document.getElementById("update_gender_male").checked = true;
       }
      else{
        document.getElementById("update_gender_female").checked = true;
       }

      resume.name = data.name;
      resume.objective = data.objective;
      resume.date = data.date;
      resume.place = data.place;
      resume.personal_details.Gender = Gender;
      resume.personal_details.email= email;
      resume.personal_details.phone_no = phone_no;
      resume.personal_details.address = address;
      resume.personal_details.dob = dob;
      resume.personal_details.mother_name = mother_name;
      resume.personal_details.father_name= father_name;
     
      
      
      
      
      
    }
    window.editResume=editResume;
    


    function updateResume(){
      // let date = document.getElementById("update_date").value;
      // let place = document.getElementById("update_place").value;
      // let objective = document.getElementById("update_objective").value;
      // let email = document.getElementById("update_email").value;
     // let name = document.getElementById("update_name").value
      // let father_name = document.getElementById("update_fathername").value;
      // let mother_name = document.getElementById("update_mothername").value;
      // let phone_no = document.getElementById("update_phone_no").value;
      // let address =  document.getElementById("update_address").value;
      // let dob = document.getElementById("update_dob").value;
      let name = resume.name;
      let objective =  resume.objective;
      let date =  resume.date;
      let place = resume.place;
      let id = document.getElementById("update_id").value;
      let Gender = resume.personal_details.Gender;
      let email = resume.personal_details.email;
      let phone_no =  resume.personal_details.phone_no;
      let address =  resume.personal_details.address;
      let father_name =  resume.personal_details.father_name;
      let mother_name =  resume.personal_details.mother_name;
      let dob  = resume.personal_details.dob; 
      let skills = resume.skills;
      let hobbies = resume.hobbies;
      let language_known = resume.language_known;
      let education_details = resume.education_details;
      let work_experience = resume.work_experience;
      let certification = resume.certification;
      let project = resume.project;

      
      let p_details = {
        email:email,
        father_name:father_name,
        mother_name:mother_name,
        phone_no:phone_no,
        address:address,
        dob:dob,
        Gender:Gender
       }
    
      set(ref(db,'user/'+id),{
        name: name,
        place: place,
        objective:objective,
        date: date,
        education_details:JSON.stringify(education_details),
        certification:JSON.stringify(certification),
        project:JSON.stringify(project),
        work_experience:JSON.stringify(work_experience),
        skills:JSON.stringify(skills),
        hobbies:JSON.stringify(hobbies),
        personal_details:JSON.stringify(p_details),
        language_known:JSON.stringify(language_known)

      })
      
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
    if(key == "skills"){
      displayArrayValue(resume.skills,"skill")
    }

  else if(key == "hobbies"){
      displayArrayValue(resume.hobbies, "hby")
    
  }
  else if(key == "language_known"){
      displayArrayValue(resume.language_known,"language")
  }
  
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
    displayList();
    displayWork();
    displayCertification();
    displayProject();
}
window.addMultiValue=addMultiValue
   

    
function display_output(){
document.getElementById('output').innerHTML= JSON.stringify(resume);
}