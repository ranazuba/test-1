// ===== ELEMENTS =====
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerDisplay = document.getElementById("timer");

const nameInput = document.getElementById("name-input");
const testSelect = document.getElementById("test-select");

// ===== VARIABLES =====
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 600;
let currentQuestions = [];

// ===== QUESTION BANKS (FULL) =====
const questionBanks = {
  "word": [
    { question: "1. What is the default file extension for MS Word 2016?", options: [".txt", ".docx", ".doc", ".pdf"], answer: ".docx" },
    { question: "2. Which shortcut key is used to center align text?", options: ["Ctrl + C", "Ctrl + E", "Ctrl + L", "Ctrl + R"], answer: "Ctrl + E" },
    { question: "3. Which tab contains the 'Mail Merge' option?", options: ["Insert", "Home", "Mailings", "Review"], answer: "Mailings" },
    { question: "4. Shortcut key for Undo is?", options: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + X"], answer: "Ctrl + Z" },
    { question: "5. Which feature is used to check spelling and grammar?", options: ["Thesaurus", "Spelling & Grammar", "Word Count", "Translate"], answer: "Spelling & Grammar" },
    { question: "6. What is the shortcut for 'Hyperlink'?", options: ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + M"], answer: "Ctrl + K" },
    { question: "7. Which tab is used to change Page Orientation?", options: ["Home", "Insert", "Layout", "View"], answer: "Layout" },
    { question: "8. Shortcut key for 'Find' is?", options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + J"], answer: "Ctrl + F" },
    { question: "9. What is the maximum zoom percentage in MS Word?", options: ["200%", "400%", "500%", "100%"], answer: "500%" },
    { question: "10. Which key is used to increase font size?", options: ["Ctrl + [", "Ctrl + ]", "Ctrl + Shift + >", "Both B & C"], answer: "Both B & C" },
    { question: "11. Portrait and Landscape are?", options: ["Page Orientation", "Paper Size", "Page Layout", "All of above"], answer: "Page Orientation" },
    { question: "12. Which tab has the 'Table' option?", options: ["Home", "Insert", "Design", "Layout"], answer: "Insert" },
    { question: "13. Shortcut key for Print Preview?", options: ["Ctrl + P", "Ctrl + F2", "Alt + P", "Ctrl + F10"], answer: "Ctrl + F2" },
    { question: "14. What is the shortcut for Double Underline?", options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + U", "Alt + D"], answer: "Ctrl + Shift + D" },
    { question: "15. Which shortcut key is used for 'Replace'?", options: ["Ctrl + R", "Ctrl + H", "Ctrl + F", "Ctrl + E"], answer: "Ctrl + H" },
    { question: "16. Default font name in MS Word 2016?", options: ["Arial", "Times New Roman", "Calibri", "Verdana"], answer: "Calibri" },
    { question: "17. Which key deletes text to the left of the cursor?", options: ["Delete", "Backspace", "End", "Home"], answer: "Backspace" },
    { question: "18. To save a document for the first time, use?", options: ["Save", "Save As", "Ctrl + S", "Both A & B"], answer: "Save As" },
    { question: "19. Where is the Status Bar located?", options: ["Top", "Bottom", "Left", "Right"], answer: "Bottom" },
    { question: "20. Which tab is used to insert Page Numbers?", options: ["Home", "Insert", "Review", "View"], answer: "Insert" },
    { question: "21. Shortcut for 'Bold' is?", options: ["Ctrl + B", "Alt + B", "Shift + B", "Ctrl + Shift + B"], answer: "Ctrl + B" },
    { question: "22. Which view shows how the document will look when printed?", options: ["Web Layout", "Draft", "Print Layout", "Outline"], answer: "Print Layout" },
    { question: "23. Shortcut key for manual Page Break?", options: ["Ctrl + Enter", "Alt + Enter", "Shift + Enter", "Space + Enter"], answer: "Ctrl + Enter" },
    { question: "24. The 'Watermark' option is found in which tab?", options: ["Insert", "Design", "Home", "Layout"], answer: "Design" },
    { question: "25. What is the shortcut key for 'Italic'?", options: ["Ctrl + I", "Ctrl + J", "Ctrl + Alt + I", "Alt + I"], answer: "Ctrl + I" },
    { question: "26. Smallest font size available in formatting toolbar?", options: ["1", "4", "8", "10"], answer: "8" },
    { question: "27. Shortcut key for 'Redo'?", options: ["Ctrl + R", "Ctrl + Z", "Ctrl + Y", "Ctrl + X"], answer: "Ctrl + Y" },
    { question: "28. What is the shortcut for 'Subscript'?", options: ["Ctrl + =", "Ctrl + Shift + +", "Alt + =", "Ctrl + -"], answer: "Ctrl + =" },
    { question: "29. What is the shortcut for 'Superscript'?", options: ["Ctrl + =", "Ctrl + Shift + +", "Alt + +", "Ctrl + +"], answer: "Ctrl + Shift + +" },
    { question: "30. Which tab is 'Thesaurus' located in?", options: ["Home", "Review", "View", "Insert"], answer: "Review" }
  ],
  "excel": [
    { question: "1. What is the extension of an MS Excel workbook?", options: [".xlsx", ".xls", ".exl", ".docx"], answer: ".xlsx" },
    { question: "2. What is the intersection of a row and a column called?", options: ["Box", "Cell", "Grid", "Table"], answer: "Cell" },
    { question: "3. Every formula in Excel must begin with?", options: ["+", "-", "=", "@"], answer: "=" },
    { question: "4. Which shortcut key is used to edit a selected cell?", options: ["F1", "F2", "F3", "F4"], answer: "F2" },
    { question: "5. How many columns are there in an Excel 2016 sheet?", options: ["16384", "1048576", "256", "65536"], answer: "16384" },
    { question: "6. Total rows in an Excel sheet?", options: ["65536", "1048576", "16384", "Unlimited"], answer: "1048576" },
    { question: "7. Which shortcut key selects the entire row?", options: ["Ctrl + Space", "Shift + Space", "Alt + Space", "Ctrl + A"], answer: "Shift + Space" },
    { question: "8. Which shortcut key selects the entire column?", options: ["Ctrl + Space", "Shift + Space", "Alt + Space", "Ctrl + Shift"], answer: "Ctrl + Space" },
    { question: "9. What is the shortcut to insert a new worksheet?", options: ["F11", "Shift + F11", "Alt + F11", "Ctrl + F11"], answer: "Shift + F11" },
    { question: "10. Which function is used to add all numbers in a range?", options: ["TOTAL", "ADD", "SUM", "COUNT"], answer: "SUM" },
    { question: "11. Shortcut key for 'Save As' in Excel?", options: ["F12", "Ctrl + S", "Alt + S", "Ctrl + F12"], answer: "F12" },
    { question: "12. Which chart is best for showing trends over time?", options: ["Pie", "Line", "Bar", "Scatter"], answer: "Line" },
    { question: "13. What is the shortcut to hide a row?", options: ["Ctrl + 8", "Ctrl + 9", "Ctrl + 0", "Ctrl + H"], answer: "Ctrl + 9" },
    { question: "14. What is the shortcut to hide a column?", options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + C", "Alt + 0"], answer: "Ctrl + 0" },
    { question: "15. Which tab has the 'Sort & Filter' option?", options: ["Data", "Home", "Insert", "Both A & B"], answer: "Both A & B" },
    { question: "16. Which shortcut key applies the Currency format?", options: ["Ctrl + Shift + $", "Ctrl + Shift + #", "Ctrl + Shift + %", "Alt + $"], answer: "Ctrl + Shift + $" },
    { question: "17. What is the shortcut to enter the current date?", options: ["Ctrl + ;", "Ctrl + Shift + :", "Alt + D", "Ctrl + D"], answer: "Ctrl + ;" },
    { question: "18. Which function finds the largest value in a range?", options: ["LARGE", "MAX", "HIGH", "TOP"], answer: "MAX" },
    { question: "19. Shortcut key to open the Format Cells dialog?", options: ["Ctrl + 1", "Ctrl + F", "Alt + 1", "Shift + 1"], answer: "Ctrl + 1" },
    { question: "20. A workbook is a collection of?", options: ["Cells", "Worksheets", "Charts", "Rows"], answer: "Worksheets" },
    { question: "21. Which tab is used to create Pivot Tables?", options: ["Home", "Data", "Insert", "View"], answer: "Insert" },
    { question: "22. What is the shortcut to Autosum?", options: ["Alt + =", "Ctrl + =", "Shift + =", "Alt + S"], answer: "Alt + =" },
    { question: "23. Which error means the column is not wide enough?", options: ["#VALUE!", "#REF!", "#####", "#DIV/0!"], answer: "#####" },
    { question: "24. Which feature allows you to join cells into one?", options: ["Wrap Text", "Merge & Center", "Combine", "Join"], answer: "Merge & Center" },
    { question: "25. What is the shortcut for 'Flash Fill'?", options: ["Ctrl + F", "Ctrl + E", "Ctrl + J", "Alt + E"], answer: "Ctrl + E" },
    { question: "26. Where is the Cell Address shown?", options: ["Formula Bar", "Status Bar", "Name Box", "Title Bar"], answer: "Name Box" },
    { question: "27. Which tab contains the 'Freeze Panes' option?", options: ["Home", "Layout", "View", "Review"], answer: "View" },
    { question: "28. Shortcut for 'Current Time'?", options: ["Ctrl + Shift + :", "Ctrl + ;", "Alt + T", "Ctrl + T"], answer: "Ctrl + Shift + :" },
    { question: "29. Which symbol is used for absolute cell referencing?", options: ["&", "$", "#", "@"], answer: "$" },
    { question: "30. Which function counts cells with numbers only?", options: ["COUNT", "COUNTA", "COUNTBLANK", "SUM"], answer: "COUNT" }
  ],
  "powerpoint": [
    { question: "1. What is the extension of a PowerPoint 2016 file?", options: [".pps", ".ptx", ".pptx", ".ppxs"], answer: ".pptx" },
    { question: "2. Which key is used to start a slideshow from the beginning?", options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"], answer: "F5" },
    { question: "3. Which shortcut key starts a slideshow from the current slide?", options: ["F5", "Shift + F5", "Ctrl + Enter", "Alt + F5"], answer: "Shift + F5" },
    { question: "4. What is the shortcut to insert a new slide?", options: ["Ctrl + N", "Ctrl + M", "Ctrl + S", "Alt + N"], answer: "Ctrl + M" },
    { question: "5. The movement from one slide to another is called?", options: ["Animation", "Transition", "Custom Show", "Action"], answer: "Transition" },
    { question: "6. Movement of objects on a slide is called?", options: ["Transition", "Animation", "Motion", "Grouping"], answer: "Animation" },
    { question: "7. Which tab is used to change the background design?", options: ["Home", "Insert", "Design", "Transitions"], answer: "Design" },
    { question: "8. What is the shortcut to stop a slideshow?", options: ["Alt", "Shift", "Esc", "Backspace"], answer: "Esc" },
    { question: "9. Which key is used to create a Duplicate slide?", options: ["Ctrl + N", "Ctrl + D", "Ctrl + M", "Ctrl + J"], answer: "Ctrl + D" },
    { question: "10. Which tab has the 'Slide Master' option?", options: ["Home", "Insert", "View", "Review"], answer: "View" },
    { question: "11. Shortcut for 'Grouping' objects?", options: ["Ctrl + G", "Ctrl + J", "Alt + G", "Shift + G"], answer: "Ctrl + G" },
    { question: "12. What is the shortcut to open a new presentation?", options: ["Ctrl + M", "Ctrl + N", "Ctrl + O", "Ctrl + P"], answer: "Ctrl + N" },
    { question: "13. Which view shows all slides in a grid format?", options: ["Normal", "Slide Sorter", "Notes Page", "Reading View"], answer: "Slide Sorter" },
    { question: "14. The first slide in a presentation is usually?", options: ["Title Slide", "Blank Slide", "Content Slide", "Header Slide"], answer: "Title Slide" },
    { question: "15. Which shortcut key opens the Font dialog box?", options: ["Ctrl + F", "Ctrl + T", "Ctrl + Shift + F", "Both B & C"], answer: "Both B & C" },
    { question: "16. How can you insert a YouTube video in PPT?", options: ["Insert > Media > Video", "Home > Video", "Draw > Video", "It's not possible"], answer: "Insert > Media > Video" },
    { question: "17. Which shortcut key centers the text in a box?", options: ["Ctrl + C", "Ctrl + E", "Alt + E", "Shift + E"], answer: "Ctrl + E" },
    { question: "18. Which tab is used to add 'Action Buttons'?", options: ["Home", "Insert", "Animations", "Design"], answer: "Insert" },
    { question: "19. What is the shortcut to bring an object to 'Front'?", options: ["Ctrl + Shift + ]", "Ctrl + Shift + [", "Alt + F", "Ctrl + F"], answer: "Ctrl + Shift + ]" },
    { question: "20. A PowerPoint file is also called a?", options: ["Document", "Workbook", "Presentation", "Database"], answer: "Presentation" },
    { question: "21. Which shortcut key is for 'Justify'?", options: ["Ctrl + J", "Ctrl + K", "Ctrl + L", "Ctrl + R"], answer: "Ctrl + J" },
    { question: "22. Can we export a PPT as a PDF?", options: ["Yes", "No", "Only in 2010", "Only in 2003"], answer: "Yes" },
    { question: "23. Which tab is used to set the slide timing?", options: ["Design", "Transitions", "Insert", "Review"], answer: "Transitions" },
    { question: "24. Shortcut key to hide a slide?", options: ["Right Click > Hide", "Ctrl + H", "Delete", "Alt + H"], answer: "Right Click > Hide" },
    { question: "25. The area where you type speaker notes is?", options: ["Slide Pane", "Notes Pane", "Status Bar", "Review Pane"], answer: "Notes Pane" },
    { question: "26. Which shortcut key is for 'Hyperlink'?", options: ["Ctrl + H", "Ctrl + K", "Alt + K", "Shift + K"], answer: "Ctrl + K" },
    { question: "27. What is the shortcut for 'Zoom Out'?", options: ["Ctrl + -", "Ctrl + +", "Alt + -", "Shift + -"], answer: "Ctrl + -" },
    { question: "28. Which shortcut key opens a saved presentation?", options: ["Ctrl + S", "Ctrl + O", "Ctrl + P", "Ctrl + M"], answer: "Ctrl + O" },
    { question: "29. Maximum zoom in PowerPoint is?", options: ["200%", "300%", "400%", "500%"], answer: "400%" },
    { question: "30. Which key is used to indent a bullet point to the right?", options: ["Space", "Enter", "Tab", "Shift"], answer: "Tab" }
  ]
,
"inpage": [
    { question: "1. What is the default file extension for InPage files?", options: [".inp", ".doc", ".txt", ".ipg"], answer: ".inp" },
    { question: "2. Which keyboard is most commonly used in InPage for beginners?", options: ["Monotype", "Phonetic", "Aftab", "Persian"], answer: "Phonetic" },
    { question: "3. What is the shortcut key to toggle between Urdu and English?", options: ["Ctrl + Space", "Alt + Space", "Shift + Space", "Ctrl + Alt"], answer: "Ctrl + Space" },
    { question: "4. Which shortcut key is used to Export a document as an Image?", options: ["Ctrl + E", "Alt + F + E", "Ctrl + Alt + E", "Alt + I"], answer: "Alt + F + E" },
    { question: "5. What is the maximum Zoom percentage in InPage?", options: ["200%", "300%", "400%", "500%"], answer: "300%" },
    { question: "6. Which tool is used to select and move text boxes?", options: ["Arrow Tool", "I-Beam Tool", "Hand Tool", "Text Tool"], answer: "Arrow Tool" },
    { question: "7. Short key for 'Full Justify' alignment in InPage?", options: ["Ctrl + F", "Ctrl + Alt + J", "Ctrl + J", "Ctrl + Alt + F"], answer: "Ctrl + Alt + F" },
    { question: "8. How many types of Master Pages can you create in InPage?", options: ["1", "2", "Unlimited", "None"], answer: "1" },
    { question: "9. Which shortcut key is used to Save a file?", options: ["Ctrl + S", "Alt + S", "Ctrl + Shift + S", "F12"], answer: "Ctrl + S" },
    { question: "10. InPage is primarily used for which language?", options: ["English", "Urdu/Arabic/Persian", "Chinese", "Hindi"], answer: "Urdu/Arabic/Persian" },
    { question: "11. Shortcut key to show/hide the Ribbon?", options: ["Ctrl + F1", "Ctrl + Alt + R", "Alt + R", "None"], answer: "None" },
    { question: "12. Which menu contains the 'Keyboard Preferences' option?", options: ["File", "Edit", "View", "Format"], answer: "Edit" },
    { question: "13. What is the shortcut for 'Bold' text in InPage?", options: ["Ctrl + B", "Ctrl + Alt + B", "Alt + B", "Shift + B"], answer: "Ctrl + B" },
    { question: "14. Which tool is used to write text inside a box?", options: ["Arrow Tool", "I-Beam Tool", "Picture Tool", "Line Tool"], answer: "I-Beam Tool" },
    { question: "15. How do you move to the next page in InPage?", options: ["Page Down", "Alt + Page Down", "Ctrl + Page Down", "Enter"], answer: "Page Down" },
    { question: "16. Shortcut key to 'Import Picture'?", options: ["Ctrl + I", "Alt + F + I", "Ctrl + P", "Double Click on Picture Box"], answer: "Double Click on Picture Box" },
    { question: "17. Which menu has the 'Document' settings?", options: ["Format", "Edit", "File", "Insert"], answer: "Format" },
    { question: "18. What is the default font for Urdu in InPage?", options: ["Arial", "Noori Nastaliq", "Times New Roman", "Tahoma"], answer: "Noori Nastaliq" },
    { question: "19. Shortcut key for 'Center' alignment?", options: ["Ctrl + C", "Ctrl + Alt + C", "Alt + C", "Shift + C"], answer: "Ctrl + Alt + C" },
    { question: "20. Which tool is used to draw a circular text box?", options: ["Round Text Box Tool", "Circle Tool", "Title Tool", "I-Beam"], answer: "Round Text Box Tool" },
    { question: "21. Shortcut key to open a New document?", options: ["Ctrl + N", "Alt + N", "Ctrl + Shift + N", "F1"], answer: "Ctrl + N" },
    { question: "22. Can we use InPage for making newspapers?", options: ["Yes", "No", "Only for English", "None of these"], answer: "Yes" },
    { question: "23. Shortcut key for 'Undo' in InPage?", options: ["Ctrl + U", "Ctrl + Z", "Alt + Backspace", "Both B & C"], answer: "Both B & C" },
    { question: "24. Shortcut key for 'Right Alignment'?", options: ["Ctrl + R", "Ctrl + Alt + R", "Alt + R", "Shift + R"], answer: "Ctrl + Alt + R" },
    { question: "25. Which shortcut is used to 'Find and Replace'?", options: ["Ctrl + F", "Ctrl + H", "Alt + F", "F3"], answer: "Ctrl + F" },
    { question: "26. To change the language from the Status Bar, you click on?", options: ["Language Toggle", "Name of Language", "Red Box", "Bottom Right Corner"], answer: "Bottom Right Corner" },
    { question: "27. Shortcut key to 'Print' a document?", options: ["Ctrl + P", "Alt + P", "Shift + P", "Ctrl + F2"], answer: "Ctrl + P" },
    { question: "28. Which key is used to delete text to the right side?", options: ["Backspace", "Delete", "Shift", "Esc"], answer: "Delete" },
    { question: "29. What is 'Master Page' used for?", options: ["Typing", "Common Header/Footer/Background", "Printing", "Saving"], answer: "Common Header/Footer/Background" },
    { question: "30. Which option is used to change character spacing?", options: ["Kerning", "Tracking", "Leading", "Scaling"], answer: "Tracking" }
  ]
};
// ===== START QUIZ =====
startBtn.addEventListener("click", () => {

  const name = nameInput.value.trim();
  const password = document.getElementById("password-input").value.trim();
  const selectedTest = testSelect.value;

  if (!name || !password) {
    alert("Enter name and password!");
    return;
  }

  if (password !== "1234") {
    alert("Wrong password!");
    return;
  }

  if (!selectedTest) {
    alert("Select a test!");
    return;
  }

  currentQuestions = questionBanks[selectedTest];

  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  timerDisplay.style.display = "block";

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 600;

  startTimer();
  showQuestion();
});

// ===== SHOW QUESTION =====
function showQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");

    btn.onclick = () => {
      q.selectedOption = option;

      document.querySelectorAll(".option").forEach(b => b.disabled = true);

      if (option === q.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("incorrect");
      }
    };

    optionsContainer.appendChild(btn);
  });
}

// ===== NEXT =====
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
});

// ===== TIMER =====
// 1. SHOW QUESTION (With Numbering)
function showQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  
  // Question text ke saath number dikhane ke liye
  questionText.innerHTML = `
    <div style="color: #1e88e5; font-size: 14px; font-weight: bold; margin-bottom: 10px;">
      Question ${currentQuestionIndex + 1} of ${currentQuestions.length}
    </div>
    ${q.question}
  `;
  
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");

    btn.onclick = () => {
      // Ek baar click hone par baaki options lock kar dena
      const allButtons = optionsContainer.querySelectorAll(".option");
      allButtons.forEach(b => b.disabled = true);

      q.selectedOption = option; // User ka jawab save karna

      if (option === q.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("incorrect");
        // Sahi jawab ko highlight karna taake user seekh sake
        allButtons.forEach(b => {
          if (b.textContent === q.answer) b.classList.add("correct");
        });
      }
    };
    optionsContainer.appendChild(btn);
  });
}

// 2. SHOW RESULT (With Detailed Review)
function showResult() {
    clearInterval(timer);
    quizScreen.style.display = "none";
    timerDisplay.style.display = "none";
    resultScreen.style.display = "block";

    let detailsHTML = `
        <h2 style="color: #1e3c72;">Quiz Report Card</h2>
        <div style="background: #f1f3f5; padding: 15px; border-radius: 10px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Subject:</strong> ${testSelect.value.toUpperCase()}</p>
            <p><strong>Score:</strong> ${score} / ${currentQuestions.length}</p>
        </div>
        <div style="max-height: 400px; overflow-y: auto; text-align: left; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Review Your Answers:</h3>
            <ol>
    `;

    currentQuestions.forEach((q) => {
        const isCorrect = q.selectedOption === q.answer;
        detailsHTML += `
            <li style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                <strong>${q.question}</strong><br>
                <span style="color: ${isCorrect ? '#2ecc71' : '#e74c3c'}; font-weight: bold;">
                    Your Answer: ${q.selectedOption || "Skipped"} ${isCorrect ? '✅' : '❌'}
                </span><br>
                <small style="color: #666;">Correct Answer: ${q.answer}</small>
            </li>
        `;
    });

    detailsHTML += `
            </ol>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button onclick="downloadPDF()" style="background: #f1f8f4;">Download PDF Report</button>
            <button onclick="location.reload()" style="background: #f2f6f7;">Restart Quiz</button>
        </div>
    `;
    resultScreen.innerHTML = detailsHTML;
}

// 3. PDF DOWNLOAD FUNCTION
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // PDF Header
    doc.setFontSize(20);
    doc.setTextColor(30, 60, 114);
    doc.text("Quiz Final Result", 20, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Student Name: ${nameInput.value}`, 20, 35);
    doc.text(`Category: ${testSelect.value.toUpperCase()}`, 20, 42);
    doc.text(`Final Score: ${score} / ${currentQuestions.length}`, 20, 49);

    const tableRows = [];
    currentQuestions.forEach((q, index) => {
        tableRows.push([
            index + 1,
            q.question,
            q.selectedOption || "N/A",
            q.answer,
            q.selectedOption === q.answer ? "Correct" : "Wrong"
        ]);
    });

    // Table Creation
    doc.autoTable({
        startY: 55,
        head: [['#', 'Question', 'Your Answer', 'Correct Answer', 'Status']],
        body: tableRows,
        theme: 'grid',
        headStyles: { fillColor: [30, 60, 114] },
        styles: { fontSize: 9 }
    });

    doc.save(`${nameInput.value}_Result.pdf`);
}
