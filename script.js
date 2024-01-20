// script.js
const quotes = [
    
    "Regular attendance is the first step towards excellence.",
    "Absence diminishes responsibility, presence increases it.",

"Lost time is never found again.",

"Opportunity dances with those who are already on the floor.",

"Punctuality is the politeness of kings.",

"The key is not to prioritize what's on your schedule, but to schedule your priorities.",

"Consistency is the key to mastery.",

"The difference between ordinary and extraordinary is that little extra.",

"A small leak can sink a great ship.",

"The best way to predict your future is to create it.",
    // Add your 10 quotes here
];
let currentQuoteIndex = 0;

function changeQuote() {
    const quoteElement = document.querySelector(".quote");
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(changeQuote, 5000); // Change quote every 6 seconds
// script.js

const calculateButton = document.getElementById("calculateButton");
const outputElement = document.getElementById("output");

calculateButton.addEventListener("click", calculateAttendance);

function calculateAttendance() {
  const classesAttended = parseInt(document.getElementById("classesAttended").value);
  const classesHappened = parseInt(document.getElementById("classesHappened").value);
  const attendanceTarget = parseInt(document.getElementById("attendanceTarget").value);

  // Input validation
  if (isNaN(classesAttended) || isNaN(classesHappened) || isNaN(attendanceTarget)) {
    outputElement.textContent = "Please enter valid numbers.";
    return;
  }

  const currentAttendancePercentage = (classesAttended / classesHappened) * 100;

  if (currentAttendancePercentage >= attendanceTarget) {
    const classesCanSkip = Math.floor((currentAttendancePercentage - attendanceTarget) * classesHappened / 100);
    outputElement.textContent = `Your current attendance is ${currentAttendancePercentage.toFixed(2)}%. You can skip ${classesCanSkip} more classes and still meet your target.`;
  } else {
    const classesToAttend = Math.ceil((attendanceTarget * classesHappened - classesAttended * 100) / attendanceTarget);
    outputElement.textContent = `You need to attend ${classesToAttend} more classes to reach ${attendanceTarget}% attendance.`;
  }
}
