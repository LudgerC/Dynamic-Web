document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("haalTekstOp");
    const resultaat = document.getElementById("resultaat");

    async function haalTekstOp() {
        try {
            resultaat.innerHTML = "<p>Bezig met ophalen...</p>";
            
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            
            if (!response.ok) {
                throw new Error("Fout bij ophalen van gegevens");
            }
            
            const data = await response.json();
            
            resultaat.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        } catch (error) {
            resultaat.innerHTML = `<p class='error'>Er is een fout opgetreden: ${error.message}</p>`;
        }
    }

    button.addEventListener("click", haalTekstOp);
});