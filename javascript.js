document.getElementById("wrong").onclick = function () {
    document.getElementById("alert_wrong").style.display = "block";
}

document.getElementById("close_wrong").onclick = function () {
    this.parentNode.remove();
    return false;
}

document.getElementById("right").onclick = function () {
    document.getElementById("alertRight").style.display = "block";
}