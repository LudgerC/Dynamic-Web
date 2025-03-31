document.addEventListener("DOMContentLoaded", async () => {
    const gebruikersContainer = document.getElementById("gebruikers-container");
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error("Fout bij het ophalen van gebruikers");
        }
        
        const gebruikers = await response.json();
        gebruikersContainer.innerHTML = ""; // Verwijder laad-indicator

        gebruikers.forEach(gebruiker => {
            const gebruikerKaart = document.createElement("div");
            gebruikerKaart.classList.add("gebruiker-kaart");
            gebruikerKaart.innerHTML = `
                <div class="gebruiker-naam">${gebruiker.name}</div>
                <div class="gebruiker-email">${gebruiker.email}</div>
                <div class="gebruiker-telefoon">📞 ${gebruiker.phone}</div>
            `;
            gebruikersContainer.appendChild(gebruikerKaart);
        });
    } catch (error) {
        gebruikersContainer.innerHTML = `<div class='error-melding'>Er is een fout opgetreden: ${error.message}</div>`;
    }
});