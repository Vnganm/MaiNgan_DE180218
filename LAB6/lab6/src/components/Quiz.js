import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Card, Form } from 'react-bootstrap';
import {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  firstQuestion,
  lastQuestion,
  submitQuiz,
  resetQuiz,
  showQuizReview
} from '../store/quizSlice';

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { questions, currentQuestionIndex, userAnswers, isSubmitted } = useSelector(state => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    console.log('State:', { questions, currentQuestionIndex, userAnswers, isSubmitted });
  }, [questions, currentQuestionIndex, userAnswers, isSubmitted]);

  const handleAnswerSelect = (optionIndex) => {
    if (!isSubmitted) {
      dispatch(selectAnswer({ questionId: currentQuestion.id, selectedOption: optionIndex }));
    }
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
    navigate('/quiz/result');
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  const handleReview = () => {
    dispatch(showQuizReview());
    navigate('/quiz/review');
  };

  const isSelected = (optionIndex) => userAnswers[currentQuestion.id] === optionIndex;

  if (!questions || questions.length === 0) {
    return <div className="text-center mt-5">Loading questions...</div>;
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
      <div className="custom-title">JavaScript Quiz</div>

      <Container>
        <Card className="mb-4">
          <Card.Body>
            <Card.Text className="fw-bold fs-5">
              Q{currentQuestionIndex + 1}. {currentQuestion.question}
            </Card.Text>
            <Form>
              <div className="row">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="col-md-6 mb-3" // Thêm mb-3 cho khoảng cách giữa các hàng
                  >
                    <div className="option" onClick={() => !isSubmitted && handleAnswerSelect(index)}>
                      <Form.Check
                        type="radio"
                        id={`option-${index}`}
                        label={option}
                        checked={isSelected(index)}
                        onChange={() => handleAnswerSelect(index)}
                        disabled={isSubmitted}
                        style={{ cursor: 'pointer' }}
                        // Ẩn radio button mặc định và style lại
                        className="custom-radio"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Form>
            {isSubmitted && (
              <Card.Text className={userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? 'text-success' : 'text-danger'}>
                {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? 'Correct!' : `Incorrect! Correct answer: ${currentQuestion.options[currentQuestion.correctAnswer]}`}
              </Card.Text>
            )}
          </Card.Body>
        </Card>

        <div className="text-center mb-3">
          <Button variant="primary" onClick={() => dispatch(firstQuestion())} disabled={isFirstQuestion}>
            First
          </Button>
          <Button variant="primary" onClick={() => dispatch(prevQuestion())} disabled={isFirstQuestion}>
            Prev
          </Button>
          <Button variant="primary" onClick={() => dispatch(nextQuestion())} disabled={isLastQuestion}>
            Next
          </Button>
          <Button variant="primary" onClick={() => dispatch(lastQuestion())} disabled={isLastQuestion}>
            Last
          </Button>
        </div>
        <div className="buttons-row">
          <Button variant="primary" onClick={handleReview}>
            Quiz Review
          </Button>
          <Button variant="success" onClick={handleSubmit} disabled={isSubmitted || !userAnswers[currentQuestion.id]}>
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Quiz;