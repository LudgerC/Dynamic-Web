// Selecteer de benodigde elementen
const dashboard = document.getElementById('dashboard');
const container = document.getElementById('container');
const currentWidthElement = document.getElementById('current-width');
const columnCountElement = document.getElementById('column-count');

// Functie om het aantal kolommen te bepalen op basis van de breedte van de container
const updateDashboardLayout = () => {
    const containerWidth = container.offsetWidth;  // Verkrijg de breedte van de container

    // Toon de huidige breedte
    currentWidthElement.textContent = containerWidth;

    // Bepaal het aantal kolommen op basis van de breedte
    let columns;
    if (containerWidth >= 1000) {
        columns = 3;  // Meer dan 1000px: 3 kolommen
    } else if (containerWidth >= 600) {
        columns = 2;  // Tussen 600px en 999px: 2 kolommen
    } else {
        columns = 1;  // Minder dan 600px: 1 kolom
    }

    // Update de dashboard layout
    dashboard.setAttribute('data-columns', columns);
    columnCountElement.textContent = columns;  // Toon het aantal kolommen
};

// Maak een ResizeObserver om de veranderingen in de grootte van de container te volgen
const resizeObserver = new ResizeObserver(updateDashboardLayout);

// Begin met het observeren van de container
resizeObserver.observe(container);

// Initieel de layout updaten bij het laden van de pagina
updateDashboardLayout();
