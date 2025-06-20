import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (!showScore && time > 0) {
      const timer = setInterval(() => setTime(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (time === 0) handleNextQuestion();
  }, [time, showScore]);

  useEffect(() => {
    if (showScore) {
      const highScore = localStorage.getItem("highScore") || 0;
      if (score > highScore) localStorage.setItem("highScore", score);
    }
  }, [showScore]);

  const handleOptionSelect = (option) => dispatch({ type: "SELECT_OPTION", payload: option });
  const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    setFeedback(isCorrect ? <><FaCheckCircle className="text-success me-2" /> Correct!</> : <><FaTimesCircle className="text-danger me-2" /> Incorrect! The correct answer is {questions[currentQuestion].answer}</>);
    setTimeout(() => setFeedback(""), 3000);
    dispatch({ type: "NEXT_QUESTION" });
    setTime(30);
  };
  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTime(10);
    setFeedback("");
  };

  return (
    <Container className="my-7">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm border-0 rounded-3 bg-light">
            <h2 className="text-center mb-4 text-primary">Quiz Challenge</h2>
            {showScore ? (
              <div className="text-center">
                <h3 className="text-success mb-3">Your Score: {score} / {questions.length}</h3>
                <h4 className="text-muted mb-3">High Score: {localStorage.getItem("highScore") || 0}</h4>

                <Button variant="primary" size="lg" onClick={handleRestartQuiz} className="px-4">
                  Restart Quiz
                </Button>
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="text-muted">Question {currentQuestion + 1} of {questions.length}</h5>
                  <h5 style={{ color: time < 5 ? "red" : "black" }}>Time: {time}s</h5>
                </div>
                {feedback && <div className="alert alert-info d-flex align-items-center mb-3">{feedback}</div>}
                <h4 className="mb-4">{questions[currentQuestion].question}</h4>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOption === option ? "success" : "outline-primary"}
                      className="flex-fill"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-100"
                  disabled={!selectedOption}
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBank;