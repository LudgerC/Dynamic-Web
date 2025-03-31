class Student {
    // Constructor accepteert naam en vakken als parameters
    constructor(naam, vakken) {
      this.naam = naam;
      this.vakken = vakken; // Object met vakken en bijbehorende punten
    }
  
    // Voeg punt toe voor een specifiek vak
    voegPuntToe(vak, punt) {
      if (!this.vakken[vak]) this.vakken[vak] = []; // Maak vak aan als het niet bestaat
      this.vakken[vak].push(punt);
    }
  
    // Bereken het gemiddelde van alle vakken
    gemiddelde() {
      let totaalPunten = 0, totaalVakken = 0;
      for (let vak in this.vakken) {
        totaalPunten += this.vakken[vak].reduce((acc, punt) => acc + punt, 0);
        totaalVakken += this.vakken[vak].length;
      }
      return totaalPunten / totaalVakken;
    }
  
    // Toon een rapport van alle vakken en punten
    toonRapport() {
      let rapport = `${this.naam}'s Rapport:\n`;
      for (let vak in this.vakken) {
        rapport += `${vak}: ${this.vakken[vak].join(', ')}\n`;
      }
      rapport += `Gemiddelde: ${this.gemiddelde().toFixed(2)}`;
      return rapport;
    }
  }
  
  // Maak twee studenten objecten
  let student1 = new Student("Janneke", { Wiskunde: [8, 9], Nederlands: [7] });
  let student2 = new Student("Pieter", { Engels: [6, 5], Geschiedenis: [8, 7] });
  
  // Voeg punten toe voor beide studenten
  student1.voegPuntToe("Wiskunde", 10);
  student2.voegPuntToe("Engels", 8);
  
  // Toon rapporten in de 'output' div
  document.getElementById("output").innerText = `${student1.toonRapport()}\n\n${student2.toonRapport()}`;
  