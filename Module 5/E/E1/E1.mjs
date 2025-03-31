document.getElementById("startButton").addEventListener("click", function() {
    const kleuren = ["red", "green", "blue"];
    let index = 0;

    function veranderKleur() {
        document.body.style.backgroundColor = kleuren[index];
        index++;
        if (index < kleuren.length) {
            setTimeout(veranderKleur, 1000);
        }
    }

    veranderKleur();
});
