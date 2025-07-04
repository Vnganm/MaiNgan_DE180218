import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const Contact = ({ initialData = {} }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    username: initialData.username || '',
    city: initialData.city || '',
    state: initialData.state || '',
    zip: initialData.zip || '',
    agreeTerms: initialData.agreeTerms || false,
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
    } else {
      // Thành công
      alert('Gửi thông tin thành công!');
      console.log('Form Data:', formData);
    }

    setValidated(true);
  };


  return (
    <Container className="my-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md="4">
            <Form.Group controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
              <Form.Control.Feedback type="invalid">Please provide your first name.</Form.Control.Feedback>
            </Form.Group>
          </Col>


          <Col md="4">
            <Form.Group controlId="validationLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
              />
              <Form.Control.Feedback type="invalid">Please provide your last name.</Form.Control.Feedback>
            </Form.Group>
          </Col>


          <Col md="4">
            <Form.Group controlId="validationUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  minLength={3}
                />
                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>


        </Row>

        <Row className="mb-3">


          <Col md="5">
            <Form.Group controlId="validationCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
              <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
            </Form.Group>
          </Col>


          <Col md="4">
            <Form.Group controlId="validationState">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
              <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
            </Form.Group>
          </Col>


          <Col md="3">
            <Form.Group controlId="validationZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                required
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip"
                pattern="\d{5}"
              />
              <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>

        <Form.Group className="mb-3" controlId="validationTerms">
          <Form.Check
            required
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>

      </Form>
    </Container>
  );
};

Contact.propTypes = {
  initialData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    agreeTerms: PropTypes.bool,
  })
};



export default Contact;
