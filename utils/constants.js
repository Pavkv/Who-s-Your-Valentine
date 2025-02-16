export const formElement = document.querySelector(".quiz__form");

export const questions = [
    {
        question: "What’s your idea of a perfect Valentine’s Day?",
        answers: ["A romantic candlelit dinner", "An adventurous outdoor activity", "A cozy movie night at home", "A fun game night with friends"]
    },
    {
        question: "Which love language do you relate to the most?",
        answers: ["Words of affirmation", "Quality time", "Acts of service", "Physical touch"]
    },
    {
        question: "If we were in a romantic movie, what would our story be like?",
        answers: ["A passionate love-at-first-sight story", "A slow-burn friendship-to-lovers romance", "A dramatic, against-all-odds love story", "A quirky rom-com with funny mishaps"]
    },
    {
        question: "Which Valentine’s Day gift would you love the most?",
        answers: ["A heartfelt handwritten letter", "A surprise trip or experience", "A thoughtful, practical gift", "Classic chocolates and flowers"]
    },
    {
        question: "What’s your dream date location?",
        answers: ["A beautiful beach at sunset", "A cozy cabin in the mountains", "A fancy rooftop restaurant", "An amusement park for a fun-filled day"]
    },
    {
        question: "How do you express love the most?",
        answers: ["Giving small, meaningful gifts", "Spending quality time together", "Doing thoughtful gestures and favors", "Expressing affection through words"]
    },
    {
        question: "Which romantic song would be our theme song?",
        answers: ["“Can’t Help Falling in Love” – Elvis Presley", "“Perfect” – Ed Sheeran", "“Love Story” – Taylor Swift", "“Thinking Out Loud” – Ed Sheeran"]
    },
    {
        question: "What’s the best way to end a perfect Valentine’s date?",
        answers: ["A long, deep conversation under the stars", "A sweet dance to slow music", "Watching a romantic movie together", "A spontaneous late-night adventure"]
    },
    {
        question: "Which romantic gesture would melt your heart the most?",
        answers: ["A surprise love note hidden somewhere special", "A homemade dinner prepared just for you", "A song or poem written about us", "A homemade dinner prepared just for you"]
    },
    {
        question: "What would you call our love story if it were a book?",
        answers: ["“A Love Written in the Stars” ", "“The Best Unexpected Adventure” ", "“A Tale of Two Souls” ", "“Happily Ever After (and Then Some)” "]
    }
];

export const quizSelectors = {
    quizQuestionTemplate: "#quiz-question-template",
    quizQuestionContainer: ".quiz-question__container",
    quizQuestionText: ".quiz-question__text",
    quizAnswerList: ".quiz-answer__list",
    quizAnswerTemplate: "#quiz-answer-template",
    quizAnswerContainer: ".quiz-question__answer"
};