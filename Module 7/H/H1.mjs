// Data simulatie - gebruikers database
const users = [
    { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
    { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
    { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false }
];

// Functie om een gebruiker op te halen
const getUser = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error(`Gebruiker met ID ${userId} niet gevonden.`);
    return user.name;
};

// Functie om admin-rechten te controleren
const checkAdminRights = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error(`Gebruiker met ID ${userId} niet gevonden.`);
    return user.isAdmin;
};

// Functie om e-mail te formatteren
const formatEmail = (email) => {
    if (!email.includes("@")) throw new Error(`Ongeldig e-mailadres: ${email}`);
    const username = email.match(/^(.+)@/)[1];
    return username.toUpperCase() + "@" + email.split('@')[1];
};

// Functie om gebruikers te verwerken en de output in de UI te tonen
const processUsers = () => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Reset output

    for (let i = 1; i <= users.length; i++) {
        try {
            const user = getUser(i);
            const isAdmin = checkAdminRights(i);
            const formattedEmail = formatEmail(users[i - 1].email);

            const result = `<div class="log">✅ Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}</div>`;
            outputDiv.innerHTML += result;

        } catch (error) {
            console.error(error.message);
            outputDiv.innerHTML += `<div class="log error">❌ Fout: ${error.message}</div>`;
        }
    }
};

// Event listener voor de knop
document.getElementById("startButton").addEventListener("click", processUsers);
