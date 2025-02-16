import { formElement, questions, quizSelectors } from "../utils/constants.js";
import QuizQuestion from "../components/QuizQuestion.js";

const valentinesDayQuiz = (form) => {
    let currentQuestion = 1;
    const totalQuestions = 4;

    const showQuestion = () => {
        // Remove the previous question before showing the next
        form.querySelector(".quiz-question__container")?.remove();

        if (currentQuestion <= totalQuestions) {
            const questionElement = new QuizQuestion(questions, quizSelectors, currentQuestion, nextQuestion);
            form.append(questionElement.getQuestionElement());
        } else {
            showResult();
        }
    };

    const nextQuestion = () => {
        currentQuestion++;
        showQuestion();
    };

    const toggleButtonState = (visible) => {
        const buttonElement = form.querySelector(".quiz__form-restart-btn");
        if (buttonElement) {
            buttonElement.classList.toggle("quiz__form-restart-btn_visible", visible);
        }
    };

    const showResult = () => {
        const resultElement = form.querySelector(".quiz__form-result");
        if (resultElement) {
            resultElement.textContent = "Thanks for taking the quiz! ❤️";
        }
        toggleButtonState(true);
    };

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const resultElement = form.querySelector(".quiz__form-result");
        if (resultElement) {
            resultElement.textContent = "";
        }

        toggleButtonState(false);
        currentQuestion = 1;
        showQuestion();
    });

    // Start the quiz
    showQuestion();
};

// Initialize the quiz
valentinesDayQuiz(formElement);