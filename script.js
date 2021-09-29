var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var colorPicker = function(){
    body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = "Hex Values: " + color1.value + " " + color2.value + ";";
};

color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);
