document.getElementById("button2").onclick = function () {
    alert("Button Clicked")
}
document.getElementById("button3").onclick = function () {
    document.getElementById("text").innerHTML = "Changed the text"
}
document.getElementById("button4").onclick = function () {
    document.getElementById("NewParagraph1").innerHTML = "This is a new Paragraph created";
}
document.getElementById("button5").onclick = function () {
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.fontSize = "30px"
}
document.getElementById("button6").onclick = function () {
    var textEntered = "";
    textEntered = document.getElementById("textInput").value;
    document.getElementById("text").innerHTML = textEntered;
}