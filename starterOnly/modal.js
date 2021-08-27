function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// New const Oxana
const close = document.querySelector(".close");
const content = document.querySelector(".content");
let inputBirthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let btn =  document.querySelector(".btn-submit");

const inputs = document.querySelectorAll('input[type ="text"], input[type="email"], input[type ="number"], input[type="checkbox"], input[type="radio"], input[type="date"]' );


//function on definie message erreur avec les parametres 

//const spanMsg = document.querySelector ("div >span");



const errorDisplay = ( tag, message, valid) =>{

  const global = document.querySelector ("."+ tag + "-formData" );
 const spanMsg = document.querySelector ("."+ tag + "-formData > span" );


    if(!valid){
global.classList.add("error");
spanMsg.textContent = message;

    }
    else{
     global.classList.remove("error");
     spanMsg.textContent = message;

    }


};


//on definie des functions pour chaque champs input

const prenomChecker = (value) =>{
 if (value.length > 0 && (value.length < 3 || value.length > 20)){
errorDisplay ("prenom", "Le prenom doit contenir entre 2 et 20 caracteres");
 }

 else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
  errorDisplay ("prenom", "Le prenom ne doit pas contenir de caracteres speciaux");
 }

 else {
errorDisplay ("prenom", "", true);
errorDisplay.textContent ="";
 }
 
};

const nomChecker = (value) =>{

  if (value.length > 0 && (value.length < 3 || value.length > 20)){
    errorDisplay ("nom", "Le nom doit contenir entre 2 et 20 caracteres");
     }
    
     else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      errorDisplay ("nom", "Le nom ne doit pas contenir de caracteres speciaux");
     }
    
     else {
    errorDisplay ("nom", "", true);
    errorDisplay.textContent ="";
     }
}


const emailChecker = (value) =>{



  if (!value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {

    errorDisplay("email", "Adresse mail non valide");
 
// inputEmail.nextElementSibling.insertAdjacentHTML ("beforebegin", "<h3 class ='msg'> Adresse mail non valide</h3>");
 //inputEmail.style.border = "4px solid red";

  }
  else{
   // inputEmail.style.border = "4px solid green";
   errorDisplay("email", "", true);
  }

};



const birthdateChecker = (value) =>{

  let today = new Date();
 let birth = new Date(inputBirthdate.value);
//let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
//(!regex.test(birth))


 
  if (birth >= today) {
  
   errorDisplay("birthdate", "Vous devez entrer votre date de naissance");
  }
  
  else  {
    
    errorDisplay("birthdate", "", true);
   
    
  }};




const quantityChecker = (value) =>{

 let response = quantity.value;

 if (response > 99 ){
       
   //if (!value.match(/^[0-9]{3}$/)){
     errorDisplay("quantity", "Veuillez mettre un chiffre entre 0-99");
  
    }
    
    
    else{
      
      errorDisplay("quantity", "", true);
      
    }
  }




const villeChecker = (value) =>{

  
//const radioLocations = document.querySelectorAll("input[id='location1'], input[id='location2'], input[id='location3'], input[id='location4'], input[id='location5'], input[id='location6'] ");

let location1 = document.getElementById('location1');
let location2 = document.getElementById('location2');
let location3 = document.getElementById('location3');
let location4 = document.getElementById('location4');
let location5 = document.getElementById('location5');
let location6 = document.getElementById('location6');

if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){


  errorDisplay("ville", "", true);
 
  
}


else{
  
  errorDisplay("ville", "Veuillez choisir la ville ");
 
}
}
  



const cgvChecker = (value) =>{

  let cgv = document.getElementById("checkbox1");
     
  if (cgv.checked){

    errorDisplay("cgv", "", true);
  // cgv.insertAdjacentHTML ("afterend", "<h3 class ='msg'>C'est noté</h3>");
 }
 
   else{
   
    errorDisplay("cgv", "Vous devez vérifier que vous acceptez les termes et conditions ");
    //cgv.insertAdjacentHTML ("afterend", "<h3 class ='msg'>Vous devez vérifier que vous acceptez les termes et conditions</h3>");
 
   }
 }




//Pour chaque input on defini un eventlistener 
inputs.forEach((input) =>{
  input.addEventListener('input', (e) =>{

    switch (e.target.id){ //test la valeur de champs 

      case "prenom": //si tu es dans le prenom
        prenomChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "nom": //si tu es dans le prenom
        nomChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "email": //si tu es dans le prenom
       emailChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "birthdate": //si tu es dans le prenom
        birthdateChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "quantity": //si tu es dans le prenom
        quantityChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "ville": //si tu es dans le prenom
       villeChecker(e.target.value) //je veux que tu analises cette function
        break;

        case "cgv": //si tu es dans le prenom
        cgvChecker(e.target.value) //je veux que tu analises cette function
        break;

        default:
          null;
    }
  })
});


/*
function checkCGV(){
  
 
let cgv = document.getElementById("checkbox1");
     
 if (cgv.checked){
  cgv.insertAdjacentHTML ("afterend", "<h3 class ='msg'>C'est noté</h3>");
}

  else{
  
   cgv.insertAdjacentHTML ("afterend", "<h3 class ='msg'>Vous devez vérifier que vous acceptez les termes et conditions</h3>");

  }
}
*/

btn.addEventListener("click", (e)=>{
  e.preventDefault();
  cgvChecker () ;
villeChecker();
});



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Close Modal Oxana

close.addEventListener ("click", ()=>{
  

  //content.remove();

      content.style.opacity = "0";


});