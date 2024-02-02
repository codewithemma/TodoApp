import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Inputt from "../Input/Inputt";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
const Cards = () => {
  const [todoList, setTodoList] = useState([]);
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState("");
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  //input event handlers

  // Delete function
  const deleteTodo = (id) => {
    const updatedTodos = [...todoList];
    updatedTodos.splice(id, 1);
    setTodoList(updatedTodos);
  };

  //Submit
  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: todo, complete: false },
      ]);
    } else {
      alert("Input Field cannot be empty...");
    }
    setTodo("");
  };

  //Date
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 my-5 mx-auto">
          {" "}
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Body>
              <Card.Title className="fw-bold heading-2">Todo App</Card.Title>
              <Card.Text className="text-lead">
                {" "}
                {date.toDateString()}
              </Card.Text>
              <Inputt
                handleInputChange={handleChange}
                handleSubmit={addTodo}
                value={todo}
              />
              <>
                {todoList.map((item, id) => {
                  return (
                    <ListGroup key={id}>
                      <ListGroup.Item
                        complete={todo.complete}
                        variant="primary"
                        className="d-flex justify-content-between"
                      >
                        {item.title}
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => deleteTodo(id)}
                          className="text-secondary"
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
