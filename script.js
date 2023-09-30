// Kérdések és válaszok definiálása
const questions = [
    {
        image: "Inferno.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Vertigo", "Mirage", "Inferno", "Dust II"],
        correctAnswer: 2 // Helyes válasz indexe: "Inferno" a 2. indexen van
    },
    {
        image: "anubis.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Overpass", "Anubis", "Ancient", "Dust II"],
        correctAnswer: 1 // Helyes válasz indexe: "Inferno" a 2. indexen van
    },
    {
        image: "cache.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Overpass", "Nuke", "Cache", "Cobblestone"],
        correctAnswer: 2 // Helyes válasz indexe: "Cache" a 2. indexen van
    },
    {
        image: "italy.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Italy", "Inferno", "Vertigo", "Cobblestone"],
        correctAnswer: 0 // Helyes válasz indexe: "Cache" a 2. indexen van
    },
    {
        image: "vertigo.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Anubis", "Inferno", "Vertigo", "Nuke"],
        correctAnswer: 2 // Helyes válasz indexe: "Cache" a 2. indexen van
    },
    {
        image: "dust2.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Dust II", "Anubis", "Cache", "Agency"],
        correctAnswer: 0 // Helyes válasz indexe: "Dust II" az 0. indexen van
    },
    {
        image: "nuke.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Nuke", "Anubis", "Italy", "Overpass"],
        correctAnswer: 0 // Helyes válasz indexe: "Dust II" az 0. indexen van
    },
    {
        image: "office.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Nuke", "Anubis", "Italy", "Office"],
        correctAnswer: 3 // Helyes válasz indexe: "Office" a 3. indexen van
    },
    {
        image: "overpass.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Nuke", "Dust II", "Vertigo", "Overpass"],
        correctAnswer: 3 // Helyes válasz indexe: "Cache" a 2. indexen van
    },
    {
        image: "Mirage.jpg",
        question: "Melyik pálya látható a képen?",
        options: ["Train", "Dust II", "Inferno", "Mirage"],
        correctAnswer: 3 // Helyes válasz indexe: "Mirage" a 3. indexen van
    }
];

// Változók definiálása
let currentQuestion = 0;
let correctAnswers = 0;

// Függvények definiálása

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        document.getElementById("kép").src = questionData.image;
        document.getElementById("szöveg").textContent = questionData.question;

        const optionsContainer = document.querySelector(".options");
        optionsContainer.innerHTML = "";

        questionData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById("kép").style.display = "none";
        document.getElementById("szöveg").textContent = "A játék véget ért!";
        document.getElementById("endGameMenu").style.display = "block";
        document.querySelector(".options").innerHTML = "";

        document.getElementById("score").textContent = `Helyes válaszok: ${correctAnswers} / ${questions.length}`;
    }
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];

    if (selectedOption === questionData.correctAnswer) {
        playCorrectSound();
        correctAnswers++;
    } else {
        playIncorrectSound();
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
    
    // Frissítsük a pontszámot
    document.getElementById("score").textContent = `Pontszám: ${correctAnswers}`;
}

function endGame() {
    document.getElementById("kép").style.display = "none";
    document.getElementById("szöveg").textContent = "A játék véget ért!";
    document.getElementById("endGameMenu").style.display = "block";
    document.querySelector(".options").innerHTML = "";

    // Pontszám megjelenítése
    document.getElementById("score").textContent = `Pontszám: ${correctAnswers}`;
}

function restartGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById("kép").style.display = "block";
    loadQuestion();
    document.getElementById("endGameMenu").style.display = "none";
    
    // Pontszám visszaállítása 0-ra
    document.getElementById("score").textContent = `Pontszám: 0`;
}
function playCorrectSound() {
    const correctAudio = document.getElementById("correctAudio");
    correctAudio.play();
}

function playIncorrectSound() {
    const incorrectAudio = document.getElementById("incorrectAudio");
    incorrectAudio.play();
}

// Játék indítása
loadQuestion();
