var seks = document.getElementById("seks")

var boks = document.getElementById("boks");

var idk = document.getElementById("idk");

var box = document.getElementById("box")

var farge = document.getElementsByName("farge")



var timerStart = document.getElementById("timerStart");
var timerRepeat = document.getElementById("timerRepeat");
var timerReset = document.getElementById("timerReset");

var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var rgb = document.getElementById("rgb")

var timerID;
var timerTid = seks.value;
idk.innerHTML = seks.value + "ms";




timerStart.onclick = function(){
    /*Når det er gått 3000ms = 3 sek, da skal
    funksjonen "hilsen()" kjøres*/
    timerID = setTimeout("hilsen()", timerTid);
}

timerRepeat.onclick = function(){
    /**/
    timerID = setInterval("mangeHilsener()", timerTid)
}

timerReset.onclick = function(){
    /*Stoppe tidsuret*/
    clearTimeout(timerID);
    box.innerHTML = "";
}

function mangeHilsener(){
    box.innerHTML += "SUP";
}

function hilsen(){
    box.innerHTML = "SUP";
}

farge.onclick = function(){
    if (red.checked){
        document.querySelector(".boks").style.backgroundColor = "red";
        boks.style = "background-color: red";
        console.log("Red");
    }
    if (green.checked){
        document.querySelector(".boks").style.backgroundColor = "green";
        boks.style = "background-color: green";
        console.log("Green");
    }
    if (blue.checked){
        document.querySelector(".boks").style.backgroundColor = "blue";
        boks.style = "background-color: blue";   
        console.log("Blue");             
    }
    if (rgb.checked){
        document.querySelector(".boks").style.backgroundColor = "rgb(red, green, blue)";
        boks.style = "background-color: rgb(red, green, blue)";  
        console.log("RGB B*TCH!");              
    }
}
/*
red.onclick = function(){
    boks.style = "background-color: red";
}
green.onclick = function(){
    boks.style = "background-color: green";
}
blue.onclick = function(){
    boks.style = "background-color: blue";
}
rgb.onclick = function(){
    boks.style = "background-color: red";
    boks.style = "background-color: green";
    boks.style = "background-color: blue";
    boks.style = "background-color: purple";
    boks.style = "background-color: yellow";
    boks.style = "background-color: orange";
    boks.style = "background-color: turquoise";
}*/

document.addEventListener("keydown", function(evt){
    if (evt.key === "r"){
        boks.style = "background-color: red";
        red.checked = true;
    }
    if (evt.key === "g"){
        boks.style = "background-color: green";
        green.checked = true;
    }
    if (evt.key === "b"){
        boks.style = "background-color: blue";
        blue.checked = true;
    }
    if (evt.key === "n"){
        boks.style = "background-color: rgb(red, green, blue)";
        rgb.checked = true;
    }
});

/*document.onkeydown = function(evt){
    if (evt.keyCode == 82){
        boks.style = "background-color: red";
        red.checked = true;
    }
    if (evt.keyCode == 71){
        boks.style = "background-color: green";
        green.checked = true;
    }
    if (evt.keyCode == 66){
        boks.style = "background-color: blue";
        blue.checked = true;
    }
}*/
seks.onchange = function(){
    timerTid = seks.value;
    idk.innerHTML = seks.value + "ms";
}