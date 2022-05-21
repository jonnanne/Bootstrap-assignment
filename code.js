//Ensimmäisen kortin sisällön muokkaus
let cardHead = document.querySelector("#airways .card-title");
let cardText = document.querySelector("#airways .card-text");


cardHead.textContent = "Hengitysteiden avaaminen";
cardText.textContent = "Avaa hengitystiet kohottamalla toisen käden kahdella sormella leuan kärkeä ylöspäin ja taivuttamalla päätä taaksepäin toisella kädellä otsaa painaen. Paina poski tai kämmenselkä suuta ja nenää vasten. Tunnetko hengityksen?";

//Toisen kortin sisällön muokkaus
let secondCardHead = document.querySelector("#unconscious .card-title");
let secondCardText = document.querySelector("#unconscious .card-text");

secondCardHead.textContent = "Ei herää, mutta hengitys tuntuu - tajuton";
secondCardText.textContent = "Käännä henkilö kylkiasentoon hengityksen turvaamiseksi. Jää henkilön viereen tarkkailemaan vointia kunnes ammattiapu saapuu paikalle."


/*Kolmannen kortin sisällön muokkaus
let thirdCardHead = document.querySelector("#cpr .card-title");
let thirdCardText = document.querySelector("#cpr .card-text");

thirdCardHead.textContent = "Ei herää, hengitys ei tunnu - eloton"
thirdCardText.textContent = "Aloita elvytys välittömästi mikäli et tunne hengitystä. Aseta kädet keskelle rintalastaa ja painele koko kehon voimalla rintalastaa alaspäin 30 kertaa. Tämän jälkeen avaa hengitystiet uudelleen nostamalla leuka yläasentoon. Sulje sieraimet ja puhalla henkilön keuhkoihin ilmaa suun kautta 2 kertaa. Siirry sitten taas rintalastalle ja jatka painelua. Toista tätä rytmillä 30x painelu, 2xpuhallus kunnes ammattiapu saapuu paikalle."
*/

//Nappien toiminnot

const YES_BTN = document.getElementById("yes");
const NO_BTN = document.getElementById("no");
const RETURN_BTN = document.getElementById("return");
const RETURNB_BTN = document.getElementById("returnB");
const SECOND_CARD = document.getElementById("unconscious");
const THIRD_CARD = document.getElementById("cpr");

//Määritellään sisältöjen näkyvyys
SECOND_CARD.classList.add("alert");
THIRD_CARD.classList.add("alert");

//Kyllä-napin toiminto
YES_BTN.addEventListener("click", showOptA);

function showOptA() {
    SECOND_CARD.classList.remove("alert");
}

//Ei-napin toiminto
NO_BTN.addEventListener("click", showOptB);

function showOptB() {
    THIRD_CARD.classList.remove("alert");
}

//Paluu takaisin lähtöpisteeseen SECOND-CARD elementin "Palaa takaisin alkuun"-napilla
RETURN_BTN.addEventListener("click", showOptC);

function showOptC() {
    SECOND_CARD.classList.add("alert");
    THIRD_CARD.classList.add("alert");
}

//Paineluiden ja puhallusten kirjoittaminen THIRD-CARD elementtin input kenttiin sekä "Palaa takaisin alkuun "-napin toiminto

let chest = document.getElementById("chest");
let breath = document.getElementById("breath");

chest.addEventListener("input", checkValidity);
breath.addEventListener("input", checkValid);

RETURNB_BTN.addEventListener("click", showOptC);

function showOptC() {
    SECOND_CARD.classList.add("alert");
    THIRD_CARD.classList.add("alert");
}

/*
*
* @param {Event} event
*/

function checkValidity(event) {
    let elem = event.currentTarget;

    let number = elem.value; 

    if(number == 30){
        chest.classList.remove("invalid")
    }
    else {chest.classList.add("invalid")}
}

function checkValid(event) {
    let elem = event.currentTarget;

    let numberB = elem.value; 

    if(numberB == 2){
        breath.classList.remove("invalid")
    }
    else { breath.classList.add("invalid")}
}

