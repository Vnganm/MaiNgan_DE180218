import React, { useState } from 'react';
import Question from './Question';
import Result from './Score';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-app">
      {quizCompleted ? (
        <Result score={score} total={quizData.length} onReplay={handleReplay} />
      ) : (
        <Question
          questionData={quizData[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
};

export default QuizApp;