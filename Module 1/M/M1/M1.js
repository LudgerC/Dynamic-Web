'use strict'


// Selecteer alle elementen met class "special" en maak de tekst rood
const specialElements = document.querySelectorAll(".special")
specialElements.forEach(element => {
    element.style.color = "red";
});

// Selecteer de tweede paragraaf en onderstreep de tekst
const secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.style.textDecoration = "underline";

// Het aantal "special" elementen in div
document.getElementById("output").textContent = `Aantal special elementen: ${specialElements.length}`;

