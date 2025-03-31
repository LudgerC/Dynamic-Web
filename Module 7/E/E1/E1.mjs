// Functie om data op te halen van de opgegeven URL
async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Er is een probleem met het ophalen van de data.");
        }
        
        const data = await response.json();
        // Als de data succesvol is opgehaald, toon de titel van de todo
        resultDiv.innerHTML = `<p>Title: ${data.title}</p>`;
        
    } catch (error) {
        // Als er een fout optreedt, toon een foutmelding
        resultDiv.innerHTML = `<p class="error">Fout: ${error.message}</p>`;
    }
}

// Voeg een event listener toe aan de knop om de fetchData functie aan te roepen
document.getElementById("fetchButton").addEventListener("click", fetchData);
