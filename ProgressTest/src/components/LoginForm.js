import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const users = response.data;
      
      const user = users.find(u => 
        u.username === username && 
        u.password === password &&
        u.status === 'active'
      );
      
      if (user) {
        setLoggedInUser(user.username);
        setShowModal(true);
        setUser(user);
      } else {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/laptops'); // Thêm điều hướng sau khi đóng modal
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              
              {showAlert && (
                <Alert variant="danger">
                  Invalid username or password!
                </Alert>
              )}
              
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, {loggedInUser} login Successful!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginForm;