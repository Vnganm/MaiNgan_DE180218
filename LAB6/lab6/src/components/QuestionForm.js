import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { addQuestion } from '../store/quizSlice';

const QuestionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionText.trim() || options.filter(opt => opt.trim()).length < 2 || !options[correctAnswer].trim()) {
      alert('Please fill all fields and select a valid correct answer.');
      return;
    }
    dispatch(addQuestion({
      question: questionText.trim(),
      options: options.filter(opt => opt.trim()),
      correctAnswer
    }));
    navigate('/quiz');
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Add New Question</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Enter question"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Options</Form.Label>
              {options.map((option, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="Correct"
                    checked={correctAnswer === index}
                    onChange={() => setCorrectAnswer(index)}
                    className="ms-2"
                  />
                </div>
              ))}
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Question
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuestionForm;