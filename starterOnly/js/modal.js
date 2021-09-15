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
let btnForm = document.querySelector(".btn-submit");
let response = quantity.value;
const inputs = document.querySelectorAll(
  'input[type ="text"], input[type="email"], input[type ="number"], input[type="checkbox"], input[type="radio"], input[type="date"]'
);
const arr = [inputs];
let cgv = document.getElementById("checkbox1");

let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location5");
let location6 = document.getElementById("location6");

const ville = document.querySelector("checkbox-label");

const testBtn = document.querySelectorAll(".btn-signup modal-btn");
//function on definie message erreur avec les parametres

const errorDisplay = (tag, message, valid) => {
  const spanMsg = document.querySelector("." + tag + "-formData > span");
  const global = document.querySelector("." + tag + "-formData");

  if (!valid) {
    global.classList.add("error");
    spanMsg.textContent = message;
  } else {
    global.classList.remove("error");
    spanMsg.textContent = message;
  }
};

//on definie des functions pour chaque champs input

const prenomChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("prenom", "Le prenom doit contenir entre 3 et 20 caracteres");
    prenom.style.border = "3px solid red";
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "prenom",
      "Le prenom ne doit pas contenir de caracteres speciaux"
    );
    prenom.style.border = "3px solid red";
  } else {
    errorDisplay("prenom", "", true);
    errorDisplay.textContent = "";
    prenom.style.border = "3px solid green";
  }
};

const nomChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("nom", "Le nom doit contenir entre 3 et 20 caracteres");
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("nom", "Le nom ne doit pas contenir de caracteres speciaux");
  } else {
    errorDisplay("nom", "", true);
    errorDisplay.textContent = "";
  }
};

/* je n'ai pas reussi cibler l'element prenom et nom dans cette fonction 


const nameChecker = (type,value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(type, "Le "+ type + " doit contenir entre 3 et 20 caracteres");

    element.style.border = "3px solid red";

  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      type,
      "Le "+type+"  ne doit pas contenir de caracteres speciaux"
    );

   element.style.border = "3px solid red";

  } else {
    errorDisplay(type, "", true);
    errorDisplay.textContent = "";
    element.style.border = "3px solid green";
  }
};

*/
const emailChecker = (value) => {
  if (
    !value.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    errorDisplay("email", "Adresse mail non valide");
  } else {
    errorDisplay("email", "", true);
  }
};

const birthdateChecker = (value) => {
  let today = new Date();
  let birth = new Date(inputBirthdate.value);
  //let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //(!regex.test(birth))

  if (birth >= today) {
    errorDisplay("birthdate", "Vous devez entrer votre date de naissance");
  } else {
    errorDisplay("birthdate", "", true);
  }
};

const quantityChecker = (value) => {
  if (value > 99) {
    //if (!value.match(/^[0-9]{3}$/)){
    errorDisplay("quantity", "Veuillez mettre un chiffre entre 0-99");
  }

  //comment exclure , . ???
  else if (value % 1) {
    /*|| !!value.match(/^[.,]+$/))*/ errorDisplay(
      "quantity",
      "Veuillez mettre un chiffre entier"
    );
  } else {
    errorDisplay("quantity", "", true);
  }
};

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
/*
const cgvChecker = (value) => {
  //  let cgv = document.getElementById("checkbox1");

  if (cgv.checked) {
    errorDisplay("cgv", "", true);
  } else {
    errorDisplay(
      "cgv",
      "Vous devez vérifier que vous acceptez les termes et conditions "
    );
  }
};
*/
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (
      e.target.id //test la valeur de champs
    ) {
      /*
      case "prenom": //si tu es dans le prenom
        nameChecker("prenom", e.target.value); //je veux que tu analises cette function
        break;

      case "nom":
        nameChecker("nom", e.target.value);
        break;
*/
      case "prenom": //si tu es dans le prenom
        prenomChecker(e.target.value); //je veux que tu analises cette function
        break;

      case "nom":
        nomChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "birthdate":
        birthdateChecker(e.target.value);
        break;

      case "quantity":
        quantityChecker(e.target.value);
        break;

      case "cgv":
        quantityChecker(e.target.value);
        break;

      case "ville":
        villeChecker(e.target.value);
        break;

      default:
        null;
    }
  });
});


/*

btnForm.addEventListener("click", (e)=>{
  e.preventDefault();
 // let fields = [prenom, nom, email, birthdate, quantity, cgv, ville];
 // for (let i in fields){

  if(prenom.validity.valueMissing || nom.validity.valueMissing || email.validity.valueMissing || birthdate.validity.valueMissing || quantity.validity.valueMissing || cgv.validity.valueMissing || location1.validity.valueMissing || location2.validity.valueMissing || location3.validity.valueMissing|| location4.validity.valueMissing || location5.validity.valueMissing|| location6.validity.valueMissing){
    alert("Veuillez remplir les champs manquants en acceptant les conditions d'utilisation");
    //fields[i].style.border = "2 px solid red";

   /*
    let err = document.createElement("span");
    err.className = "error";
    err.textContent = "Veuillez remplir ce champs";
    document
      .querySelector(".form")
      [i].parentElement.insertAdjacentElement("afterend", err);
*/
/*

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



//Je teste le check de champs avant d'nevoie de formulaire , input radio ne marche pas 

/*
btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  //let  fields = document.querySelectorAll (".text-control");
  //let errors = document.querySelectorAll (".error");
  //for (let error = 0; error < errors.length; error++){
  // errors[error].remove();

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      let err = document.createElement("span");
      err.className = "error";
      err.textContent = "Veuillez remplir ce champs";
      document
        .querySelector(".form")
        [i].parentElement.insertAdjacentElement("afterend", err);
    }


    //Ne fonctionne pas avec else -modal apparait sans faire apparaitre des msg erreurs 
    /*
    else  {
     
      
        const data = {
          prenom: prenom,
          nom: nom,
          email: email,
        };
        console.log(data);
        
        document.querySelector(".modal-body").innerHTML =
          "<h2>Thank you for submitting your registration details</h2>";
        
        document.querySelector(".modal-body").innerHTML +=
          "<input class = 'btn-submit' type ='submit' value= 'Fermer'></>";
    
    }
  }
});
/*

/*
btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  //let  fields = document.querySelectorAll (".text-control");
  //let errors = document.querySelectorAll (".error");
  //for (let error = 0; error < errors.length; error++){
  // errors[error].remove();

  for (let i in inputs) {
    if (!i.valueMissing) {
      let err = document.createElement("span");
      err.className = "error";
      err.textContent = "Veuillez remplir ce champs";
      document
        .querySelector(".form")
        [i].parentElement.insertAdjacentElement("afterend", err);
    }
    
    else {
     
      
        const data = {
          prenom: prenom,
          nom: nom,
          email: email,
        };
        console.log(data);
        
        document.querySelector(".modal-body").innerHTML =
          "<h2>Thank you for submitting your registration details</h2>";
        
        document.querySelector(".modal-body").innerHTML +=
          "<input class = 'btn-submit' type ='submit' value= 'Fermer'></>";
    
    }
  }
});
*/

// ICI Msg erreurs marche mais je ne sais pas comment imposer l'ensemble de conditions pour chaque if comme ||

  
btnForm.addEventListener("click", (e) => {
  

  if (prenom.validity.valueMissing) {
    e.preventDefault();
    errorDisplay("prenom", "Veuillez remplir ce champs");
  }
  if (nom.validity.valueMissing) {
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    e.preventDefault();
    errorDisplay("nom", "Veuillez remplir ce champs");
  }

  if (email.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("email", "Veuillez remplir ce champs");
  }

  if (birthdate.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("birthdate", "Veuillez remplir ce champs");
  }

  if (quantity.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("quantity", "Veuillez remplir ce champs");
  }

  if (cgv.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("cgv", "Veuillez remplir ce champs");
  }

  if (
    location1.validity.valueMissing ||
    location2.validity.valueMissing ||
    location3.validity.valueMissing ||
    location4.validity.valueMissing ||
    location5.validity.valueMissing ||
    location6.validity.valueMissing
  ) {
    e.preventDefault();
    errorDisplay("ville", "Veuillez remplir ce champs");
  } else {
    const data = {
      prenom: prenom,
      nom: nom,
      email: email,
    };

    
    document.querySelector(".modal-body").innerHTML =
      "<h2>Thank you for submitting your registration details</h2>";
    
    document.querySelector(".modal-body").innerHTML +=
      "<input class = 'btn-submit' type ='submit' value= 'Fermer'></>";

/*
document.querySelector(".modal-body").remove();


let btnFermer = document.createElement("button");
btnFermer.classList.add("btn-signup");

let contenu = document.createTextNode("Fermer");
btnFermer.appendChild(contenu);
document.querySelector(".modal-body").appendChild(btnFermer);
btnFermer

document.querySelector(".btn-submit").addEventListener("click", () => {
  modalbg.style.display = "none";

      inputs.forEach((input) => (input.value = ""));
    });
  }
  */

};


});


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

  //document.querySelector(".modal-body").remove(" h2");
}

//Close Modal Oxana

close.addEventListener("click", () => {
  // content.style.opacity = "0";
  modalbg.style.display = "none";
});
