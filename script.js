// Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-btn");

// Questions Array
const questions = [
  {
    question: "1. What is the shortcut to save a document in MS Word?",
    options: ["Ctrl + S", "Alt + S", "Ctrl + Shift + S", "Ctrl + P"],
    answer: "Ctrl + S",
  },
  {
    question: "2. How can you select all text in a document?",
    options: ["Ctrl + A", "Alt + A", "Ctrl + Shift + A", "Ctrl + X"],
    answer: "Ctrl + A",
  },
  {
    question: "3. Which shortcut key is used to create a new document in MS Word?",
    options: ["Ctrl + N", "Alt + N", "Ctrl + Shift + N", "Ctrl + O"],
    answer: "Ctrl + N",
  },
  {
    question: "4. What is the shortcut key for copying text?",
    options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + P"],
    answer: "Ctrl + C",
  },
  {
    question: "5. Which shortcut key is used to paste copied text?",
    options: ["Ctrl + P", "Ctrl + X", "Ctrl + C", "Ctrl + V"],
    answer: "Ctrl + V",
  },
  {
    question: "6. How do you undo the last action in MS Word?",
    options: ["Ctrl + Y", "Ctrl + Z", "Alt + Z", "Shift + Z"],
    answer: "Ctrl + Z",
  },
  {
    question: "7. What is the shortcut to make text bold in MS Word?",
    options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Alt + B"],
    answer: "Ctrl + B",
  },
  {
    question: "8. Which shortcut key is used to italicize text?",
    options: ["Ctrl + B", "Ctrl + U", "Ctrl + I", "Alt + I"],
    answer: "Ctrl + I",
  },
  {
    question: "9. How can you underline selected text?",
    options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Alt + U"],
    answer: "Ctrl + U",
  },
  {
    question: "10. What is the shortcut to open a document?",
    options: ["Ctrl + O", "Ctrl + N", "Ctrl + P", "Ctrl + S"],
    answer: "Ctrl + O",
  },
  {
    question: "11. Which shortcut is used to print a document?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + N", "Ctrl + O"],
    answer: "Ctrl + P",
  },
  {
    question: "12. How can you justify text in MS Word?",
    options: ["Ctrl + L", "Ctrl + R", "Ctrl + J", "Ctrl + E"],
    answer: "Ctrl + J",
  },
  {
    question: "13. What is the shortcut key for left alignment?",
    options: ["Ctrl + L", "Ctrl + J", "Ctrl + R", "Ctrl + E"],
    answer: "Ctrl + L",
  },
  {
    question: "14. Which shortcut moves text to the center?",
    options: ["Ctrl + J", "Ctrl + L", "Ctrl + R", "Ctrl + E"],
    answer: "Ctrl + E",
  },
  {
    question: "15. What is the shortcut for right alignment?",
    options: ["Ctrl + R", "Ctrl + J", "Ctrl + L", "Ctrl + E"],
    answer: "Ctrl + R",
  },
  {
    question: "16. How do you increase font size in MS Word?",
    options: ["Ctrl + }", "Ctrl + {", "Ctrl + +", "Ctrl + -"],
    answer: "Ctrl + }",
  },
  {
    question: "17. What is the shortcut to decrease font size?",
    options: ["Ctrl + {", "Ctrl + }", "Ctrl + -", "Ctrl + +"],
    answer: "Ctrl + {",
  },
  {
    question: "18. How do you change the case of selected text?",
    options: ["Ctrl + Shift + C", "Ctrl + Shift + F", "Shift + F3", "Ctrl + C"],
    answer: "Shift + F3",
  },
  {
    question: "19. How do you add a new page in MS Word?",
    options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Enter", "Shift + Enter"],
    answer: "Ctrl + Enter",
  },
  {
    question: "20. What is the shortcut to find a word in a document?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
    answer: "Ctrl + F",
  },
  {
    question: "21. How do you replace a word in MS Word?",
    options: ["Ctrl + H", "Ctrl + R", "Ctrl + F", "Ctrl + G"],
    answer: "Ctrl + H",
  },
  {
    question: "22. Which shortcut key is used to insert a hyperlink?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + J"],
    answer: "Ctrl + K",
  },
  {
    question: "23. What is the shortcut key to insert a footnote?",
    options: ["Ctrl + Alt + F", "Ctrl + Shift + F", "Alt + F", "Shift + F"],
    answer: "Ctrl + Alt + F",
  },
  {
    question: "24. How can you add a comment in MS Word?",
    options: ["Ctrl + Alt + M", "Ctrl + Shift + M", "Alt + M", "Shift + M"],
    answer: "Ctrl + Alt + M",
  },
  {
    question: "25. What is the Extension of MS Word?",
    options: ["docx", ".dcox", ".codx", ".docx"],
    answer: ".docx",
  },
  {
    question: "26. Shortcut Key to Close Ms Word File?",
    options: ["Ctrl + W", "Alt + F4", "Ctrl + C", "Shift + W"],
    answer: "Ctrl + W",
  },
  {
    question: "27. Which shortcut is used to open the Save As dialog box?",
    options: ["Ctrl + S", "Ctrl + Shift + S", "F12", "Ctrl + Alt + S"],
    answer: "F12",
  },
  {
    question: "28. What is the shortcut to redo an action?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + Shift + Z", "Alt + Y"],
    answer: "Ctrl + Y",
  },
  {
    question: "29. How do you create a numbered list?",
    options: ["Ctrl + Shift + L", "Ctrl + Alt + L", "Ctrl + N", "Ctrl + L"],
    answer: "Ctrl + Alt + L",
  },
  {
    question: "30. Which shortcut is used for Format Painter?",
    options: ["Ctrl + Alt + C", "Ctrl + Shift + C", "Ctrl + Alt + M", "Ctrl + Shift + F"],
    answer: "Ctrl + Shift + C",
  },
];


// Variables
let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;
let userAnswers = [];

// Start Quiz
startButton.addEventListener("click", () => {
  const name = nameInput.value;
  if (name) {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    score = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    optionSelected = false;
    showQuestion();
  } else {
    alert("Please enter your name!");
  }
});

// Show Question
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";
  optionSelected = false;

  question.options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.textContent = option;
    optionDiv.classList.add("option");
    optionDiv.addEventListener("click", () => selectOption(option, optionDiv));
    optionsContainer.appendChild(optionDiv);
  });

  nextButton.style.display = "none"; // Hide next button initially
}

// Select Option
function selectOption(selectedOption, optionDiv) {
  if (optionSelected) return; // Prevent further selections
  optionSelected = true;

  const question = questions[currentQuestionIndex];
  const correctAnswer = question.answer;

  if (selectedOption === correctAnswer) {
    score++;
    optionDiv.style.backgroundColor = "green";
  } else {
    optionDiv.style.backgroundColor = "red";
    [...optionsContainer.children].forEach((child) => {
      if (child.textContent === correctAnswer) {
        child.style.backgroundColor = "green";
      }
    });
  }

  userAnswers.push({
    question: question.question,
    selectedOption,
    correctAnswer,
  });
  nextButton.style.display = "inline-block"; // Show next button after selection
}

// Next Question
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  stopTimer();
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  // Add top margin for better visibility
  resultScreen.style.marginTop = "1000px";

  const name = nameInput.value;
  resultText.textContent = `${name}, your score is ${score} out of ${questions.length}.`;

  // Display Correct/Wrong answers for each question
  const answersDiv = document.createElement("div");

  // Style the results container
  answersDiv.style.marginTop = "20px";
  answersDiv.style.padding = "15px";
  answersDiv.style.backgroundColor = "#f8f9fa";
  answersDiv.style.borderRadius = "8px";
  answersDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

  userAnswers.forEach((answer) => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result-item");

    // Style individual result item
    resultDiv.style.padding = "10px";
    resultDiv.style.marginBottom = "15px";
    resultDiv.style.border = "1px solid #ddd";
    resultDiv.style.borderRadius = "5px";
    resultDiv.style.backgroundColor = "#fff";
    resultDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

    // Style question and answers
    resultDiv.innerHTML = `
            <strong style="font-size: 1.1rem; color: #2e3b4e;">${
              answer.question
            }</strong><br>
            Your answer: <span style="color:${
              answer.selectedOption === answer.correctAnswer ? "green" : "red"
            }; font-weight: bold;">${answer.selectedOption}</span><br>
            Correct answer: <span style="color:green; font-weight: bold;">${
              answer.correctAnswer
            }</span><br>
        `;

    answersDiv.appendChild(resultDiv);
  });

  resultScreen.appendChild(answersDiv);

  // Display total score at the bottom
  const scoreDiv = document.createElement("div");
  scoreDiv.style.marginTop = "20px";
  scoreDiv.style.fontSize = "1.2rem";
  scoreDiv.style.fontWeight = "bold";
  scoreDiv.style.color = "#2e3b4e";
  scoreDiv.style.textAlign = "center";

  scoreDiv.textContent = `Total Score: ${score} out of ${questions.length}`;
  resultScreen.appendChild(scoreDiv);

  // Add download result as image button
  const downloadImageButton = document.createElement("button");
  downloadImageButton.textContent = "Download Result";
  downloadImageButton.style.marginTop = "20px";
  downloadImageButton.style.padding = "10px 20px";
  downloadImageButton.style.backgroundColor = "#007bff";
  downloadImageButton.style.color = "#fff";
  downloadImageButton.style.border = "none";
  downloadImageButton.style.borderRadius = "5px";
  downloadImageButton.style.cursor = "pointer";
  downloadImageButton.style.fontSize = "1rem";
  downloadImageButton.style.transition = "background-color 0.3s ease";

  // Hover effect for the download button
  downloadImageButton.onmouseover = function () {
    downloadImageButton.style.backgroundColor = "#0056b3";
  };
  downloadImageButton.onmouseout = function () {
    downloadImageButton.style.backgroundColor = "#007bff";
  };

  downloadImageButton.onclick = downloadResultAsImage;
  resultScreen.appendChild(downloadImageButton);
}

// Timer variables
let timeRemaining = 10 * 60; // 10 minutes in seconds
let timerInterval;

// Get the timer display element
const timerElement = document.getElementById("timer");

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval); // Stop the timer
      stopQuiz(); // Stop the quiz when the time is up
    }
  }, 1000); // Update every second
}

// Update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerElement.textContent = `Time Remaining: ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

// Stop the quiz
function stopQuiz() {
  // Display a message when time is up
  alert("Time's up! The quiz is over.");

  // Here, you can add additional logic to stop the quiz (like hiding the quiz or disabling options)
}

// To start the timer, call startTimer() when the quiz starts
startTimer();

// Download Result as Image
function downloadResultAsImage() {
  const resultElement = document.getElementById("result-screen");
  html2canvas(resultElement).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${nameInput.value}_quiz_result.png`;
    link.click();
  });
}

// Restart Quiz
restartButton.addEventListener("click", () => {
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
});
// Get references to the elements
const theoryBtn = document.getElementById("theory-btn");
const theoryScreen = document.getElementById("theory-screen");
const theoryContainer = document.getElementById("theory-container");
const restartBtn = document.getElementById("restart-theory-btn");

// Function to add questions dynamically
function addQuestions() {
  // Clear any existing content in the container
  theoryContainer.innerHTML = "";

  // Question 1
  const question1 = document.createElement("div");
  question1.classList.add("question");
  question1.innerHTML = `
    <h2>1 What is the Virus of Computer?</h2>
    <h2>2. What is the meaning of your name?</h2>

        
    `;
  theoryContainer.appendChild(question1);

  // Question 2
  const question2 = document.createElement("div");
  question2.classList.add("question");
  question2.innerHTML = `
        <h2>4. Uses Of Computer in: <br><ul><li>Education</li> <br><li>Entertainment</li> <br><li>Communication </li><br><li>Business </li><br><li>HealthCare/Hospital</li></ul></h2>
    `;
  theoryContainer.appendChild(question2);
}

// Show the theory questions when "Next" button is clicked
theoryBtn.addEventListener("click", () => {
  theoryScreen.style.display = "block"; // Show the theory screen
  theoryBtn.style.display = "none"; // Hide the "Next" button
  addQuestions(); // Dynamically add questions
});

// Restart the quiz when "Restart Quiz" button is clicked
restartBtn.addEventListener("click", () => {
  theoryScreen.style.display = "none"; // Hide the theory screen
  theoryBtn.style.display = "inline-block"; // Show the "Next" button again
});

function createResultItem(answer) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-item");

  // Set up individual answer details
  resultDiv.innerHTML = `
        <p><strong>Question:</strong> ${answer.question}</p>
        <p><strong>Your Answer:</strong> ${answer.selectedOption}</p>
        <p><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
    `;

  // Style correct/incorrect answers differently
  resultDiv.style.backgroundColor =
    answer.selectedOption === answer.correctAnswer ? "#d4edda" : "#f8d7da";
  resultDiv.style.color =
    answer.selectedOption === answer.correctAnswer ? "#155724" : "#721c24";
  resultDiv.style.padding = "10px";
  resultDiv.style.marginBottom = "10px";
  resultDiv.style.borderRadius = "5px";
  resultDiv.style.border = `2px solid ${
    answer.selectedOption === answer.correctAnswer ? "#c3e6cb" : "#f5c6cb"
  }`;

  return resultDiv;
}

// Append answers to result screen
userAnswers.forEach((answer) => {
  answersDiv.appendChild(createResultItem(answer));
});
resultScreen.appendChild(answersDiv);

// Restart Quiz
restartButton.addEventListener("click", () => {
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
  nameInput.value = "";
});

// Stop timer (optional placeholder)
function stopTimer() {
  // Placeholder for stopping timer functionality, if needed
}
