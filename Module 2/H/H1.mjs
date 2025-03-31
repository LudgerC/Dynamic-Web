document.addEventListener("DOMContentLoaded", () => {
    const courses = [];
    const students = [];

    // HTML-elementen
    const courseTitleInput = document.getElementById("courseTitle");
    const courseDescInput = document.getElementById("courseDesc");
    const addCourseButton = document.getElementById("addCourse");
    const courseList = document.getElementById("courseList");
    const coursePicker = document.getElementById("coursePicker");

    const studentNameInput = document.getElementById("studentName");
    const enrollStudentButton = document.getElementById("enrollStudent");
    const studentList = document.getElementById("studentList");
    const studentPicker = document.getElementById("studentPicker");
    const modulePicker = document.getElementById("modulePicker");
    const moduleGradeInput = document.getElementById("moduleGrade");
    const addGradeButton = document.getElementById("addGrade");

    const reportStudentPicker = document.getElementById("reportStudent");
    const generateReportButton = document.getElementById("generateReport");
    const reportOutput = document.getElementById("reportOutput");

    function updateCourseList() {
        courseList.innerHTML = "";
        coursePicker.innerHTML = "";
        modulePicker.innerHTML = "";
        for (const course of courses) {
            courseList.innerHTML += `<p>${course.title}: ${course.description}</p>`;
            coursePicker.innerHTML += `<option value="${course.title}">${course.title}</option>`;
            modulePicker.innerHTML += `<option value="${course.title}">${course.title}</option>`;
        }
    }

    function updateStudentList() {
        studentList.innerHTML = "";
        studentPicker.innerHTML = "";
        reportStudentPicker.innerHTML = "";
        for (const student of students) {
            studentList.innerHTML += `<p>${student.name} - Ingeschreven: ${student.courses.join(", ")}</p>`;
            studentPicker.innerHTML += `<option value="${student.name}">${student.name}</option>`;
            reportStudentPicker.innerHTML += `<option value="${student.name}">${student.name}</option>`;
        }
    }

    addCourseButton.addEventListener("click", () => {
        const title = courseTitleInput.value.trim();
        const description = courseDescInput.value.trim();
        if (title && description) {
            courses.push({ title, description });
            courseTitleInput.value = "";
            courseDescInput.value = "";
            updateCourseList();
        }
    });

    enrollStudentButton.addEventListener("click", () => {
        const name = studentNameInput.value.trim();
        const course = coursePicker.value;
        if (name && course) {
            let student = students.find(s => s.name === name);
            if (!student) {
                student = { name, courses: [], scores: {} };
                students.push(student);
            }
            if (!student.courses.includes(course)) {
                student.courses.push(course);
                student.scores[course] = [];
            }
            studentNameInput.value = "";
            updateStudentList();
        }
    });

    addGradeButton.addEventListener("click", () => {
        const studentName = studentPicker.value;
        const course = modulePicker.value;
        const grade = parseFloat(moduleGradeInput.value);
        if (studentName && course && !isNaN(grade)) {
            const student = students.find(s => s.name === studentName);
            if (student && student.scores[course]) {
                student.scores[course].push(grade);
            }
            moduleGradeInput.value = "";
        }
    });

    generateReportButton.addEventListener("click", () => {
        const studentName = reportStudentPicker.value;
        const student = students.find(s => s.name === studentName);
        if (student) {
            let report = `<h3>Rapport voor ${student.name}</h3><ul>`;
            for (const course of student.courses) {
                const grades = student.scores[course] || [];
                const gradesText = grades.length > 0 ? grades.join(", ") : "Nog geen score";
                report += `<li>${course}: ${gradesText}</li>`;
            }
            report += "</ul>";
            reportOutput.innerHTML = report;
        }
    });

    updateCourseList();
    updateStudentList();
});
