import React, { useState } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
          />
        </Form.Group>
        <Button variant="primary" onClick={addTodo} className="mb-3">
          Add Todo
        </Button>

        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              {todo}
              <Button variant="outline-danger" size="sm" onClick={() => deleteTodo(index)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TodoList;