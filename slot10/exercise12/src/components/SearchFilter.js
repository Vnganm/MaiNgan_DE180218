import React, { useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Search Filter</Card.Title>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search fruits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        
        <ListGroup className="mt-3">
          {filteredItems.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default SearchFilter;