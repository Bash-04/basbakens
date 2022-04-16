// get data
const nameInput = document.querySelector("#naam");
const email = document.querySelector("#email");
const bericht = document.querySelector("#bericht");
const gelukt = document.querySelector("#gelukt");
const errorNodes = document.querySelectorAll(".error");

// validate data
function validateform(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Vul eerst uw naam in";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Vul een geldig email adres in";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(bericht.value.length < 18){
        errorNodes[2].innerText = "Type een bericht van ten minste 18 tekens";
        bericht.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        gelukt.innerText = "Goed gedaan! Je hebt zojuist een contact formulier ingevuld wat nog niet werkend is! Maar toch bedankt. stuur mij anders even een mailtje op bas.bakens04@gmail.com, die komen wel bij mij binnen!";
    }
}

// verwijder error / gelukt bericht
function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    gelukt.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    bericht.classList.remove("error-border");
}

// check of het email adres geldig is
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
