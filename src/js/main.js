// GLOBALA VARIABLER
const url = 'http://localhost/webbutveckling3/moment5/rest.php';

// HÄMTA IN HTML-ELEMENT
const tableEl = document.getElementById("table");
const submitbtnEl = document.getElementById("savebtn");
const coursecodeinputEl = document.getElementById("coursecode");
const coursenameinputEl = document.getElementById("coursename");
const progressioninputEl = document.getElementById("progression");
const coursesyllabusEl = document.getElementById("coursesyllabus");
const deleteBtnEl = document.getElementById("deletebtn");

// EVENTHANTERARE
// Då fönstret laddat, kör funktionen för att skriva ut alla kurser
window.onload = printCourses();

// Vid klick på submit-knappen i formuläret, kör funktion för att spara ny kurs
submitbtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    saveCourse();
});

// FUNKTIONER
// Hämta och skriv ut alla kurser
function printCourses() {
    // Rensa tabellen för att skriva ut alla kurser på nytt
    tableEl.innerHTML =
    `<tr>
    <th class="w1">Kurskod</th>
    <th class="w2">Kursnamn</th>
    <th class="w1">Progression</th>
    <th class="w1">Kursplan</th>
    </tr>`;

    // Hämta in JSON-data med alla kurser från webbtjänsten
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // Loopa ut allt innehåll i arrayen till tabellen
            data.forEach(course => {
                tableEl.innerHTML +=
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
        // Fånga eventuella fel och skriv ut
        .catch(error => console.log(error));
}

// Skicka ny kurs till webbtjänsten med fetch/post
function saveCourse() {
    // Samla in data från HTML-formuläret och lagra i ett objekt
    let data = {
        coursecode: coursecodeinputEl.value,
        coursename: coursenameinputEl.value,
        progression: progressioninputEl.value,
        coursesyllabus: coursesyllabusEl.value
    }

    // Konvertera objektet till JSON-format
    let JSONdata = JSON.stringify(data);

    // Skicka JSON-data till webbtjänsten med metoden post
    fetch(url, {
        method: "POST",
        body: JSONdata
    })
    // Konvertera svaret till JSON-format
    .then(response => response.json())
    // Skriv ut svaret från webbtjänsten och kör funktionen för att skriva ut alla kurser på nytt
    .then(json => {
        console.log(json);
        printCourses();
    })
    // Fånga eventuella fel och skriv ut
    .catch(error => console.log(error));
}