import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Toggle Visibility</Card.Title>
        <Button 
          variant={isVisible ? 'danger' : 'success'}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </Button>
        {isVisible && (
          <Card.Text className="mt-2">This text is now visible!</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default ToggleVisibility;