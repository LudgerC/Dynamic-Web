// Verkrijg alle afbeeldingen met de klasse .lazy-image
const images = document.querySelectorAll('.lazy-image');

// Functie om de afbeelding te laden
const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    if (src) {
        image.src = src;
        image.onload = () => {
            image.classList.add('loaded'); // Voeg een klasse toe om geladen afbeeldingen aan te geven
        };
    }
};

// Instantieer de IntersectionObserver om te controleren wanneer een afbeelding in beeld komt
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Wanneer de afbeelding in beeld komt
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target); // Stop met het observeren van deze afbeelding
        }
    });
}, {
    rootMargin: '0px 0px 200px 0px', // Laad de afbeelding al 200px voordat hij in beeld komt
});

// Observeer elke afbeelding
images.forEach(image => {
    observer.observe(image);
});
