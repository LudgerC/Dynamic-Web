class Bankrekening {
    static laatsteRekeningNr = 1000;
    static transacties = [];
    
    constructor(eigenaar, saldo = 0) {
        this.rekeningNr = Bankrekening.rekeningNrGenerator();
        this.eigenaar = eigenaar;
        this._saldo = saldo;
    }
    
    static rekeningNrGenerator() {
        return ++this.laatsteRekeningNr;
    }
    
    get saldo() {
        return this._saldo;
    }
    
    set saldo(bedrag) {
        if (bedrag >= 0) this._saldo = bedrag;
    }
    
    storten(bedrag) {
        if (bedrag > 0) {
            this._saldo += bedrag;
            Bankrekening.transacties.push(`+€${bedrag} naar ${this.eigenaar}`);
            return `€${bedrag} gestort op rekening ${this.rekeningNr}`;
        }
        return "Ongeldig bedrag";
    }
    
    opnemen(bedrag) {
        if (bedrag > 0 && this._saldo >= bedrag) {
            this._saldo -= bedrag;
            Bankrekening.transacties.push(`-€${bedrag} van ${this.eigenaar}`);
            return `€${bedrag} opgenomen van rekening ${this.rekeningNr}`;
        }
        return "Onvoldoende saldo of ongeldig bedrag";
    }
    
    static validerenTransactie(from, to, bedrag) {
        return from.saldo >= bedrag && bedrag > 0;
    }
    
    overzicht() {
        return `Rekening: ${this.rekeningNr}, Eigenaar: ${this.eigenaar}, Saldo: €${this.saldo}`;
    }
}

class Spaarrekening extends Bankrekening {
    constructor(eigenaar, saldo, rentePercentage) {
        super(eigenaar, saldo);
        this.rentePercentage = rentePercentage;
    }
    
    renteToevoegen() {
        const rente = (this.saldo * this.rentePercentage) / 100;
        this.saldo += rente;
        return `Rente van €${rente.toFixed(2)} toegevoegd! Nieuw saldo: €${this.saldo.toFixed(2)}`;
    }
}

// Rekeningen aanmaken
const rekening1 = new Bankrekening("Alice", 500);
const rekening2 = new Spaarrekening("Bob", 1000, 2);

// Transacties uitvoeren
console.log(rekening1.storten(200));
console.log(rekening1.opnemen(100));
console.log(rekening2.renteToevoegen());

// Resultaten tonen in HTML
const accountsDiv = document.getElementById("accounts");
const transactionsDiv = document.getElementById("transactions");

accountsDiv.innerHTML = `<p>${rekening1.overzicht()}</p><p>${rekening2.overzicht()}</p>`;
transactionsDiv.innerHTML = `<p>Transacties:</p><ul>${Bankrekening.transacties.map(t => `<li>${t}</li>`).join('')}</ul>`;
