import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: false
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };


  return (
    <Container className="my-5">

      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group as={Row} className="mb-3" controlId="formFirstName">
          <Form.Label column sm={2}>First name</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your first name.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Last Name */}
        <Form.Group as={Row} className="mb-3" controlId="formLastName">
          <Form.Label column sm={2}>Last name</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide your last name.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Username */}
        <Form.Group as={Row} className="mb-3" controlId="formUsername">
          <Form.Label column sm={2}>Username</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              minLength={3}
            />
            <Form.Control.Feedback type="invalid">
              Username must be at least 3 characters.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* City */}
        <Form.Group as={Row} className="mb-3" controlId="formCity">
          <Form.Label column sm={2}>City</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* State */}
        <Form.Group as={Row} className="mb-3" controlId="formState">
          <Form.Label column sm={2}>State</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Zip */}
        <Form.Group as={Row} className="mb-3" controlId="formZip">
          <Form.Label column sm={2}>Zip</Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
              pattern="\d{5}"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a 5-digit zip code.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        {/* Terms and Conditions */}
        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            required
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            label="Agree to terms and conditions"
          />
          <Form.Control.Feedback type="invalid">
            You must agree before submitting.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;