import { createSlice } from '@reduxjs/toolkit';

// Sample quiz data - JavaScript Quiz
const sampleQuestions = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["javascript", "scripting", "script", "js"],
    correctAnswer: 2 // script
  },
  {
    id: 2,
    question: "What are variables used for in JavaScript Programs?",
    options: [
      "Storing numbers, dates, or other values",
      "Varying randomly", 
      "Causing high-school algebra flashbacks",
      "None of these"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which of the following can't be done with client-side JavaScript?",
    options: [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form data to a database",
      "Responding to user events"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "alert('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create myFunction() {}",
      "function = myFunction() {}",
      "def myFunction() {}"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "Call.myFunction()"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "How to write an IF statement in JavaScript?",
    options: [
      "if i = 5 then",
      "if (i == 5)",
      "if i == 5 then",
      "if i = 5"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10; i++)",
      "while i = 1 to 10",
      "while (i <= 10)",
      "while i <= 10"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "How can you add a comment in JavaScript?",
    options: [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
      "*This is a comment*"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    ],
    correctAnswer: 1
  }
];

const initialState = {
  questions: sampleQuestions,
  currentQuestionIndex: 0,
  userAnswers: {},
  isSubmitted: false,
  showReview: false,
  score: 0
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      state.userAnswers[questionId] = selectedOption;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    goToQuestion: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.questions.length) {
        state.currentQuestionIndex = index;
      }
    },
    firstQuestion: (state) => {
      state.currentQuestionIndex = 0;
    },
    lastQuestion: (state) => {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    submitQuiz: (state) => {
      state.isSubmitted = true;
      // Calculate score
      let correctCount = 0;
      state.questions.forEach(question => {
        if (state.userAnswers[question.id] === question.correctAnswer) {
          correctCount++;
        }
      });
      state.score = correctCount;
    },
    showQuizReview: (state) => {
      state.showReview = true;
    },
    hideQuizReview: (state) => {
      state.showReview = false;
    },
    resetQuiz: (state) => {
      state.userAnswers = {};
      state.isSubmitted = false;
      state.showReview = false;
      state.currentQuestionIndex = 0;
      state.score = 0;
    }
  }
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  goToQuestion,
  firstQuestion,
  lastQuestion,
  submitQuiz,
  showQuizReview,
  hideQuizReview,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer;