// Define the function
function checkAnswer() {
  // 1. Identify the correct answer
  const correctAnswer = "4";

  // 2. Retrieve the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If no option is selected, handle that case
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer first!";
    return;
  }

  const userAnswer = selectedOption.value;

  // 3. Compare user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// 4. Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
