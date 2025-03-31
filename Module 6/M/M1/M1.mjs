document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".endpoint-knop");
    const statusInfo = document.getElementById("status-info");
    const responseDetails = document.getElementById("response-details");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const statusCode = button.getAttribute("data-code");
            const url = `https://httpstat.us/${statusCode}`;

            try {
                const response = await fetch(url);
                const statusClass = getStatusClass(response.status);
                
                statusInfo.innerHTML = `
                    <span class="${statusClass}">Status: ${response.status} ${response.statusText}</span><br>
                    Succesvol: ${response.ok}<br>
                    Categorie: ${getStatusCategory(response.status)}
                `;

                let headers = "";
                response.headers.forEach((value, key) => {
                    headers += `${key}: ${value}\n`;
                });

                responseDetails.textContent = `
                    Response Type: ${response.type}\n\nHeaders:\n${headers}
                `;
            } catch (error) {
                statusInfo.innerHTML = `<span class="status-client-error">Fout: Netwerkprobleem of ongeldig verzoek</span>`;
                responseDetails.textContent = error;
            }
        });
    });

    function getStatusClass(status) {
        if (status >= 200 && status < 300) return "status-success";
        if (status >= 300 && status < 400) return "status-redirect";
        if (status >= 400 && status < 500) return "status-client-error";
        if (status >= 500) return "status-server-error";
        return "";
    }

    function getStatusCategory(status) {
        if (status >= 200 && status < 300) return "2xx (Succesvolle verzoeken)";
        if (status >= 300 && status < 400) return "3xx (Redirects)";
        if (status >= 400 && status < 500) return "4xx (Client fouten)";
        if (status >= 500) return "5xx (Server fouten)";
        return "Onbekend";
    }
});