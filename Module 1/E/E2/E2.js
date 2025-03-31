'use strict'

//selecteer het loading message element
const loadingMessage = document.getElementById('loadingMessage');

//wacht tot alles geladen is 
window.addEventListener('load', function(){
    //verander tekst naar Welcome
    loadingMessage.textContent = 'Welcome!';

    //verberg na 2 seconden
    setTimeout(function(){
    loadingMessage.style.display = 'none';
    }, 2000);

})