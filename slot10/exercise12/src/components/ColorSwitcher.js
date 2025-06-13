import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

function ColorSwitcher() {
  const [color, setColor] = useState('#ffffff');
  const colors = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Purple', value: '#800080' },
  ];

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Color Switcher</Card.Title>
        <Form.Group>
          <Form.Label>Select a color:</Form.Label>
          <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
            {colors.map((c) => (
              <option key={c.value} value={c.value}>{c.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <div
          className="mt-3"
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            border: '1px solid #ddd'
          }}
        />
      </Card.Body>
    </Card>
  );
}

export default ColorSwitcher;