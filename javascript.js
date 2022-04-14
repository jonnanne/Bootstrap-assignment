
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

