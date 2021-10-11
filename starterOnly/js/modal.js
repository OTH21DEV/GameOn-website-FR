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
//const response = quantity.value;
const inputs = document.querySelectorAll(
  'input[type ="text"], input[type="email"], input[type ="number"], input[type="checkbox"], input[type="radio"], input[type="date"]'
);

const cgv = document.getElementById("checkbox1");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

const ville = document.querySelector("checkbox-label");

const radios = document.querySelectorAll('input[type="radio"]');

const form = document.querySelector("form");

// je reinitialise le formulaire au chargement de la page pour vider les champs sur Firefox

form.reset();

//fonction pour definire un message d'erreur personalisable selon le champs

const errorDisplay = (tag, message, valid) => {

  // message de chaque champs (se trouve dans le span )

  const spanMsg = document.querySelector("." + tag + "-formData > span");

  // pointe le nom de champs 
  const global = document.querySelector("." + tag + "-formData");

  if (!valid) {
    global.classList.add("error");
    spanMsg.textContent = message;
  } else {
   global.classList.remove("error");
    spanMsg.textContent = message;
  }
};

//fonction pour definire un message pour les champs Nom et Prenom

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

//fonction pour definire un message pour le champs Email

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

//fonction pour definire un message pour le champs Date de naissance

const birthdateChecker = (value, element) => {
  let today = new Date();
  let birth = new Date(value);

  if (birth >= today) {
    errorDisplay("birthdate", "Vous devez entrer votre date de naissance");
    element.style.border = "3px solid red";
  } else {
    errorDisplay("birthdate", "", true);
    element.style.border = "3px solid green";
  }
};

//fonction pour definire un message pour le champs Nombre de tournois

const quantityChecker = (value, element) => {
  //  laisse passer chiffre avec virgule 2,

  if (value > 99) {
    errorDisplay("quantity", "Veuillez mettre un chiffre entre 0-99");
    element.style.border = "3px solid red";
  } else if (value % 1 || value == "") {
    errorDisplay("quantity", "Veuillez mettre un chiffre entier");
    element.style.border = "3px solid red";
  } else {
    errorDisplay("quantity", "", true);
    element.style.border = "3px solid green";
  }
};

// fonction pour CGV et Villes

const radioChecker = (value, element) => {
  if (value.length > 0) {
    errorDisplay(element, "", true);
  }
};

//............................................................


radios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    radioChecker(e.target.value, "ville");
  });
});

cgv.addEventListener("click", (e) => {
  radioChecker(e.target.value, "cgv");
});

// Switch pour verifier les inputs des champs Nom, Prenom, Email, Date de naissance et Nombre de tournois

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (
      e.target.id //test la valeur de champs
    ) {
      case "prenom": //si tu es dans le prenom
        console.log(e);
        nameChecker("prenom", e.target.value, prenom); //on  analise cette fonction : (nameChecker (avec les arguments comme ceux ci pour les parametres :type, value, element))
        break;

      case "nom":
        nameChecker("nom", e.target.value, nom); // nom ici -  le nom de la variable
        break;

      case "email":
        emailChecker(e.target.value, email);
        break;

      case "birthdate":
        console.log(e);
        birthdateChecker(e.target.value, inputBirthdate);
        break;

      case "quantity":
        console.log(e);
        quantityChecker(e.target.value, quantity);
        break;

      default:
        null;
    }
  });
});

// On rajoute EventListener au button du formulaire pour la validation puis on verifie si les champs sont vides


btnForm.addEventListener("click", (e) => {
  let isValid = true;
  console.log(e);
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    errorDisplay("prenom", "Veuillez remplir ce champs");
    isValid = false;
  }
  if (nom.validity.valueMissing) {
    e.preventDefault();
    errorDisplay("nom", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (email.validity.valueMissing) {
    e.preventDefault();

    errorDisplay("email", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (birthdate.validity.valueMissing) {
    e.preventDefault();

    errorDisplay("birthdate", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (quantity.validity.valueMissing) {
    e.preventDefault();

    errorDisplay("quantity", "Veuillez remplir ce champs");
    isValid = false;
  }

  if (cgv.validity.valueMissing) {
    e.preventDefault();
    console.log(e);

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
  }

  //  else {

  /*
    const data = {
      prenom: prenom,
      nom: nom,
      email: email,
    };*/

  // }

  // si les champs ne sont pas vide on rajoute un modal de confirmation

  if (isValid === true) {
    //J'enleve le formulaire
    document.querySelector(".form").remove();

    // Je crée h2
    let text = document.createElement("h2");

    //Je rajoute la classe au h2

    text.classList.add("textmodal");

    // Je crée la variable et j'attribue le message

    let textmsg = document.createTextNode(
      "Thank you for submitting your registration details"
    );

    // J'attache le message à h2

    text.appendChild(textmsg);

    //J'attache h2 à un element - .modal-body

    document.querySelector(".modal-body").appendChild(text);

    //Je cree le button de fermeture de modal

    let btnFermer = document.createElement("button");
    btnFermer.classList.add("modal-btn");

    let contenu = document.createTextNode("Fermer");
    btnFermer.appendChild(contenu);
    document.querySelector(".modal-body").appendChild(btnFermer);

    btnFermer.style.border = "none";

    //  J'applique un EventListener sur ce nouveau button crée precedement pour fermer le modal et revenir sur la page d'acceuil

    btnFermer.addEventListener("click", () => {
      modalbg.style.display = "none";
      window.location.reload();
    });
  }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close Modal Oxana

close.addEventListener("click", () => {
  modalbg.style.display = "none";
  window.location.reload();
});
