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
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const btnForm = document.querySelector(".btn-submit");
const response = quantity.value;
const inputs = document.querySelectorAll(
  'input[type ="text"], input[type="email"], input[type ="number"], input[type="checkbox"], input[type="radio"], input[type="date"]'
);

const cgv = document.getElementById("checkbox1");

let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location5");
let location6 = document.getElementById("location6");

const ville = document.querySelector("checkbox-label");

//const testBtn = document.querySelectorAll(".btn-signup modal-btn");

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

const nameChecker = (type, value, element) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      type,
      "Le " + type + " doit contenir entre 3 et 20 caracteres"
    );

    element.style.border = "3px solid red";
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      type,
      "Le " + type + "  ne doit pas contenir de caracteres speciaux"
    );

    element.style.border = "3px solid red";
  } else {
    errorDisplay(type, "", true);
    errorDisplay.textContent = "";
    element.style.border = "3px solid green";
  }
};

const emailChecker = (value, element) => {
  if (
    !value.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    errorDisplay("email", "Adresse mail non valide");
    element.style.border = "3px solid red";
  } else {
    errorDisplay("email", "", true);
    element.style.border = "3px solid green";
  }
};

// pourquoi value n'est pas pris en compte ?

const birthdateChecker = (value, element) => {
  let today = new Date();
  let birth = new Date(inputBirthdate.value);
  //let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //(!regex.test(birth))

  if (birth >= today) {
    errorDisplay("birthdate", "Vous devez entrer votre date de naissance");
    element.style.border = "3px solid red";
  } else {
    errorDisplay("birthdate", "", true);
    element.style.border = "3px solid green";
  }
};

//comment exclure (, .) ???

const quantityChecker = (value, element) => {
  if (value > 99) {
    //if (!value.match(/^[0-9]{3}$/)){
    errorDisplay("quantity", "Veuillez mettre un chiffre entre 0-99");
    element.style.border = "3px solid red";
  } else if (value % 1) {
    /*|| !!value.match(/^[.,]+$/))*/ errorDisplay(
      "quantity",
      "Veuillez mettre un chiffre entier"
    );
    element.style.border = "3px solid red";
  } else {
    errorDisplay("quantity", "", true);
    element.style.border = "3px solid green";
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (
      e.target.id //test la valeur de champs
    ) {
      case "prenom": //si tu es dans le prenom
        nameChecker("prenom", e.target.value, prenom); //je veux que tu analises cette function
        break;

      case "nom":
        nameChecker("nom", e.target.value, nom); // je passe le nom de variable
        break;

      case "email":
        emailChecker(e.target.value, email);
        break;

      case "birthdate":
        birthdateChecker(e.target.value, inputBirthdate);
        break;

      case "quantity":
        quantityChecker(e.target.value, quantity);
        break;

      default:
        null;
    }
  });
});

btnForm.addEventListener("click", (e) => {
  let isValid = true;

  if (prenom.validity.valueMissing) {
    e.preventDefault();
    errorDisplay("prenom", "Veuillez remplir ce champs");
    isValid = false;
  }
  if (nom.validity.valueMissing) {
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    e.preventDefault();
    errorDisplay("nom", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (email.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("email", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (birthdate.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("birthdate", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (quantity.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("quantity", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (cgv.validity.valueMissing) {
    e.preventDefault();
    //errorDisplay ("inputs.input", "Veuillez remplir ce champs")
    errorDisplay("cgv", "Veuillez remplir ce champs");
    isValid = false;
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
    isValid = false;
  } else {
    const data = {
      prenom: prenom,
      nom: nom,
      email: email,
    };
  }

  if (isValid === true) {
    //  document.querySelector(".modal-body").innerHTML =
    //  "<h2>Thank you for submitting your registration details</h2>";

//Je crees le text 
   document.querySelector("form").remove();

    let text = document.createElement("h2");
    text.classList.add("textmodal");
    let textmsg = document.createTextNode(
      "Thank you for submitting your registration details"
    );
    text.appendChild(textmsg);
    document.querySelector(".modal-body").appendChild(text);



//Je crees le button


    let btnFermer = document.createElement("button");
    btnFermer.classList.add("modal-btn");

    let contenu = document.createTextNode("Fermer");
    btnFermer.appendChild(contenu);
    document.querySelector(".modal-body").appendChild(btnFermer);

    btnFermer.addEventListener("click", () => {
      modalbg.style.display = "none";
      window.location.reload()
    });
  }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";

 
  //document.querySelector("form").reset();
  //document.querySelector(".modal-body").removeChild(btnFermer);
  // document.querySelector(".modal-body").removeChild(h2) ;
  //const elem = document.querySelector(".modal-body");
  //elem.parentNode.removeChild(elem);

  //document.querySelector(".modal-body").remove(" h2");
}

//Close Modal Oxana

close.addEventListener("click", () => {
  // content.style.opacity = "0";
  modalbg.style.display = "none";
});
