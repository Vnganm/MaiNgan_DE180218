import React from 'react';

const Result = ({ score, total, onReplay }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} out of {total}
      </p>
      <button onClick={onReplay}>Replay Quiz</button>
    </div>
  );
};

export default Result;