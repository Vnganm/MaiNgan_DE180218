import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuiz } from '../store/quizSlice';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap';

const QuizResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { questions, userAnswers, score, isSubmitted } = useSelector(state => state.quiz);

  const handleRetakeQuiz = () => {
    dispatch(resetQuiz());
    navigate('/quiz');
  };

  const getPercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getGrade = () => {
    const percentage = getPercentage();
    if (percentage >= 90) return 'Excellent!';
    if (percentage >= 80) return 'Very Good!';
    if (percentage >= 70) return 'Good!';
    if (percentage >= 60) return 'Fair';
    return 'Need Improvement';
  };

  if (!isSubmitted) {
    return (
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Quiz Not Submitted</Card.Title>
            <Card.Text>Please complete and submit the quiz first.</Card.Text>
            <Button variant="primary" onClick={() => navigate('/quiz')}>
              Go to Quiz
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className="mb-0">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="custom-title">Quiz Review</div>

      <Container className="mt-4">
        <Card>
          <Card.Body>
            <div className="score-card text-center mb-4">
              <h3>Score: {score} / {questions.length} ({getPercentage()}%)</h3>
              <p>{getGrade()}</p>
            </div>
            <div className="review-content">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <div key={question.id} className={`review-question ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <Card.Text>
                      <h4>Q{index + 1}. {question.question}</h4>
                      <div className="question-options">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswers[question.id] === optionIndex;
                          const isCorrectAnswer = question.correctAnswer === optionIndex;
                          let optionClass = 'review-option';
                          if (isSubmitted) {
                            if (isUserAnswer && isCorrectAnswer) optionClass += ' user-correct';
                            else if (isUserAnswer && !isCorrectAnswer) optionClass += ' user-incorrect';
                            else if (!isUserAnswer && isCorrectAnswer) optionClass += ' correct-answer';
                          }
                          return (
                            <div key={optionIndex} className={optionClass}>
                              <input type="radio" checked={isUserAnswer} readOnly />
                              <span>{option}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="answer-status">
                        {isCorrect ? '✓ Right answer is: ' : '✗ Right answer is: '}
                        <strong>{question.options[question.correctAnswer]}</strong>
                      </div>
                    </Card.Text>
                  </div>
                );
              })}
            </div>
            <div className="buttons-row">
              <Button variant="primary" onClick={handleRetakeQuiz}>
                Retake Quiz
              </Button>
              <Button variant="secondary" onClick={() => navigate('/')} className="ms-2">
                Back to Home
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default QuizResult;