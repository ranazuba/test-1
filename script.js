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
    { question: "1. What is the shortcut key for creating a new sheet in Excel?", options: ["Shift + F11", "Ctrl + N", "Ctrl + S", "Alt + F4"], answer: "Shift + F11" },
    { question: "2. What is the shortcut key to go to the first row or column?", options: ["Ctrl + Right", "Ctrl + Up", "Ctrl + Down", "Ctrl + Left"], answer: "Ctrl + Up" },
    { question: "3. What does the shortcut 'Ctrl + Shift + L' do in Excel?", options: ["Adds a new line in a cell", "Applies a filter", "Hides the selected row", "Starts a new sheet"], answer: "Applies a filter" },
    { question: "4. Which of the following is used to perform the 'Sum' operation in Excel?", options: ["=AVERAGE()", "=SUM()", "=MAX()", "=IF()"], answer: "=SUM()" },
    { question: "5. How do you insert the current date in Excel?", options: ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + D", "Ctrl + F9"], answer: "Ctrl + ;" },
    { question: "6. What is the shortcut to open the 'Find' dialog box in Excel?", options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + D"], answer: "Ctrl + F" },
    { question: "7. Which formula is used to find the minimum value in a range of cells?", options: ["=MAX()", "=SUM()", "=MIN()", "=AVERAGE()"], answer: "=MIN()" },
    { 
  "question": "8. What does the 'Ctrl + S' shortcut do in Excel?", 
  "options": ["Saves the workbook", "Opens a new workbook", "Closes the workbook", "Selects all cells"], 
  "answer": "Saves the workbook" 
},
    { question: "9. Which function returns the number of characters in a cell?", options: ["=LEN()", "=MID()", "=LEFT()", "=RIGHT()"], answer: "=LEN()" },
    { question: "10. What is the shortcut for 'Undo' in Excel?", options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + P"], answer: "Ctrl + Z" },
    { question: "11. What is the formula to calculate a percentage in Excel?", options: ["=SUM(A1:A10)", "=A1/B1*100", "=AVERAGE(A1:A10)", "=IF(A1>B1, 'YES', 'NO')"], answer: "=A1/B1*100" },
    { question: "12. Which shortcut hides the selected column in Excel?", options: ["Ctrl + Shift + 9", "Ctrl + Shift + O", "Ctrl + Shift + L", "Ctrl + )"], answer: "Ctrl + )" },
    { question: "13. To increase the font size of selected text, which shortcut key should you use?", options: ["Ctrl + ]", "Ctrl + }", "Ctrl + [", "Ctrl + +"], answer: "Ctrl + }" },
    {
  "question": "14. What is the shortcut to save an Excel file as a PDF?",
  "options": ["Ctrl + P", "CTRL+S", "F12", "Ctrl + F12"],
  "answer": "F12"
},
    { question: "15. What is the shortcut to select the entire row in Excel?", options: ["Ctrl + Space", "Shift + Space", "Alt + Space", "Ctrl + A"], answer: "Shift + Space" },
    { question: "16. Which function allows you to automatically sum a range of cells?", options: ["AutoSum", "Average", "SumIf", "VLOOKUP"], answer: "AutoSum" },
    { question: "17. Which key is used to show or hide the formulas in a worksheet?", options: ["Ctrl + ~", "Ctrl + Shift + `", "Ctrl + F2", "Ctrl + Shift + F12"], answer: "Ctrl + ~" },
    { question: "18. How can you apply a cell format in Excel?", options: ["Ctrl + F", "Ctrl + 1", "Ctrl + Shift + F", "Ctrl + Alt + F"], answer: "Ctrl + 1" },
    { question: "19. Which of these formulas will check if a value is greater than or equal to 40 and return 'Pass' or 'Fail'?", options: ["=IF(A1>=40, 'Pass', 'Fail')", "=IF(A1>40, 'Pass', 'Fail')", "=IF(A1>=30, 'Pass', 'Fail')", "=IF(A1>=50, 'Pass', 'Fail')"], answer: "=IF(A1>=40, 'Pass', 'Fail')" },
    { question: "20. To merge two or more cells, which option should you use?", options: ["Format Cells → Alignment", "Right-click → Merge Cells", "Merge & Center Button", "All of the above"], answer: "All of the above" },
    { question: "21. How do you perform a vertical lookup in Excel?", options: ["=VLOOKUP()", "=HLOOKUP()", "=LOOKUP()", "=INDEX()"], answer: "=VLOOKUP()" },
    { question: "22. What shortcut key is used to open the 'Save As' dialog in Excel?", options: ["F12", "Ctrl + S", "Ctrl + O", "Alt + F4"], answer: "F12" },
    { question: "23. Which Excel function is used to find the largest value in a range of cells?", options: ["=MIN()", "=SUM()", "=MAX()", "=AVERAGE()"], answer: "=MAX()" },
    { question: "24. What does the 'COUNTIF' function do in Excel?", options: ["Counts the total number of cells", "Counts the number of cells that meet a condition", "Counts the number of unique values", "Counts non-empty cells"], answer: "Counts the number of cells that meet a condition" },
    { question: "25. What is the Excel shortcut to open the 'Go To' dialog box?", options: ["Ctrl + G", "Ctrl + H", "Ctrl + F", "Alt + G"], answer: "Ctrl + G" },
    { question: "26. What function can be used to get a part of a text string from a cell?", options: ["=LEFT()", "=MID()", "=RIGHT()", "All of the above"], answer: "All of the above" },
    { question: "27. Total Column in Excel Sheet?", options: ["18384", "16386", "1048576", "16384"], answer: "16384" },
    { question: "28. What is the correct formula for the 'ROUND' function in Excel?", options: ["=ROUND(5.67, 2)", "=ROUND(5.67)", "=ROUND(5,2)", "=ROUND(5.6, 2)"], answer: "=ROUND(5.67, 2)" },
   { 
  "question": "29. What is the default file extension for Excel workbooks?", 
  "options": [".xls", ".xlsx", ".csv", ".docx"], 
  "answer": ".xlsx" 
},
    { question: "30. What happens if a file is deleted from a computer?", options: ["It is permanently lost", "It goes to the Recycle Bin", "It is archived", "It is saved in a hidden folder"], answer: "It goes to the Recycle Bin" } 
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
    <h2>1 What is the Virus of Computer?</h2>
    <h2>2. What is the meaning of your name?</h2>
    <h2>3. What is the color of your eyes?</h2>
        
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

