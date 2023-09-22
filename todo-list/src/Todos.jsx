import React, { useState } from "react";
import "./Todos.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Todos = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    if (value.trim() !== "") {
        setTodo([...todo, { text: value, isDone: false }]);
        setValue(""); 
      } 
  };

  const handleDelete = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };
  const handleClearList = () => {
    setTodo([]); 
  };

  const handleUpdate = (index, newValue) => {
    const newList = [...todo];
    newList[index] = newValue;
    setTodo(newList);
  };

  const handleDone = (index) => {
    const newList = [...todo];
    newList[index].isDone = !newList[index].isDone;
    setTodo(newList);
  };

  return (
    
    <div className="everything">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Personal Planner</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Calendar</Nav.Link>
            <Nav.Link href="#features">Events</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <h1 className="header">To-Do List</h1>
      
      
      <input className='input-field' placeholder="Type in your things to do" value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
      <div>
      <button className="add-to-list-button" onClick={handleClick}>Add to List</button>
      <button className="clear-list-button" onClick={() => handleClearList()}>Clear List</button>
        </div>  
        <ol>
          {todo.map((todoItem, index) => (
              <div key={index} className="list-item">
              <li className={todoItem.isDone ? "list-numbers completed" : "list-numbers"}>
                <input value={todoItem.text} onChange={(e) => handleUpdate(index, e.target.value)} />
                <button className="delete-button" onClick={() => handleDone(index)}>Done</button>
                <button className="done-button" onClick={() => handleDelete(index)}>x</button>
              </li>
            </div>
          ))}
        </ol>
      
          
      </div>
    </div>
  );
};

export default Todos;
