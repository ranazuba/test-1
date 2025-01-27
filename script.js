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
    question: "1. What is the shortcut to auto-save in InPage?",
    options: ["Ctrl + S", "Alt + F11", "Ctrl + F11", "Shift + F11"],
    answer: "Alt + F11",
  },
  {
    question: "2. Which shortcut increases text size in InPage?",
    options: ["Ctrl + F9", "Alt + F9", "Ctrl + F10", "Ctrl + Shift + F10"],
    answer: "Ctrl + F10",
  },
  {
    question: "3. How can you decrease word spacing in InPage?",
    options: ["Ctrl + F5", "Alt + F6", "Ctrl + F6", "Ctrl + Alt + F6"],
    answer: "Ctrl + F6",
  },
  {
    question: "4. What is the shortcut to justify text in InPage?",
    options: ["Ctrl + Alt + J", "Ctrl + Shift + J", "Ctrl + J", "Alt + J"],
    answer: "Ctrl + Alt + J",
  },
  {
    question: "5. How do you create a new page in InPage?",
    options: ["Shift + Insert", "Ctrl + N", "Alt + Insert", "Ctrl + Shift + N"],
    answer: "Alt + Insert",
  },
  {
    question: "6. Which shortcut is used to toggle language in InPage?",
    options: ["Ctrl + Alt + Space", "Shift + Space", "Ctrl + Space", "Alt + Space"],
    answer: "Ctrl + Space",
  },
  {
    question: "7. How can you increase line spacing in InPage?",
    options: ["Ctrl + F5", "Ctrl + Shift + F5", "Alt + F5", "Shift + F5"],
    answer: "Ctrl + Shift + F5",
  },
  {
    question: "8. What is the shortcut to move text to the right in InPage?",
    options: ["Shift + Alt + R", "Alt + R", "Ctrl + Alt + R", "Ctrl + Shift + R"],
    answer: "Ctrl + Alt + R",
  },
  {
    question: "9. How do you move to the first page in InPage?",
    options: ["Shift + Home", "Ctrl + Home", "Alt + Home", "Ctrl + Alt + Home"],
    answer: "Alt + Home",
  },
  {
    question: "10. Which shortcut makes text bold in InPage?",
    options: ["Ctrl + B", "Ctrl + Alt + B", "Alt + B", "Ctrl + Shift + B"],
    answer: "Ctrl + B",
  },
  {
    question: "11. What is the shortcut for grouping items in InPage?",
    options: ["Ctrl + Alt + G", "Alt + G", "Shift + Alt + G", "Ctrl + G"],
    answer: "Ctrl + Alt + G",
  },
  {
    question: "12. How do you ungroup items in InPage?",
    options: ["Ctrl + U", "Ctrl + Alt + U", "Alt + U", "Shift + Alt + U"],
    answer: "Ctrl + Alt + U",
  },
  {
    question: "13. Which key deletes a page in InPage?",
    options: ["Alt + Delete", "Ctrl + Delete", "Ctrl + Alt + Delete", "Shift + Delete"],
    answer: "Alt + Delete",
  },
  {
    question: "14. How do you move text down in InPage?",
    options: ["Ctrl + Shift + F8", "Ctrl + F8", "Ctrl + Alt + F8", "Alt + F8"],
    answer: "Ctrl + F8",
  },
  {
    question: "15. What is the file extension used by InPage?",
    options: [".inp", ".ipn", ".iinp", ".nip"],
    answer: ".inp",


   
  },
  {
    question: "16. How do you export text in InPage?",
    options: ["Ctrl + Y", "Alt + Y", "Shift + Alt + Y", "Ctrl + Alt + Y"],
    answer: "Ctrl + Alt + Y",
  },
  {
    question: "17. Which shortcut is used to decrease skew in InPage?",
    options: ["Alt + F8", "Ctrl + Shift + F8", "Shift + F8", "Ctrl + F8"],
    answer: "Ctrl + Shift + F8",
  },
  {
    question: "18. How do you go to the next page in InPage?",
    options: ["Ctrl + Alt + Page Down", "Ctrl + Page Down", "Shift + Page Down", "Alt + Page Down"],
    answer: "Alt + Page Down",
  },
  {
    question: "19. Which shortcut decreases text size in InPage?",
    options: ["Ctrl + F9", "Ctrl + Alt + F9", "Ctrl + F10", "Alt + F9"],
    answer: "Ctrl + F9",
  },
  {
    question: "20. What is the shortcut to toggle Snap to Guides in InPage?",
    options: ["Ctrl + Alt + F9", "Alt + F9", "Ctrl + F9", "F9"],
    answer: "F9",
  },
  {
    question: "21. How do you undo an action in InPage?",
    options: ["Ctrl + Alt + Z", "Ctrl + 2", "Alt + Z", "Ctrl + Z"],
    answer: "Ctrl + 2",
  },
  {
    question: "22. Which shortcut increases word spacing in InPage?",
    options: ["Ctrl + F5", "Ctrl + Alt + F5", "Ctrl + Shift + F5", "Alt + F5"],
    answer: "Ctrl + F5",
  },
  {
    question: "23. What is the shortcut to move text to the left in InPage?",
    options: ["Ctrl + L", "Alt + L", "Shift + Alt + L", "Ctrl + Alt + L"],
    answer: "Ctrl + Alt + L",
  },
  {
    question: "24. How do you make text italic in InPage?",
    options: ["Ctrl + Alt + I", "Shift + I", "Alt + I", "Ctrl + I"],
    answer: "Ctrl + I",
  },
  {
    question: "25. Which shortcut moves text up in InPage?",
    options: ["Ctrl + F7", "Ctrl + Shift + F7", "Alt + F7", "Ctrl + Alt + F7"],
    answer: "Ctrl + F7",
  },
  {
    question: "26. What is the shortcut to open document formatting in InPage?",
    options: ["Ctrl + F11", "Ctrl + Shift + F11", "Alt + F11", "Ctrl + Alt + F11"],
    answer: "Ctrl + F11",
  },
  {
    question: "27. Which shortcut moves to the last page in InPage?",
    options: ["Shift + End", "Ctrl + Alt + End", "Ctrl + End", "Alt + End"],
    answer: "Alt + End",
  },
  {
    question: "28. How do you import text in InPage?",
    options: ["Alt + Y", "Ctrl + Alt + Y", "Ctrl + Y", "Shift + Y"],
    answer: "Ctrl + Y",
  },
  {
    
    question: "29. Which key is used to export a page in InPage?",
    options: ["Ctrl + Y", "Ctrl + Alt + Y", "Alt + Y", "Ctrl + Shift + Y"],
    answer: "Ctrl + Alt + Y",
  },
  {
    question: "30. What is the shortcut to fully justify text in InPage?",
    options: ["Alt + F", "Ctrl + Shift + F", "Ctrl + F", "Ctrl + Alt + F"],
    answer: "Ctrl + Alt + F",
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
