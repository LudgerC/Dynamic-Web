const counterDiv = document.querySelector(".counter");
const messageDiv = document.querySelector(".message");
const button = document.getElementById("clickButton");

let teller = 0;

button.addEventListener("click", async function() {
    teller++;
    counterDiv.textContent = teller;

    if (teller === 5) {
        messageDiv.textContent = "Gefeliciteerd! Je hebt 5 keer geklikt!";
    }
});
