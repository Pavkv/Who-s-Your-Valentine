export default class QuizQuestion {
  constructor(data, selector, id, onAnswerSelected) {
    this._data = data;
    this._selector = selector;
    this._id = id;
    this._onAnswerSelected = onAnswerSelected;
  }

  _getTemplate(reference, templateSelector, containerSelector) {
    return reference
      .querySelector(templateSelector)
      .content.querySelector(containerSelector)
      .cloneNode(true);
  }

  _getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this._data.length);
    return this._data.splice(randomIndex, 1)[0];
  }

  _setEventListeners(answerItem) {
    answerItem.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (this._onAnswerSelected) {
        this._onAnswerSelected();
      }
    });
  }

  getQuestionElement() {
    const questionElement = this._getTemplate(
      document,
      this._selector.quizQuestionTemplate,
      this._selector.quizQuestionContainer
    );
    const questionItem = this._getRandomQuestion();
    questionElement.querySelector(this._selector.quizQuestionText).textContent =
      questionItem.question;
    questionElement.querySelector(this._selector.quizQuestionText).id =
      this._id;

    const answerList = questionElement.querySelector(
      this._selector.quizAnswerList
    );
    const answerTemplate = this._getTemplate(
      questionElement,
      this._selector.quizAnswerTemplate,
      this._selector.quizAnswerContainer
    );

    questionItem.answers.forEach((answer) => {
      const answerItem = answerTemplate.cloneNode(true);
      answerItem.textContent = String(answer).trim();
      this._setEventListeners(answerItem);
      answerList.append(answerItem);
    });

    return questionElement;
  }
}
