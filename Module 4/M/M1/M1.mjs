// Basisklasse Voertuig
class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.merk} ${this.model} is verhuurd.`;
        }
        return `${this.merk} ${this.model} is al verhuurd.`;
    }

    retourneer() {
        this.beschikbaar = true;
        return `${this.merk} ${this.model} is teruggebracht en beschikbaar.`;
    }
}

// Subklasse Auto
class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }

    verhuur() {
        return this.beschikbaar 
            ? super.verhuur() + ` Dit is een ${this.aantalDeuren}-deurs auto op ${this.brandstofType}.`
            : `${this.merk} ${this.model} is al verhuurd.`;
    }
}

// Subklasse Motor
class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, type) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud;
        this.type = type;
    }

    verhuur() {
        return this.beschikbaar 
            ? super.verhuur() + ` Dit is een ${this.type} motor met ${this.cilinderinhoud}cc.`
            : `${this.merk} ${this.model} is al verhuurd.`;
    }
}

// Lijst met voertuigen
const voertuigen = [
    new Auto("Toyota", "Corolla", 2020, 50, 4, "Benzine"),
    new Auto("BMW", "3 Serie", 2022, 80, 4, "Diesel"),
    new Motor("Yamaha", "R1", 2021, 70, 998, "Sport"),
    new Motor("Harley-Davidson", "Street 750", 2019, 60, 750, "Tour")
];

// HTML tabel genereren
function toonVoertuigen() {
    let output = `<table border='1'><tr><th>Merk</th><th>Model</th><th>Jaar</th><th>Prijs</th><th>Status</th><th>Actie</th></tr>`;
    voertuigen.forEach((voertuig, index) => {
        output += `<tr>
            <td>${voertuig.merk}</td>
            <td>${voertuig.model}</td>
            <td>${voertuig.jaar}</td>
            <td>€${voertuig.verhuurPrijs}/dag</td>
            <td>${voertuig.beschikbaar ? "Beschikbaar" : "Verhuurd"}</td>
            <td>
                <button onclick="verhuurVoertuig(${index})">Verhuur</button>
                <button onclick="retourneerVoertuig(${index})">Retourneer</button>
            </td>
        </tr>`;
    });
    output += "</table>";
    document.getElementById("output").innerHTML = output;
}

toonVoertuigen();

// Verhuur functie
function verhuurVoertuig(index) {
    alert(voertuigen[index].verhuur());
    toonVoertuigen();
}

// Retourneer functie
function retourneerVoertuig(index) {
    alert(voertuigen[index].retourneer());
    toonVoertuigen();
}
