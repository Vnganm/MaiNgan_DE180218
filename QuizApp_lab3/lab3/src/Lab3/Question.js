import React from 'react';

const Question = ({ questionData, selectedAnswer, onAnswerSelect, onAnswerSubmit }) => {
  const { question, options } = questionData;

  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? 'selected' : ''}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={onAnswerSubmit}
        disabled={!selectedAnswer}
        className="submit-btn"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default Question;