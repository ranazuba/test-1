// Get elements
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerDisplay = document.getElementById("timer");
const nameInput = document.getElementById("name-input");
const testSelect = document.getElementById("test-select");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 600; // 10 minutes
let currentQuestions = [];

// ✅ Question Banks
const questionBanks = {
  word: [
  { question: "1. Which shortcut key is used to 'Copy' text in MS Word?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + A", "Ctrl + C"], answer: "Ctrl + C" },
  { question: "2. Which key combination is used to 'Paste' copied text in MS Word?", options: ["Ctrl + C", "Ctrl + X", "Ctrl + Z", "Ctrl + V"], answer: "Ctrl + V" },
  { question: "3. The shortcut key to 'Cut' selected text in MS Word is:", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Y", "Ctrl + X"], answer: "Ctrl + X" },
  { question: "4. What is the keyboard shortcut for 'Undo' in MS Word?", options: ["Ctrl + Y", "Ctrl + S", "Ctrl + P", "Ctrl + Z"], answer: "Ctrl + Z" },
  { question: "5. To 'Save' your document in MS Word, which shortcut key is used?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + Q", "Ctrl + S"], answer: "Ctrl + S" },
  { question: "6. Which shortcut key is used to 'Print' a document in MS Word?", options: ["Ctrl + Q", "Ctrl + S", "Ctrl + R", "Ctrl + P"], answer: "Ctrl + P" },
  { question: "7. What would life be like if computers stopped working completely?", options: ["Life would be harder", "life will be easier", "Nothing would change", "Everything stop working"], answer: "Life would be harder" },
  { question: "8. A person who operates a computer is called a:", options: ["User", "Programmer", "Engineer", "Employee"], answer: "User" },
  { question: "9. Which shortcut key is used for 'Italic' text in MS Word?", options: ["Ctrl + B", "Ctrl + U", "Ctrl + V", "Ctrl + I"], answer: "Ctrl + I" },
  { question: "10. To 'Underline' selected text, which keys are pressed?", options: ["Ctrl + B", "Ctrl + I", "Ctrl + N", "Ctrl + U"], answer: "Ctrl + U" },
  { question: "11. What is the shortcut key for 'Find' command in MS Word?", options: ["Ctrl + H", "Ctrl + G", "Ctrl + E", "Ctrl + F"], answer: "Ctrl + F" },
  { question: "12. Which shortcut opens the 'Replace' dialog box in MS Word?", options: ["Ctrl + F", "Ctrl + Z", "Ctrl + P", "Ctrl + H"], answer: "Ctrl + H" },
  { question: "13. To create a 'New Document', which key combination is used?", options: ["Ctrl + O", "Ctrl + S", "Ctrl + D", "Ctrl + N"], answer: "Ctrl + N" },
  { question: "14. Which shortcut key opens an existing document in MS Word?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + R", "Ctrl + O"], answer: "Ctrl + O" },
  { question: "15. The shortcut key for 'Redo' in MS Word is:", options: ["Ctrl + Z", "Ctrl + S", "Ctrl + Q", "Ctrl + Y"], answer: "Ctrl + Y" },
  { question: "16. To 'Increase Font Size' in MS Word, which shortcut is used?", options: ["Ctrl + {", "Ctrl + }", "Ctrl + <", "Ctrl + >"], answer: "Ctrl + }" },
  { question: "17. Which shortcut key centers the text in MS Word?", options: ["Ctrl + L", "Ctrl + R", "Ctrl + T", "Ctrl + E"], answer: "Ctrl + E" },
  { question: "18. MS Word is mainly used for:", options: ["Creating Document", "Creating Image", "Creating Information", "None of These"], answer: "Creating Document" },
  { question: "19. What is the shortcut key for 'Left Align' in MS Word?", options: ["Ctrl + R", "Ctrl + E", "Ctrl + J", "Ctrl + L"], answer: "Ctrl + L" },
  { question: "20. Which shortcut key inserts an 'EndNote' in MS Word?", options: ["Ctrl + Alt + F", "Ctrl + F", "Ctrl + Alt + D", "Ctrl + D"], answer: "Ctrl + Alt + D" },
  { question: "21. The shortcut key to 'Create a bullet list' is:", options: ["Ctrl + L", "Ctrl + B", "Ctrl + R", "Ctrl + Shift + L"], answer: "Ctrl + Shift + L" },
  { question: "22. What is the shortcut key for 'Close Word File'?", options: ["Alt + F4", "Ctrl + f4", "Ctrl + W", "Ctrl + Shift + C"], answer: "Ctrl + W" },
  { question: "23. To insert a 'Footnote' in MS Word, which keys are pressed?", options: ["Ctrl + Shift + Enter", "Ctrl + B", "Ctrl + U", "Ctrl + Alt + F"], answer: "Ctrl + Alt + F" },
  { question: "24. What is the shortcut key for 'Superscript' text in MS Word?", options: ["Ctrl + Shift++", "Ctrl ++", "Ctrl + Shift + -", "Ctl+Alt ++"], answer: "Ctrl + Shift++" },
  { question: "25. A blue wavy line under text in MS Word indicates:", options: ["Common Mistake", "Grammer Mistake", "Spelling Mistake", "Natural Mistake"], answer: "Common Mistake" },
  { question: "26. The default file extension of MS Word document is:", options: [".doxc", ".docix", ".dcox", ".docx"], answer: ".docx" },
  { question: "27. In which tab is the 'Watermark' option available?", options: ["Insert", "Design", "Layout", "Draw"], answer: "Design" },
  { question: "28. The 'Ruler' option in MS Word can be found under which tab?", options: ["Review", "View", "Insert", "Reference"], answer: "View" },
  { question: "29. How many total pages are there in your MS Word notes?", options: ["22", "23", "25", "26"], answer: "25" },
  { question: "30. Can a computer think and make decisions like a human being?", options: ["yes", "No", "Maybe", "both yes and No"], answer: "No" }
],
  excel:[
    { question: "1. What is the file extension of MS Excel?", options: [".xlsx", ".xlsd", ".docx", ".pptx"], answer: ".xlsx" },
    { question: "2. What is the shortcut key to insert a new sheet in Excel?", options: ["Ctrl + T", "Shift + F10", "Ctrl + N", "Shift + F11"], answer: "Shift + F11" },
    { question: "3. What is the total number of rows in the latest version of Excel?", options: ["65536", "16384", "1000000", "1048576"], answer: "1048576" },
    { question: "4. What is the total number of columns in the latest version of Excel?", options: ["16384", "1048576", "256", "1024"], answer: "16384" },
    { question: "5. What is the shortcut key to go to the first row/column?", options: ["Ctrl + Up", "Ctrl + Home", "Ctrl + Left", "Ctrl + Down"], answer: "Ctrl + Up" },
    { question: "6. What key is used to edit a cell?", options: ["F2", "Ctrl + E", "Ctrl + Enter", "Alt + E"], answer: "F2" },
    { question: "7. What is the shortcut to enter the current date in Excel?", options: ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + ;", "Shift + ;"], answer: "Ctrl + ;" },
    { question: "8. What is the shortcut for selecting the entire row?", options: ["Ctrl + Space", "Alt + R", "Shift + Space", "Ctrl + A"], answer: "Shift + Space" },
    { question: "9. What is the shortcut for selecting the entire column?", options: ["Shift + C", "Ctrl + Space", "Ctrl + L", "Alt + C"], answer: "Ctrl + Space" },
    { question: "10. What is the shortcut for hiding a column?", options: ["Ctrl + Shift + )", "Ctrl + H", "Ctrl + 0", "Ctrl + )"], answer: "Ctrl + )" },
    { question: "11. What is the shortcut for showing hidden rows?", options: ["Ctrl + Shift + 9", "Alt + R", "Ctrl + (", "Ctrl + Shift + 0"], answer: "Ctrl + Shift + 9" },
    { question: "12. Which formula is used to calculate percentage in Excel?", options: ["=Sum(M/N*100)", "=M+N*100", "=M/N", "=Sum(M,N)*100"], answer: "=Sum(M/N*100)" },
    { question: "13. What function is used to remove extra spaces?", options: ["=Trim()", "=Clear()", "=DelSpace()", "=Remove()"], answer: "=Trim()" },
    { question: "14. What formula assigns a grade of 'A+' if a student scores above 80%?", options: ["=IF(P3>=80,\"A+\")", "=IF(P3>=80,\"A+\",\"B\")", "=IF(P3>80,\"A+\")", "=IF(P3>=80,\"A\")"], answer: "=IF(P3>=80,\"A+\")" },
    { question: "15. What function returns the middle part of a string?", options: ["=MID()", "=MIDPART()", "=LEFT()", "=RIGHT()"], answer: "=MID()" },
    { question: "16. Which function counts cells that meet a condition?", options: ["=MatchIf()", "=SumIf()", "=CountIf()", "=IfCount()"], answer: "=CountIf()" },
    { question: "17. What formula counts non-empty cells?", options: ["=Count()", "=CountA()", "=CountBlank()", "=CountAll()"], answer: "=CountA()" },
    { question: "18. What formula shows only the integer part of a number?", options: ["=Int()", "=Turnc()", "=Round()", "=Trunc()"], answer: "=Int()" },
    { question: "19. What function joins values from two cells with a dash?", options: ["=Concatenate(A2,\"-\",B2)", "=Join(A2,B2)", "=Merge()", "=Concat(A2-B2)"], answer: "=Concatenate(A2,\"-\",B2)" },
    { question: "20. What formula converts all letters in a string to uppercase?", options: ["=Upper()", "=Caps()", "=ToUpper()", "=UCase()"], answer: "=Upper()" },
    { question: "21. What is the shortcut for 'Find' in Excel?", options: ["Ctrl + S", "Ctrl + G", "Ctrl + H", "Ctrl + F"], answer: "Ctrl + F" },
    { question: "22. What is the shortcut for 'Replace' in Excel?", options: ["Ctrl + F", "Ctrl + V", "Ctrl + H", "Ctrl + G"], answer: "Ctrl + H" },
    { question: "23. What shortcut key is used to apply filter?", options: ["Ctrl + Shift + F", "Ctrl + Shift + L", "Alt + D + F + F", "Ctrl + Alt + F"], answer: "Ctrl + Shift + L" },
    { question: "24. What shortcut fills the right cell with data from the left?", options: ["Ctrl + F", "Ctrl + L", "Ctrl + D", "Ctrl + R"], answer: "Ctrl + R" },
    { question: "25. What is the shortcut to wrap text in Excel?", options: ["Alt + Enter", "Ctrl + W", "Ctrl + Enter", "Shift + Enter"], answer: "Alt + Enter" },
    { question: "26. Which function gives the most frequently occurring value?", options: ["=Mean()", "=Mod()", "=Mode()", "=Median()"], answer: "=Mode()" },
    { question: "27. What function is used to calculate power in Excel?", options: ["=Exponent()", "=Raise()", "=Power()", "=Pow()"], answer: "=Power()" },
    { question: "28. What function checks if two values are exactly the same?", options: ["=IsEqual()", "=Match()", "=Compare()", "=Exact()"], answer: "=Exact()" },
    { question: "29. What is the path to apply conditional formatting?", options: ["Home > Conditional Formatting", "Insert > Rules > Condition", "Data > Conditional Formatting", "Home > Format > Cell"], answer: "Home > Conditional Formatting" },
    { question: "30. What function is used to lookup a value in a table?", options: ["=HLOOKUP()", "=INDEX()", "=SEARCH()", "=VLOOKUP()"], answer: "=VLOOKUP()" }
  ],
  powerpoint:[
  { "question": "1. What is the file extension of PowerPoint files?", "options": [".pptx", ".docx", ".xlsx", ".txt"], "answer": ".pptx" },
  { "question": "2. What shortcut creates a new slide in PowerPoint?", "options": ["Ctrl + M", "Ctrl + N", "Shift + M", "Ctrl + S"], "answer": "Ctrl + M" },
  { "question": "3. Which shortcut starts the slideshow from the beginning?", "options": ["F5", "Shift + F5", "Ctrl + S", "Alt + F5"], "answer": "F5" },
  { "question": "4. What shortcut deletes a slide in PowerPoint?", "options": ["Delete + Backspace", "Ctrl + D", "Alt + Delete", "Ctrl + Backspace"], "answer": "Delete + Backspace" },
  { "question": "5. What is the shortcut to increase font size?", "options": ["Ctrl + Shift + >", "Ctrl + >", "Shift + >", "Alt + >"], "answer": "Ctrl + Shift + >" },
  { "question": "6. What is the shortcut to decrease font size?", "options": ["Ctrl + Shift + <", "Alt + <", "Ctrl + <", "Shift + <"], "answer": "Ctrl + Shift + <" },
  { "question": "7. Which transition is commonly used in PowerPoint?", "options": ["Shred", "Zoom", "Slide", "Snap"], "answer": "Shred" },
  { "question": "8. Which key shows the current slide in full screen?", "options": ["Shift + F5", "F11", "F8", "Alt + F5"], "answer": "Shift + F5" },
  { "question": "9. What is the shortcut to go to the first slide?", "options": ["Ctrl + Home", "Home", "Alt + Home", "Shift + Home"], "answer": "Ctrl + Home" },
  { "question": "10. What shortcut returns to the last slide?", "options": ["Ctrl + End", "Alt + End", "Shift + End", "Ctrl + Down"], "answer": "Ctrl + End" },
  { "question": "11. How to preview the current slide?", "options": ["Shift + F5", "Alt + P", "Ctrl + F5", "F11"], "answer": "Shift + F5" },
  { "question": "12. What shortcut groups selected items?", "options": ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Ctrl + Alt + G"], "answer": "Ctrl + G" },
  { "question": "13. What shortcut ungroups items?", "options": ["Ctrl + Shift + G", "Ctrl + U", "Alt + U", "Ctrl + G"], "answer": "Ctrl + Shift + G" },
  { "question": "14. Which key makes the screen black during a slideshow?", "options": ["B", "K", "Ctrl + B", "Alt + B"], "answer": "B" },
  { "question": "15. Which key makes the screen white during a slideshow?", "options": ["W", "Ctrl + W", "Alt + W", "Shift + W"], "answer": "W" },
  { "question": "16. What is the shortcut to erase pen drawings?", "options": ["E", "Ctrl + E", "Shift + E", "Alt + E"], "answer": "E" },
  { "question": "17. What shortcut turns off the pen tool?", "options": ["ESC", "Ctrl + ESC", "Alt + ESC", "F8"], "answer": "ESC" },
  { "question": "18. What shortcut changes pen to pointer?", "options": ["Ctrl + A", "Ctrl + P", "Alt + A", "Shift + A"], "answer": "Ctrl + A" },
  { "question": "19. What key restarts or pauses an automatic show?", "options": ["S", "P", "Shift + S", "Ctrl + S"], "answer": "S" },
  { "question": "20. How do you go to the previous slide during a show?", "options": ["P", "Ctrl + Left", "Page Up", "Backspace"], "answer": "P" },
  { "question": "21. What takes you to the first slide during a slideshow?", "options": ["1 + Enter", "Ctrl + Home", "Shift + 1", "Alt + 1"], "answer": "1 + Enter" },
  { "question": "22. What is a famous transition in PowerPoint?", "options": ["Vortex", "Zoom", "Push", "Cut"], "answer": "Vortex" },
  { "question": "23. What tool is used for slide background styling?", "options": ["Background Styles", "Fill Tool", "Format Brush", "Slide Master"], "answer": "Background Styles" },
  { "question": "24. Which shortcut formats superscript text?", "options": ["Ctrl + =", "Ctrl + +", "Alt + =", "Ctrl + Shift + ="], "answer": "Ctrl + =" },
  { "question": "25. Which shortcut formats subscript text?", "options": ["Ctrl + Shift + +", "Ctrl + +", "Alt + Shift + +", "Ctrl + Alt + Shift"], "answer": "Ctrl + Shift + +" },
  { "question": "26. What shows or hides the gridlines?", "options": ["Shift + F9", "Ctrl + G", "Alt + F9", "Ctrl + F9"], "answer": "Shift + F9" },
  { "question": "27. What key combination shows the design tab?", "options": ["Ctrl + D", "Alt + G", "Ctrl + T", "Alt + D"], "answer": "Alt + G" },
  { "question": "28. Which option adjusts timing in animations?", "options": ["Timing", "Speed", "Duration", "Delay"], "answer": "Timing" },
  { "question": "29. What is used to fill slide backgrounds?", "options": ["Fill Effect", "Background Color", "Gradient Tool", "Brush Tool"], "answer": "Fill Effect" },
  { "question": "30. What transition creates a sparkly effect?", "options": ["Glitter", "Shimmer", "Flash", "Fade"], "answer": "Glitter" }
],
  inpage: 
[
  { "question": "1. What is the shortcut to Auto Save in InPage?", "options": ["Alt + F11", "Ctrl + S", "Ctrl + F11", "Alt + S"], "answer": "Alt + F11" },
  { "question": "2. What is the shortcut to select all in InPage?", "options": ["Ctrl + A", "Ctrl + Alt + A", "Alt + A", "Ctrl + Shift + A"], "answer": "Ctrl + A" },
  { "question": "3. What shortcut increases font size?", "options": ["Ctrl + F10", "Ctrl + +", "Ctrl + Shift + >", "Alt + F10"], "answer": "Ctrl + F10" },
  { "question": "4. What shortcut decreases font size?", "options": ["Ctrl + F9", "Alt + F9", "Ctrl + Shift + <", "Ctrl + -"], "answer": "Ctrl + F9" },
  { "question": "5. Which key increases word spacing?", "options": ["Ctrl + F5", "Alt + F5", "Ctrl + Shift + 5", "Ctrl + 5"], "answer": "Ctrl + F5" },
  { "question": "6. Which key decreases word spacing?", "options": ["Ctrl + F6", "Alt + F6", "Ctrl + Shift + F6", "Ctrl + Alt + 6"], "answer": "Ctrl + F6" },
  { "question": "7. Shortcut for increasing line spacing?", "options": ["Ctrl + Shift + F5", "Ctrl + F5", "Alt + Shift + F5", "Ctrl + Alt + F5"], "answer": "Ctrl + Shift + F5" },
  { "question": "8. Shortcut for decreasing line spacing?", "options": ["Ctrl + Shift + F6", "Ctrl + F6", "Alt + Shift + F6", "Ctrl + Alt + F6"], "answer": "Ctrl + Shift + F6" },
  { "question": "9. Move to the right in InPage?", "options": ["Ctrl + Alt + R", "Ctrl + R", "Alt + R", "Ctrl + Shift + R"], "answer": "Ctrl + Alt + R" },
  { "question": "10. Move to the left in InPage?", "options": ["Ctrl + Alt + L", "Ctrl + L", "Alt + L", "Ctrl + Shift + L"], "answer": "Ctrl + Alt + L" },
  { "question": "11. Move to center in InPage?", "options": ["Ctrl + Alt + C", "Ctrl + C", "Alt + C", "Ctrl + Shift + C"], "answer": "Ctrl + Alt + C" },
  { "question": "12. How to make text justified?", "options": ["Ctrl + Alt + J", "Ctrl + J", "Alt + J", "Ctrl + Shift + J"], "answer": "Ctrl + Alt + J" },
  { "question": "13. Move text up in InPage?", "options": ["Ctrl + F7", "Alt + F7", "Ctrl + Shift + F7", "Ctrl + 7"], "answer": "Ctrl + F7" },
  { "question": "14. Move text down?", "options": ["Ctrl + F8", "Alt + F8", "Ctrl + Shift + F8", "Ctrl + 8"], "answer": "Ctrl + F8" },
  { "question": "15. Shortcut for bold text?", "options": ["Ctrl + B", "Alt + B", "Ctrl + Shift + B", "Ctrl + Alt + B"], "answer": "Ctrl + B" },
  { "question": "16. Shortcut for italic text?", "options": ["Ctrl + I", "Alt + I", "Ctrl + Shift + I", "Ctrl + Alt + I"], "answer": "Ctrl + I" },
  { "question": "17. Skew text increase?", "options": ["Ctrl + Shift + F7", "Ctrl + F7", "Alt + F7", "Ctrl + Alt + F7"], "answer": "Ctrl + Shift + F7" },
  { "question": "18. Skew text decrease?", "options": ["Ctrl + Shift + F8", "Ctrl + F8", "Alt + F8", "Ctrl + Alt + F8"], "answer": "Ctrl + Shift + F8" },
  { "question": "19. Create new page?", "options": ["Alt + Insert", "Ctrl + N", "Shift + Insert", "Ctrl + Insert"], "answer": "Alt + Insert" },
  { "question": "20. Delete a page?", "options": ["Alt + Delete", "Ctrl + Delete", "Shift + Delete", "Ctrl + Alt + Delete"], "answer": "Alt + Delete" },
  { "question": "21. Shortcut to go to next page?", "options": ["Alt + Page Down", "Ctrl + Down", "Page Down", "Shift + Page Down"], "answer": "Alt + Page Down" },
  { "question": "22. Shortcut to go to previous page?", "options": ["Alt + Page Up", "Ctrl + Up", "Page Up", "Shift + Page Up"], "answer": "Alt + Page Up" },
  { "question": "23. Shortcut to go to first page?", "options": ["Alt + Home", "Ctrl + Home", "Home", "Shift + Home"], "answer": "Alt + Home" },
  { "question": "24. Shortcut to go to last page?", "options": ["Alt + End", "Ctrl + End", "End", "Shift + End"], "answer": "Alt + End" },
  { "question": "25. Group items in InPage?", "options": ["Ctrl + Alt + G", "Ctrl + G", "Alt + G", "Ctrl + Shift + G"], "answer": "Ctrl + Alt + G" },
  { "question": "26. Ungroup items?", "options": ["Ctrl + Alt + U", "Ctrl + U", "Alt + U", "Ctrl + Shift + U"], "answer": "Ctrl + Alt + U" },
  { "question": "27. Toggle typing language?", "options": ["Ctrl + Space", "Alt + Shift", "Ctrl + Shift + Space", "Alt + Space"], "answer": "Ctrl + Space" },
  { "question": "28. Export a text file?", "options": ["Ctrl + Alt + Y", "Ctrl + Y", "Alt + Y", "Ctrl + E"], "answer": "Ctrl + Alt + Y" },
  { "question": "29. Import content into InPage?", "options": ["Ctrl + Y", "Ctrl + I", "Alt + Y", "Ctrl + Alt + Y"], "answer": "Ctrl + Y" },
  { "question": "30. Open document format settings?", "options": ["Ctrl + F11", "Alt + F11", "Ctrl + Alt + F11", "Ctrl + Shift + F11"], "answer": "Ctrl + F11" }
]
};

// ✅ Start Quiz
startBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const selectedTest = testSelect.value;
  if (!name) return alert("Please enter your name!");
  if (!selectedTest) return alert("Please select a test!");

  currentQuestions = questionBanks[selectedTest];
  if (!currentQuestions) return alert("Invalid test selection!");

  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  timerDisplay.style.display = "block";

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 600;
  startTimer();
  showQuestion();
});

// ✅ Show Question
function showQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion));
    optionsContainer.appendChild(button);
  });
}

// ✅ Select Answer
function selectAnswer(selectedButton, currentQuestion) {
  const selectedOption = selectedButton.textContent;
  currentQuestion.selectedOption = selectedOption;

  const allButtons = optionsContainer.querySelectorAll(".option");
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedOption === currentQuestion.answer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
}

// ✅ Next Question
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
});

// ✅ Timer Function
function startTimer() {
  timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// ✅ Show Result (with all answers + download)
function showResult() {
  stopTimer();
  quizScreen.style.display = "none";
  timerDisplay.style.display = "none";
  resultScreen.style.display = "block";
  resultScreen.innerHTML = "";

  const name = nameInput.value;
  const heading = document.createElement("h2");
  heading.textContent = `${name}, your score is ${score} out of ${currentQuestions.length}`;
  resultScreen.appendChild(heading);

  const resultList = document.createElement("ul");
  resultList.classList.add("attempts-list");

  currentQuestions.forEach((q, i) => {
    const item = document.createElement("li");
    const isCorrect = q.selectedOption === q.answer;
    item.classList.add("attempt-item");
    item.innerHTML = `
      <strong>Q${i + 1}: ${q.question}</strong><br>
      <span class="${isCorrect ? 'correct' : 'incorrect'}">
        Your Answer: ${q.selectedOption || "Not Answered"}<br>
        ${!isCorrect ? `Correct Answer: ${q.answer}` : ""}
      </span>
    `;
    resultList.appendChild(item);
  });

  resultScreen.appendChild(resultList);

  // ✅ Download Result Button
  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download Result";
  downloadButton.classList.add("download-btn");
  downloadButton.addEventListener("click", downloadResultAsImage);
  resultScreen.appendChild(downloadButton);

  // ✅ Restart Button
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.onclick = () => window.location.reload();
  resultScreen.appendChild(restartButton);
}

// ✅ Download Result as Image
function downloadResultAsImage() {
  const resultElement = document.getElementById("result-screen");
  html2canvas(resultElement).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${nameInput.value}_Quiz_Result.png`;
    link.click();
  });
}
