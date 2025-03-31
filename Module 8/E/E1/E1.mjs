// Verkrijg het thema van localStorage of stel in op light-theme als er geen is
const currentTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(currentTheme);

// Update de tekst op de knop op basis van het huidige thema
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.textContent = currentTheme === 'light-theme' ? 'Schakel naar Donker Thema' : 'Schakel naar Licht Thema';

// Functie om het thema om te schakelen
const toggleTheme = () => {
    // Verander het thema
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Schakel naar Licht Thema';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Schakel naar Donker Thema';
        localStorage.setItem('theme', 'light-theme');
    }
};

// Voeg een event listener toe aan de knop om het thema om te schakelen
themeToggleButton.addEventListener('click', toggleTheme);
