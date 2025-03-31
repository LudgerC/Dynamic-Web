document.addEventListener("DOMContentLoaded", () => {
    const cart = []; // Array om producten op te slaan

    // Referenties naar HTML-elementen
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const addToCartButton = document.getElementById("addToCart");
    const cartItemsList = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");
    const sortByPriceButton = document.getElementById("sortByPrice");

    function updateCart() {
        cartItemsList.innerHTML = ""; // Leeg de lijst
        let total = 0;
        cart.forEach((product, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} - €${product.price.toFixed(2)}`;
            
            // Verwijder-knop
            const removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1); // Verwijder product uit array
                updateCart(); // Update de weergave
            });
            
            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);
            total += product.price;
        });
        totalElement.textContent = total.toFixed(2); // Toon het totaalbedrag
    }
    
    addToCartButton.addEventListener("click", () => {
        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        
        if (name && !isNaN(price) && price > 0) {
            cart.push({ name, price }); // Voeg product toe aan de array
            productNameInput.value = "";
            productPriceInput.value = "";
            updateCart(); // Werk de winkelwagen bij
        }
    });
    
    sortByPriceButton.addEventListener("click", () => {
        cart.sort((a, b) => a.price - b.price); // Sorteer op prijs
        updateCart(); // Werk de lijst bij
    });
});
