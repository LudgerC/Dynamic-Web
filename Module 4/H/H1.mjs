// Basisklasse voor personen
class Persoon {
    constructor(naam, email, leeftijd) {
        this.naam = naam;
        this.email = email;
        this.leeftijd = leeftijd;
    }
}

// Subklasse voor studenten
class Student extends Persoon {
    constructor(naam, email, leeftijd, studentnummer, studiejaar) {
        super(naam, email, leeftijd);
        this.studentnummer = studentnummer;
        this.studiejaar = studiejaar;
    }
}

// Subklasse voor docenten
class Docent extends Persoon {
    constructor(naam, email, leeftijd, vakgebied) {
        super(naam, email, leeftijd);
        this.vakgebied = vakgebied;
    }
}

// Klasse voor cursussen
class Cursus {
    constructor(titel, beschrijving, docent, ects, maximumStudenten) {
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.docent = docent;
        this.ects = ects;
        this.maximumStudenten = Math.max(0, maximumStudenten);
        this.ingeschrevenStudenten = [];
    }

    inschrijven(student) {
        if (this.ingeschrevenStudenten.length >= this.maximumStudenten) {
            return `Cursus ${this.titel} zit vol!`;
        }
        if (this.ingeschrevenStudenten.includes(student)) {
            return `${student.naam} is al ingeschreven voor ${this.titel}.`;
        }
        this.ingeschrevenStudenten.push(student);
        return `${student.naam} is ingeschreven voor ${this.titel}.`;
    }
}

// Klasse voor inschrijvingen
class Inschrijving {
    constructor(student, cursus) {
        this.student = student;
        this.cursus = cursus;
        this.status = "Actief";
        this.datum = new Date().toLocaleDateString();
    }
}

// Dummy gegevens
const docent1 = new Docent("Jan Janssen", "jan@example.com", 40, "Informatica");
const student1 = new Student("Piet Pieters", "piet@example.com", 22, "S12345", 2);
const cursus1 = new Cursus("JavaScript Basics", "Leer de basis van JavaScript!", docent1, 5, 10);

const inschrijving1 = new Inschrijving(student1, cursus1);
cursus1.inschrijven(student1);

// Functie om de data in de UI te tonen
function updateUI() {
    document.getElementById("course-list").innerHTML = `<p>${cursus1.titel} - Docent: ${cursus1.docent.naam}</p>`;
    document.getElementById("student-list").innerHTML = `<p>${student1.naam} - ${student1.email}</p>`;
    document.getElementById("teacher-list").innerHTML = `<p>${docent1.naam} - ${docent1.vakgebied}</p>`;
    document.getElementById("enrollment-list").innerHTML = `<p>${student1.naam} is ingeschreven voor ${cursus1.titel} op ${inschrijving1.datum}</p>`;
}

// Tabs functionaliteit
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelectorAll(".tab-content").forEach(content => {
            content.style.display = "none";
        });
        document.getElementById(this.dataset.tab).style.display = "block";
    });
});

// Init UI
updateUI();
document.getElementById("courses").style.display = "block";
document.getElementById("students").style.display = "none";
document.getElementById("teachers").style.display = "none";
document.getElementById("enrollments").style.display = "none";
