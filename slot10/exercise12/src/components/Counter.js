import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        <Card.Text>Current count: {count}</Card.Text>
        <Button variant="primary" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Counter;