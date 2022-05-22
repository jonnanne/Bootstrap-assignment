
//halytaApua-sivun API
fetch('https://friends-quotes-api.herokuapp.com/quotes')
.then(response => response.json())
.then(data => {
    const TEST_BTN = document.getElementById("testaa");

TEST_BTN.addEventListener("click",showAPI);

function showAPI() {
    document.getElementById("testi").innerHTML = "<h4>" + data[10].quote + "</h4>";
}
}
);




//firstPage sivulla kyselyn nappuloiden toiminnot (alertilla oikea/väärä vastaus) sekä boxin sulkeminen
document.getElementById("wrong").onclick = function () {
    document.getElementById("alertWrong").style.display = "block";
}


document.getElementById("closeWrong").onclick = function () {
    document.getElementById("alertWrong").remove();
}

document.getElementById("right").onclick = function () {
    document.getElementById("alertRight").style.display = "block";
}

document.getElementById("closeRight").onclick = function () {
    document.getElementById("alertRight").remove();
}