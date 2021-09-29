var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

var colorPicker = function(){
    body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = "Hex Values: " + color1.value + " " + color2.value + ";";
};

var btnColorPicker = function(){
   button.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = "Hex Values: " + color1.value + " " + color2.value + ";";
};

var randomPicker = function(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.background =
    "linear-gradient(to right, " 
    + randomColor
    + ", " 
    + randomColor2 
    + ")";
    button.style.background =
    "linear-gradient(to right, " 
    + randomColor
    + ", " 
    + randomColor2 
    + ")";
    color1.value = randomColor;
    color2.value = randomColor2;
    

    css.textContent = "Hex Values: " + randomColor + " " + randomColor2 + ";";
};

button.addEventListener("click", randomPicker);
// button.addEventListener("click", btnColorPickerRandom);

color1.addEventListener("input", colorPicker);
color1.addEventListener("input", btnColorPicker);

color2.addEventListener("input", colorPicker);
color2.addEventListener("input", btnColorPicker);