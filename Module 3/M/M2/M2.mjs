// Functie om de score te verwerken
const verwerkScore = (naam = "Onbekend", score = 0) => {
    // Valideer de score
    if (isNaN(score) || score < 0) {
        alert("Score moet een geldig nummer zijn!");
        return;
    }

    // Valideer de naam
    if (naam.trim() === "") {
        alert("Naam mag niet leeg zijn!");
        return;
    }

    // Return het scoreobject
    return {
        naam,
        score,
        tijd: new Date().toLocaleString() // Voeg timestamp toe
    };
};

// Functie om een score toe te voegen aan het scorebord
const voegScoreToe = () => {
    const spelerNaam = document.getElementById('playerName').value;
    const spelerScore = parseInt(document.getElementById('score').value);

    const scoreData = verwerkScore(spelerNaam, spelerScore);

    // Als er een geldig scoreobject is, voeg het toe aan het scorebord
    if (scoreData) {
        const scoreBoard = document.getElementById('scoreBoard');
        const scoreElement = document.createElement('div');
        scoreElement.innerHTML = `Speler: ${scoreData.naam} - Score: ${scoreData.score} - Tijd: ${scoreData.tijd}`;
        scoreBoard.appendChild(scoreElement);
    }

    // Reset de invoervelden
    document.getElementById('playerName').value = "";
    document.getElementById('score').value = "";
};
