// Functie om een bestelling te maken met standaardwaarden
const maakBestelling = (drank = "cola", snack = "chips") => {
    // Huidige timestamp toevoegen
    const timestamp = new Date().toISOString();

    // Return een object met de bestelling
    return {
        drank: drank,
        snack: snack,
        timestamp: timestamp
    };
};

// Functie om de bestelling te plaatsen
function plaatsBestelling() {
    const drankInput = document.getElementById('drank').value || "cola";
    const snackInput = document.getElementById('snack').value || "chips";
    
    const bestelling = maakBestelling(drankInput, snackInput);

    // Bestelling toevoegen aan de lijst in de HTML
    const bestellingLijst = document.getElementById('bestellingLijst');
    const li = document.createElement('li');
    li.textContent = `Drank: ${bestelling.drank}, Snack: ${bestelling.snack}, Tijd: ${bestelling.timestamp}`;
    bestellingLijst.appendChild(li);

    // Reset de inputvelden
    document.getElementById('drank').value = '';
    document.getElementById('snack').value = '';
}
