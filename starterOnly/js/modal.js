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
const prenom = document.getElementById("prenom");
let inputBirthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let btn =  document.querySelector(".btn-submit");
let response = quantity.value;
const inputs = document.querySelectorAll('input[type ="text"], input[type="email"], input[type ="number"], input[type="checkbox"], input[type="radio"], input[type="date"]' );

let cgv = document.getElementById("checkbox1");



let location1 = document.getElementById('location1');
let location2 = document.getElementById('location2');
let location3 = document.getElementById('location3');
let location4 = document.getElementById('location4');
let location5 = document.getElementById('location5');
let location6 = document.getElementById('location6');

const ville = document.querySelector('checkbox-label');
//function on definie message erreur avec les parametres 



const errorDisplay = ( tag, message, valid) =>{

  const spanMsg = document.querySelector ("."+ tag + "-formData > span" );
  const global = document.querySelector ("."+ tag + "-formData" );



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
errorDisplay ("prenom", "Le prenom doit contenir entre 3 et 20 caracteres");
prenom.style.border = "3px solid red";

 }

 else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
  errorDisplay ("prenom", "Le prenom ne doit pas contenir de caracteres speciaux");
  prenom.style.border = "3px solid red";
 }

 else {
errorDisplay ("prenom", "", true);
errorDisplay.textContent ="";
prenom.style.border = "3px solid green";
 }
 
};

const nomChecker = (value) =>{

  if (value.length > 0 && (value.length < 3 || value.length > 20)){
    errorDisplay ("nom", "Le nom doit contenir entre 3 et 20 caracteres");
     }
    
     else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      errorDisplay ("nom", "Le nom ne doit pas contenir de caracteres speciaux");
     }
    
     else {
    errorDisplay ("nom", "", true);
    errorDisplay.textContent ="";
     }
}


/*
const nameChecker = (value, type) =>{
  if (value.length > 0 && (value.length < 3 || value.length > 20)){
 errorDisplay ("prenom", "Le + type + doit contenir entre 3 et 20 caracteres");
  }
 
  else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
   errorDisplay ("prenom", "Le + 'type'+ ne doit pas contenir de caracteres speciaux");
  }
 
  else {
 errorDisplay ("prenom", "", true);
 errorDisplay.textContent ="";
  }
  
 };
*/


const emailChecker = (value) =>{



  if (!value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {

    errorDisplay("email", "Adresse mail non valide");


  }
  else{
   
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

 

 if ( value > 99 ){
       
   //if (!value.match(/^[0-9]{3}$/)){
     errorDisplay("quantity", "Veuillez mettre un chiffre entre 0-99");
  
    }


//comment exclure , . ???


   else if(value % 1 )/*|| !!value.match(/^[.,]+$/))*/{

   
      errorDisplay("quantity", "Veuillez mettre un chiffre entier");
    }
    
    
    else{
      
      errorDisplay("quantity", "", true);
      
    }
  }



//const villeChecker = (value) =>{

  
//const radioLocations = document.querySelectorAll("input[id='location1'], input[id='location2'], input[id='location3'], input[id='location4'], input[id='location5'], input[id='location6'] ");
/*
let location1 = document.getElementById('location1');
let location2 = document.getElementById('location2');
let location3 = document.getElementById('location3');
let location4 = document.getElementById('location4');
let location5 = document.getElementById('location5');
let location6 = document.getElementById('location6');

*/
/*
if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){


  errorDisplay("ville", "", true);
 
  
}


else{
  
  errorDisplay("ville", "Veuillez choisir la ville ");
 
}
}
  
*/


const cgvChecker = (value) =>{

//  let cgv = document.getElementById("checkbox1");
     
  if (cgv.checked){

    errorDisplay("cgv", "", true);
  
 }
 
   else{
   
    errorDisplay("cgv", "Vous devez vérifier que vous acceptez les termes et conditions ");
  
 
   }
 }





inputs.forEach((input) =>{
  input.addEventListener('input', (e) =>{

    switch (e.target.id){ //test la valeur de champs 

      case "prenom": //si tu es dans le prenom
        prenomChecker(e.target.value, prenom) //je veux que tu analises cette function
        break;

        case "nom": 
        nomChecker(e.target.value) 
        break;

        case "email": 
       emailChecker(e.target.value) 
        break;

        case "birthdate": 
        birthdateChecker(e.target.value) 
        break;

        case "quantity":
        quantityChecker(e.target.value) 
        break;

        case "cgv": 
        quantityChecker(e.target.value) 
        break;

        case "ville":
        villeChecker(e.target.value) 
        break;


        default:
          null;
    }
  })
});

/*

btn.addEventListener("click", (e)=>{
  e.preventDefault();

  if(prenom.validity.valueMissing || nom.validity.valueMissing || email.validity.valueMissing || birthdate.validity.valueMissing || quantity.validity.valueMissing || cgv.validity.valueMissing || location1.validity.valueMissing || location2.validity.valueMissing || location3.validity.valueMissing|| location4.validity.valueMissing || location5.validity.valueMissing|| location6.validity.valueMissing){
    alert("Veuillez remplir les champs manquants en acceptant les conditions d'utilisation");
  }

  else{
    const data ={
      prenom: prenom,
      nom: nom,
      email: email,
    };
    console.log(data);
    alert('Merci ! Votre réservation a été reçue.')
    inputs.forEach((input)=>(input.value = ""));
  }});


*/



btn.addEventListener("click", (e)=>{
  

  e.preventDefault();

 

if (prenom.validity.valueMissing){

errorDisplay ("prenom", "Veuillez remplir ce champs");
  }
 if (nom.validity.valueMissing){
      
  //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
  errorDisplay ("nom", "Veuillez remplir ce champs");

}

if (email.validity.valueMissing){
      
  //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
  errorDisplay ("email", "Veuillez remplir ce champs");

}

if (birthdate.validity.valueMissing){
      
  //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
  errorDisplay ("birthdate", "Veuillez remplir ce champs");

}

if (quantity.validity.valueMissing){
      
  //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
  errorDisplay ("quantity", "Veuillez remplir ce champs");

}

if (cgv.validity.valueMissing){
      
  //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
  errorDisplay ("cgv", "Veuillez remplir ce champs");

}

if (location1.validity.valueMissing || location2.validity.valueMissing || location3.validity.valueMissing|| location4.validity.valueMissing || location5.validity.valueMissing|| location6.validity.valueMissing){
      
 
  errorDisplay ("ville", "Veuillez remplir ce champs");

}


else{
  const data ={
    prenom: prenom,
    nom: nom,
    email: email,
  };
  console.log(data);

  document.querySelector(".modal-body").innerHTML = "<h2>Thank you for submitting your registration details</h2>";

  document.querySelector(".modal-body").innerHTML += "<input class = 'btn-submit btn-submit--close' type ='submit' value= 'Fermer'></>";


  inputs.forEach((input)=>(input.value = ""));
}});


/* comment rajouter la fonctionnalité x sur le button 'fermer' ???

document.querySelector(".btn-submit btn-submit--close").addEventListener ("click", (e)=>{
  document.querySelector(".modal-body").style.opacity = "0";

  //content.style.opacity = "0";
});

 */

  







// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}


//Close Modal Oxana

close.addEventListener ("click", ()=>{
  

  //content.style.opacity = "0";

      content.style.opacity = "0";
      document.querySelector(".bground").style.display = "none";


});