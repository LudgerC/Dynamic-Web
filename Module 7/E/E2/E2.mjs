document.addEventListener("DOMContentLoaded", function () {
    const users = [
        { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
        { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
        { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
        { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
    ];

    const button = document.getElementById("showUsers");
    if (button) {
        button.addEventListener("click", showUsersInConsole);
    } else {
        console.error("❌ Knop niet gevonden. Controleer je HTML.");
    }

    function showUsersInConsole() {
        console.clear(); // Leegt de console voor overzichtelijkheid
        
        console.log("📋 Gebruikerslijst:");
        console.table(users); // Toont gebruikers in tabelvorm

        console.group("👥 Gebruikersrollen");
        users.forEach(user => {
            switch (user.role) {
                case "Admin":
                    console.info(`🔹 ${user.name} is een Admin.`);
                    break;
                case "Editor":
                    console.warn(`⚠️ ${user.name} is een Editor.`);
                    break;
                case "User":
                    console.error(`❌ ${user.name} is een gewone gebruiker.`);
                    break;
                default:
                    console.log(`${user.name} heeft een onbekende rol.`);
            }
        });
        console.groupEnd();
    }
});
