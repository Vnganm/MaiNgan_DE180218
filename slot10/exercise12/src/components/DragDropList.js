import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (index) => {
    if (draggingItem === null) return;
    
    const draggedItem = items[draggingItem];
    const newItems = items.filter((_, i) => i !== draggingItem);
    newItems.splice(index, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Drag and Drop List</Card.Title>
        <Card.Text className="text-muted mb-3">Drag items to reorder</Card.Text>
        
        <ListGroup>
          {items.map((item, index) => (
            <ListGroup.Item
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={() => handleDragOver(index)}
              onDragEnd={handleDragEnd}
              style={{
                backgroundColor: draggingItem === index ? '#f8f9fa' : 'white',
                cursor: 'move',
              }}
            >
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default DragDropList;