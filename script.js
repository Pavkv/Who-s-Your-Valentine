document.addEventListener("DOMContentLoaded", function () {
  let currentQuestion = 1;
  const totalQuestions = 4;

  function showQuestion(number) {
    document
      .querySelectorAll(".question")
      .forEach((q) => (q.style.display = "none"));
    const question = document.getElementById(`question${number}`);
    if (question) {
      question.style.display = "block";
    }
  }

  function nextQuestion() {
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }

  function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
          <p>Thanks for taking the quiz! ❤️</p>
          <button id="restartButton">Start Over</button>
        `;
    document
      .querySelectorAll(".question")
      .forEach((q) => (q.style.display = "none"));

    // Attach event listener for restart button
    document
      .getElementById("restartButton")
      .addEventListener("click", restartQuiz);
  }

  function restartQuiz() {
    currentQuestion = 1;
    document.getElementById("result").innerHTML = "";
    showQuestion(currentQuestion);
  }

  // Attach event listeners to buttons dynamically
  document.querySelectorAll(".question button").forEach((button) => {
    button.addEventListener("click", nextQuestion);
  });

  // Show the first question on page load
  showQuestion(currentQuestion);
});
