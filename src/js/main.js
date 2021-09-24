// HÄMTA IN HTML-ELEMENT
const tableEl = document.getElementById("table");

// EVENTHANTERARE
// Då fönstret laddat, kör funktionen för att skriva ut alla kurser
window.onload = printCourses();

// FUNKTIONER
// Hämta och skriv ut alla kurser
function printCourses() {
    // Hämta in JSON-data med alla kurser från webbtjänsten
    fetch('http://localhost/webbutveckling3/moment5/rest.php')
    .then((res) => res.json())
    .then((data) => {
        // Loopa ut allt innehåll i arrayen till tabellen
        data.forEach(course => {
            tableEl.innerHTML+=
            `
            <tr>
            <td>${course.coursecode}</td>
            <td>${course.coursename}</td>
            <td>${course.progression}</td>
            <td>${course.coursesyllabus}</td>
            <tr>
            `
        });
    })
}

