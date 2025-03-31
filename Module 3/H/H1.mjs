// Maak een nieuwe speler
const maakSpeler = (naam = "Player 1") => ({
    naam,
    level: 1,
    health: 100
});

// Doe schade aan de speler
const doeSchade = (speler, schade) => {
    speler.health = Math.max(speler.health - schade, 0); // Zorgt ervoor dat de health niet onder 0 komt
};

// Verhoog het level van de speler
const levelOmhoog = (speler) => {
    speler.level += 1;
    speler.health = 100; // Reset de health naar 100 bij level-up
};

// Maak een nieuwe speler
let speler = null;

// Functie om een nieuwe speler te maken
const maakNieuweSpeler = () => {
    const spelerNaam = document.getElementById('playerName').value || "Player 1";
    speler = maakSpeler(spelerNaam);
    toonSpelerStats();
};

// Functie om schade toe te voegen aan de speler
const doeSchadeBijSpeler = () => {
    if (speler) {
        doeSchade(speler, 25); // Voeg 25 schade toe
        toonSpelerStats();
    }
};

// Functie om het level van de speler omhoog te doen
const levelSpelerOp = () => {
    if (speler) {
        levelOmhoog(speler);
        toonSpelerStats();
    }
};

// Toon de statistieken van de speler
const toonSpelerStats = () => {
    const statsDiv = document.getElementById('playerStats');
    if (speler) {
        statsDiv.innerHTML = `
            <h3>Speler: ${speler.naam}</h3>
            <p>Level: ${speler.level}</p>
            <p>Health: ${speler.health}</p>
        `;
    } else {
        statsDiv.innerHTML = "<p>Maak eerst een nieuwe speler!</p>";
    }
};
