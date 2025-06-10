import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const BookTable = () => (
  <Container className="my-5">
    <h2 className="text-center text-white mb-4">Book Your Table</h2>

    <Form className="p-4 rounded book-table-form">

      <Row className="mb-3">
        <Col md={4} className="mb-2">
          <Form.Control type="text" placeholder="Your Name *" required />
        </Col>
        <Col md={4} className="mb-2">
          <Form.Control type="email" placeholder="Your Email *" required />
        </Col>
        <Col md={4} className="mb-2">

          <Form.Select required>
            <option value="">Select a Service</option>
            <option value="dinein">Dine In</option>
            <option value="takeaway">Take Away</option>
            <option value="delivery">Delivery</option>
          </Form.Select>
          
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={5} placeholder="Please write your comment" />
      </Form.Group>

      <Button variant="warning" className="text-white" type="submit">Send Message</Button>

    </Form>
  </Container>
);

export default BookTable;