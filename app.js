var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output-div");
console.log(txtInput)

function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler)