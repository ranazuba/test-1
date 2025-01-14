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
    question: "1. What is the shortcut key to create a new slide in PowerPoint?",
    options: ["Ctrl + N", "Ctrl + M", "Shift + N", "Alt + M"],
    answer: "Ctrl + M",
  },
  {
    question: "2. Which key is used to delete a slide in PowerPoint?",
    options: ["Backspace", "Delete", "Ctrl + Delete", "Shift + Backspace"],
    answer: "Delete",
  },
  {
    question: "3. What shortcut key is used to start a presentation from the first slide?",
    options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
    answer: "F5",
  },
  {
    question: "4. How do you preview the current slide in full screen?",
    options: ["Ctrl + P", "Shift + F5", "Ctrl + Shift + P", "Alt + F5"],
    answer: "Shift + F5",
  },
  {
    question: "5. What is the shortcut key to go to the first slide in a presentation?",
    options: ["Ctrl + End", "Ctrl + Home", "Alt + Home", "Shift + Home"],
    answer: "Ctrl + Home",
  },
  {
    question: "6. Which shortcut key is used to increase the font size in PowerPoint?",
    options: ["Ctrl + Shift + >", "Ctrl + >", "Ctrl + Shift + <", "Ctrl + <"],
    answer: "Ctrl + Shift + >",
  },
  {
    question: "7. What shortcut key makes the screen go black during a slideshow?",
    options: ["B", "W", "Ctrl + B", "Shift + B"],
    answer: "B",
  },
  {
    question: "8. How do you return to the first slide during a presentation?",
    options: ["1 + Enter", "Ctrl + Home", "Alt + 1", "Shift + 1"],
    answer: "1 + Enter",
  },
  {
    question: "9. What is the shortcut key for grouping selected items?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + Alt + G", "Ctrl + H"],
    answer: "Ctrl + G",
  },
  {
    question: "10. Which key is used to stop or restart an automatic slideshow?",
    options: ["S", "Ctrl + S", "Alt + S", "Shift + S"],
    answer: "S",
  },
  {
    question: "11. What is the shortcut key to ungroup items in PowerPoint?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + Alt + G", "Shift + U"],
    answer: "Ctrl + Shift + G",
  },
  {
    question: "12. How do you make the screen go white during a slideshow?",
    options: ["W", "B", "Ctrl + W", "Shift + W"],
    answer: "W",
  },
  {
    question: "13. Which key erases pen tool drawings during a slideshow?",
    options: ["E", "Ctrl + E", "Shift + E", "Alt + E"],
    answer: "E",
  },
  {
    question: "14. How do you hide or show the grid in PowerPoint?",
    options: ["Shift + F9", "Ctrl + F9", "Alt + F9", "Ctrl + Shift + F9"],
    answer: "Shift + F9",
  },
  {
    question: "15. Which shortcut key is used to change the pen to a pointer?",
    options: ["Ctrl + A", "Ctrl + P", "Shift + P", "Alt + A"],
    answer: "Ctrl + A",
  },
  {
    question: "16. What shortcut key turns off the pen tool during a slideshow?",
    options: ["Esc", "Ctrl + E", "Shift + Esc", "Ctrl + P"],
    answer: "Esc",
  },
  {
    question: "17. What does the shortcut 'Ctrl + Shift + <' do?",
    options: [
      "Increases font size",
      "Decreases font size",
      "Changes font style",
      "Inserts a new slide",
    ],
    answer: "Decreases font size",
  },
  {
    question: "18. How do you navigate to the last slide in a presentation?",
    options: ["Ctrl + End", "Ctrl + Home", "Alt + End", "Shift + End"],
    answer: "Ctrl + End",
  },
  {
    question: "19. Which shortcut is used to show the current slide in preview mode?",
    options: ["Shift + F5", "Ctrl + F5", "F5", "Alt + F5"],
    answer: "Shift + F5",
  },
  {
    question: "20. How do you apply superscript formatting in PowerPoint?",
    options: ["Ctrl + =", "Ctrl + Shift + =", "Ctrl + +", "Alt + ="],
    answer: "Ctrl + =",
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
