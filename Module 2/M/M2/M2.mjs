document.addEventListener("DOMContentLoaded", () => {
    const students = {
        Alex: [],
        Sam: [],
        Jo: []
    };

    // Referenties naar HTML-elementen
    const studentSelect = document.getElementById("student");
    const courseInput = document.getElementById("course");
    const gradeInput = document.getElementById("grade");
    const addGradeButton = document.getElementById("addGrade");
    const studentOverview = document.getElementById("studentOverview");

    function updateOverview() {
        studentOverview.innerHTML = ""; // Leeg overzicht

        for (const student in students) {
            const grades = students[student];
            if (grades.length === 0) continue;

            let total = 0;
            let highest = -Infinity;
            let lowest = Infinity;
            
            let gradeList = "";
            for (const entry of grades) {
                gradeList += `<li>${entry.course}: ${entry.grade}</li>`;
                total += entry.grade;
                if (entry.grade > highest) highest = entry.grade;
                if (entry.grade < lowest) lowest = entry.grade;
            }
            
            const average = (total / grades.length).toFixed(2);
            
            // Toon student gegevens
            studentOverview.innerHTML += `
                <div>
                    <h3>${student}</h3>
                    <ul>${gradeList}</ul>
                    <p>Gemiddelde: ${average}</p>
                    <p>Hoogste: ${highest}, Laagste: ${lowest}</p>
                </div>
            `;
        }
    }

    addGradeButton.addEventListener("click", () => {
        const student = studentSelect.value;
        const course = courseInput.value.trim();
        const grade = parseFloat(gradeInput.value);

        if (course && !isNaN(grade) && grade >= 0 && grade <= 20) {
            students[student].push({ course, grade }); // Voeg score toe
            courseInput.value = "";
            gradeInput.value = "";
            updateOverview(); // Werk het overzicht bij
        }
    });
});
