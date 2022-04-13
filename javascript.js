document.getElementById("alertRight").onclick ="";

document.getElementById("wrong").onclick = function () {
    document.getElementById("alertWrong").style.display = "block";
}


document.getElementById("closeWrong").onclick = function () {
    this.parentNode.remove();
    return;
}

document.getElementById("right").onclick = function () {
    document.getElementById("alertRight").style.display = "block";
}

document.getElementById("closeRight").onclick = function () {
    this.parentNode.remove();

}

