// Product class
class Product {
    constructor(naam, prijs, voorraad) {
        this.naam = naam;
        this._prijs = prijs; // Privé variabele voor prijs
        this._voorraad = voorraad; // Privé variabele voor voorraad
    }

    // Setter voor prijs
    set prijs(nieuwePrijs) {
        if (nieuwePrijs >= 0) {
            this._prijs = nieuwePrijs;
        } else {
            console.log("Prijs kan niet onder 0 zijn.");
        }
    }

    // Setter voor voorraad
    set voorraad(nieuweVoorraad) {
        if (nieuweVoorraad >= 0) {
            this._voorraad = nieuweVoorraad;
        } else {
            console.log("Voorraad kan niet onder 0 zijn.");
        }
    }

    // Getter voor verkoopprijs (prijs + 21% BTW)
    get verkoopprijs() {
        return this._prijs * 1.21;
    }

    // Getter voor beschikbaarheid (true als voorraad groter dan 0)
    get beschikbaar() {
        return this._voorraad > 0;
    }
}

// Creëer drie verschillende producten
const product1 = new Product("Laptop", 1000, 5);
const product2 = new Product("Smartphone", 500, 0);
const product3 = new Product("Headphones", 150, 10);

// Toon per product naam, prijs, verkoopprijs en beschikbaarheid
const output = document.getElementById('output');
output.innerHTML = `
    <h2>Product Inventaris:</h2>
    <p><strong>${product1.naam}</strong><br>Prijs: €${product1._prijs}<br>Verkoopprijs (incl. BTW): €${product1.verkoopprijs.toFixed(2)}<br>Beschikbaar: ${product1.beschikbaar ? "Ja" : "Nee"}</p>
    <p><strong>${product2.naam}</strong><br>Prijs: €${product2._prijs}<br>Verkoopprijs (incl. BTW): €${product2.verkoopprijs.toFixed(2)}<br>Beschikbaar: ${product2.beschikbaar ? "Ja" : "Nee"}</p>
    <p><strong>${product3.naam}</strong><br>Prijs: €${product3._prijs}<br>Verkoopprijs (incl. BTW): €${product3.verkoopprijs.toFixed(2)}<br>Beschikbaar: ${product3.beschikbaar ? "Ja" : "Nee"}</p>
`;
