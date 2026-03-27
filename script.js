const quiz = [
    {
        question: "Was ist 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Hauptstadt von Deutschland?",
        answers: ["München", "Berlin", "Hamburg", "Köln"],
        correct: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const correct = quiz[currentQuestion].correct;

    if (index === correct) {
        document.getElementById("result").textContent = "Richtig!";
    } else {
        document.getElementById("result").textContent = "Falsch!";
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(() => {
            document.getElementById("question").textContent = "Quiz beendet!";
            document.getElementById("answers").innerHTML = "";
        }, 1000);
    }
}

loadQuestion();
