'use strict';

let score = 0;
let naam = prompt("Wat is je naam?");
alert(`Welkom bij de quiz, ${naam}!`);

//vraag1
let antwoord1 = prompt("Wat is de afkorting van JavaScript?")
if(antwoord1.toLowerCase().includes("js")){
    alert("Goed gedaan!");
    score++;
}
else{
 alert("Foutive antwoord, de juiste antwoord is js!");   
}

//vraag2
let antwoord2 = prompt("Wat is de afkorting voor HyperText Markup Language?");
if(antwoord2.toLowerCase().includes("html")){
    alert("Goed gedaan!");
    score++;
}
else{
 alert("Foutive antwoord, de juiste antwoord is html!");   
}

//vraag3
let antwoord3 = prompt("Wat is de afkorting van Cascading Style Sheets?")
if(antwoord3.toLowerCase().includes("css")){
    alert("Goed gedaan!");
    score++;
}
else{
 alert("Foutive antwoord, de juiste antwoord is css!");   
}

alert("Jouw totalescore is " + score + ".");

