import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleClearCompleted = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>To-Do List</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newTask">
              <Form.Control
                type="text"
                placeholder="Enter new task"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                required
              />
            </Form.Group><br/>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
          <ListGroup className="mt-4">
            {tasks.map((task, index) => (
              <ListGroup.Item
                key={index}
                className={task.completed ? "text-decoration-line-through" : ""}
              >
                {task.text}
                <Button
                  variant={task.completed ? "secondary" : "success"}
                  className="float-end"
                  onClick={() => handleComplete(index)}
                >
                  {task.completed ? "Completed" : "Complete"}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            variant="danger"
            className="mt-4"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
