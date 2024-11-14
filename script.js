// Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameInput = document.getElementById('name-input');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-btn');

// Questions Array
const questions = [
    { question: "1. What is the shortcut key for 'Select All' in MS Word?", options: ["Ctrl + C", "Ctrl + A", "Ctrl + X", "Ctrl + V"], answer: "Ctrl + A" },
    { question: "2. What is the shortcut key for 'Bold' in MS Word?", options: ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + Z"], answer: "Ctrl + B" },
    { question: "3. Which shortcut is used to 'Open' a file?", options: ["Ctrl + F", "Ctrl + O", "Ctrl + N", "Ctrl + P"], answer: "Ctrl + O" },
    { question: "4. How do you create a 'New Document' in MS Word?", options: ["Ctrl + N", "Ctrl + D", "Ctrl + W", "Ctrl + F"], answer: "Ctrl + N" },
    { question: "5. Which shortcut key is used to 'Undo'?", options: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + I"], answer: "Ctrl + Z" },
    // { question: "6. How do you 'Underline' selected text in MS Word?", options: ["Ctrl + U", "Ctrl + I", "Ctrl + B", "Ctrl + L"], answer: "Ctrl + U" },
    // { question: "7. To 'Print' a document, you use:", options: ["Ctrl + Q", "Ctrl + S", "Ctrl + P", "Ctrl + N"], answer: "Ctrl + P" },
    // { question: "8. What is the shortcut for 'Find' in MS Word?", options: ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + Z"], answer: "Ctrl + F" },
    // { question: "9. How do you 'Replace' text in MS Word?", options: ["Ctrl + R", "Ctrl + H", "Ctrl + P", "Ctrl + Z"], answer: "Ctrl + H" },
    // { question: "10. What is the shortcut for 'Paste'?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + A"], answer: "Ctrl + V" },
    // { question: "11. How do you 'Copy' text in MS Word?", options: ["Ctrl + C", "Ctrl + P", "Ctrl + V", "Ctrl + X"], answer: "Ctrl + C" },
    // { question: "12. Which shortcut is used for 'Italic' text?", options: ["Ctrl + I", "Ctrl + L", "Ctrl + B", "Ctrl + E"], answer: "Ctrl + I" },
    // { question: "13. How do you 'Center Align' text?", options: ["Ctrl + J", "Ctrl + C", "Ctrl + E", "Ctrl + R"], answer: "Ctrl + E" },
    // { question: "14. To 'Right Align' text, you use:", options: ["Ctrl + J", "Ctrl + L", "Ctrl + R", "Ctrl + C"], answer: "Ctrl + R" },
    // { question: "15. What is the shortcut to 'Increase Font Size'?", options: ["Ctrl + }", "Ctrl + T", "Ctrl + >", "Ctrl + {"], answer: "Ctrl + }" },
    // { question: "16. You want to share a document with a group, but you don't want them to make any changes. Which option should you choose?", options: ["Save As", "Track Changes", "Restrict Editing", "Print Layout"], answer: "Restrict Editing" },
    // { question: "17. You’re preparing a document with several sections and want to add a title at the top of each page. Which feature should you use?", options: ["Table of Contents", "Header", "Footer", "Bookmark"], answer: "Header" },
    // { question: "18. What is the shortcut key to 'Open Thesaurus'?", options: ["Shift + F7", "Ctrl + F7", "Alt + T", "Ctrl + Alt + F"], answer: "Shift + F7" },
    // { question: "19. Which shortcut opens the 'Save As' dialog?", options: ["F12", "Ctrl + S", "Alt + F4", "Shift + S"], answer: "F12" },
    // { question: "20. How do you create a bullet list in MS Word?", options: ["Ctrl + Shift + L", "Ctrl + L", "Ctrl + B", "Ctrl + U"], answer: "Ctrl + Shift + L" },
    // { question: "21. You need to send a document with confidential information to a colleague. How can you ensure that only people with a password can open it?", options: ["Save as PDF", "Use Track Changes", "Encrypt with Password", "Turn on Read Mode"], answer: "Encrypt with Password" },
    // { question: "22. How do you insert a hyperlink in MS Word?", options: ["Ctrl + L", "Ctrl + K", "Ctrl + T", "Ctrl + E"], answer: "Ctrl + K" },
    // { question: "23. Which command is used to 'Redo' an action?", options: ["Ctrl + Y", "Ctrl + X", "Ctrl + B", "Ctrl + Z"], answer: "Ctrl + Y" },
    // { question: "24. What is the purpose of the 'Design' tab in MS Word?", options: ["Formatting text", "Adjusting layout", "Inserting tables", "Adding page styles"], answer: "Adding page styles" },
    // { question: "25. What is the shortcut to 'Insert Footnote'?", options: ["Ctrl + Alt + F", "Ctrl + F", "Alt + Shift + F", "Ctrl + H"], answer: "Ctrl + Alt + F" },
    // { question: "26. What does the shortcut 'Ctrl + Shift + +' do?", options: ["Makes text superscript", "Increases font size", "Creates a bullet list", "Saves the file"], answer: "Makes text superscript" },
    // { question: "27. What is the shortcut for 'Close Document'?", options: ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Ctrl + S"], answer: "Ctrl + W" },
    // { question: "28. Ruler Ribbon is on which Tab?", options: ["Review", "view", "both a & b", "ruler"], answer: "view" },
    // { question: "29. If a computer lost internet connection, which of the following would stop working?", options: ["Email", "MS Word", "Calculator", "This Pc"], answer: "Email" },
    // { question: "30. When a file is deleted from a computer, where does it go initially?", options: ["To the Recycle Bin", "To the System Cache", "To a Temporary Folder", "To the Hard Drive"], answer: "To the Recycle Bin" } 
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;
let userAnswers = [];

// Start Quiz
startButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        score = 0;
        currentQuestionIndex = 0;
        userAnswers = [];
        optionSelected = false;
        showQuestion();
    } else {
        alert('Please enter your name!');
    }
});

// Show Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    optionSelected = false;

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(option, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    nextButton.style.display = 'none'; // Hide next button initially
}

// Select Option
function selectOption(selectedOption, optionDiv) {
    if (optionSelected) return; // Prevent further selections
    optionSelected = true;

    const question = questions[currentQuestionIndex];
    const correctAnswer = question.answer;

    if (selectedOption === correctAnswer) {
        score++;
        optionDiv.style.backgroundColor = 'green';
    } else {
        optionDiv.style.backgroundColor = 'red';
        [...optionsContainer.children].forEach(child => {
            if (child.textContent === correctAnswer) {
                child.style.backgroundColor = 'green';
            }
        });
    }

    userAnswers.push({ question: question.question, selectedOption, correctAnswer });
    nextButton.style.display = 'inline-block'; // Show next button after selection
}

// Next Question
nextButton.addEventListener('click', () => {
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
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Add top margin for better visibility
    resultScreen.style.marginTop = '1000px';

    const name = nameInput.value;
    resultText.textContent = `${name}, your score is ${score} out of ${questions.length}.`;

    // Display Correct/Wrong answers for each question
    const answersDiv = document.createElement('div');
    
    // Style the results container
    answersDiv.style.marginTop = '20px';
    answersDiv.style.padding = '15px';
    answersDiv.style.backgroundColor = '#f8f9fa';
    answersDiv.style.borderRadius = '8px';
    answersDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

    userAnswers.forEach(answer => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');
        
        // Style individual result item
        resultDiv.style.padding = '10px';
        resultDiv.style.marginBottom = '15px';
        resultDiv.style.border = '1px solid #ddd';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.backgroundColor = '#fff';
        resultDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        // Style question and answers
        resultDiv.innerHTML = `
            <strong style="font-size: 1.1rem; color: #2e3b4e;">${answer.question}</strong><br>
            Your answer: <span style="color:${answer.selectedOption === answer.correctAnswer ? 'green' : 'red'}; font-weight: bold;">${answer.selectedOption}</span><br>
            Correct answer: <span style="color:green; font-weight: bold;">${answer.correctAnswer}</span><br>
        `;

        answersDiv.appendChild(resultDiv);
    });

    resultScreen.appendChild(answersDiv);

    // Display total score at the bottom
    const scoreDiv = document.createElement('div');
    scoreDiv.style.marginTop = '20px';
    scoreDiv.style.fontSize = '1.2rem';
    scoreDiv.style.fontWeight = 'bold';
    scoreDiv.style.color = '#2e3b4e';
    scoreDiv.style.textAlign = 'center';

    scoreDiv.textContent = `Total Score: ${score} out of ${questions.length}`;
    resultScreen.appendChild(scoreDiv);

    // Add download result as image button
    const downloadImageButton = document.createElement('button');
    downloadImageButton.textContent = "Download Result";
    downloadImageButton.style.marginTop = '20px';
    downloadImageButton.style.padding = '10px 20px';
    downloadImageButton.style.backgroundColor = '#007bff';
    downloadImageButton.style.color = '#fff';
    downloadImageButton.style.border = 'none';
    downloadImageButton.style.borderRadius = '5px';
    downloadImageButton.style.cursor = 'pointer';
    downloadImageButton.style.fontSize = '1rem';
    downloadImageButton.style.transition = 'background-color 0.3s ease';
    
    // Hover effect for the download button
    downloadImageButton.onmouseover = function() {
        downloadImageButton.style.backgroundColor = '#0056b3';
    };
    downloadImageButton.onmouseout = function() {
        downloadImageButton.style.backgroundColor = '#007bff';
    };

    downloadImageButton.onclick = downloadResultAsImage;
    resultScreen.appendChild(downloadImageButton);
}


// Timer variables
let timeRemaining = 10 * 60; // 10 minutes in seconds
let timerInterval;

// Get the timer display element
const timerElement = document.getElementById('timer');

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
    timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
    const resultElement = document.getElementById('result-screen');
    html2canvas(resultElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${nameInput.value}_quiz_result.png`;
        link.click();
    });
}

// Restart Quiz
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
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
        <h2>1. What is the color of your eyes?</h2>
        
    `;
    theoryContainer.appendChild(question1);

    // Question 2
    const question2 = document.createElement("div");
    question2.classList.add("question");
    question2.innerHTML = `
        <h2>2. What is the meaning of your name?</h2>
       
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
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-item');
    
    // Set up individual answer details
    resultDiv.innerHTML = `
        <p><strong>Question:</strong> ${answer.question}</p>
        <p><strong>Your Answer:</strong> ${answer.selectedOption}</p>
        <p><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
    `;

    // Style correct/incorrect answers differently
    resultDiv.style.backgroundColor = answer.selectedOption === answer.correctAnswer ? '#d4edda' : '#f8d7da';
    resultDiv.style.color = answer.selectedOption === answer.correctAnswer ? '#155724' : '#721c24';
    resultDiv.style.padding = '10px';
    resultDiv.style.marginBottom = '10px';
    resultDiv.style.borderRadius = '5px';
    resultDiv.style.border = `2px solid ${answer.selectedOption === answer.correctAnswer ? '#c3e6cb' : '#f5c6cb'}`;

    return resultDiv;
}

// Append answers to result screen
userAnswers.forEach(answer => {
    answersDiv.appendChild(createResultItem(answer));
});
resultScreen.appendChild(answersDiv);


// Restart Quiz
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    nameInput.value = '';
});

// Stop timer (optional placeholder)
function stopTimer() {
    // Placeholder for stopping timer functionality, if needed
}

