import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { goToQuestion, submitQuiz } from '../store/quizSlice';
import { Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const QuizReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { questions, userAnswers, isSubmitted } = useSelector(state => state.quiz);

  const handleQuestionClick = (index) => {
    dispatch(goToQuestion(index));
    navigate('/quiz');
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
    navigate('/quiz/result');
  };

  const isAnswered = (questionId) => {
    return userAnswers[questionId] !== undefined;
  };

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
        <div className="question-nav-grid">
          <Row>
            {questions.map((question, index) => (
              <Col key={question.id} xs={4} className="mb-2">
                <Button
                  variant={isAnswered(question.id) ? 'success' : 'secondary'}
                  onClick={() => handleQuestionClick(index)}
                  className="w-100"
                >
                  Question No {index + 1} {isAnswered(question.id) ? 'Answered' : 'Not Answered'}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
        <div className="buttons-row">
          <Button variant="primary" onClick={() => navigate('/quiz')}>
            Back to Quiz
          </Button>
          <Button variant="success" onClick={handleSubmit} disabled={isSubmitted}>
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default QuizReview;