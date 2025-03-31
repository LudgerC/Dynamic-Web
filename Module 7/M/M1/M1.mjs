const products = [
    { id: 1, name: "T-shirt", price: 15, quantity: 2 },
    { id: 2, name: "Jeans", price: 45, quantity: 1 },
    { id: 3, name: "Sokken", price: 5, quantity: 3 }
];

const calculateTotal = (items) => {
    let total = 0;

    for (const item of items) {
        console.log(`Product: ${item.name}, Prijs: €${item.price}, Aantal: ${item.quantity}`);
        total += item.price * item.quantity; // Opgeloste fout: Nu vermenigvuldigt de prijs met de hoeveelheid
    }

    console.log(`Totaalprijs berekend: €${total}`);
    return total;
};

document.getElementById("calculateButton").addEventListener("click", () => {
    const total = calculateTotal(products);
    document.getElementById("total").textContent = total;
});
