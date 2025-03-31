const images = [
    "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
    "https://c02.purpledshub.com/uploads/sites/41/2024/05/fennec-fox-Vulpes-zerda.jpg?webp=1&w=1200",
    "https://critterstop.com/nitropack_static/wuKUaxqsmqLhAYRpfOaXVBNknEpAdAKp/assets/images/optimized/rev-58d9a73/critterstop.com/wp-content/uploads/2024/05/01-why-are-animals-so-cute-1024x538.webp"
];

const gallery = document.querySelector(".gallery");
const progressBar = document.querySelector(".progress-bar");
const loadButton = document.getElementById("loadButton");

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Fout bij laden van ${url}`);
    });
}

function updateProgress(current, total) {
    let percentage = Math.round((current / total) * 100);
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;
}

async function loadImagesSequentially() {
    gallery.innerHTML = ""; // Leeg de galerij
    progressBar.style.width = "0%";
    progressBar.textContent = "0%";

    for (let i = 0; i < images.length; i++) {
        try {
            const img = await loadImage(images[i]);
            gallery.appendChild(img);
            updateProgress(i + 1, images.length);
        } catch (error) {
            console.error(error);
        }
    }
}

loadButton.addEventListener("click", loadImagesSequentially);
