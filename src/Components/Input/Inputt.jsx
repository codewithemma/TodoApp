import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Inputt = ({ handleInputChange, handleSubmit, value }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Add a task.."
        value={value}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleInputChange}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={handleSubmit}
      >
        Add
      </Button>
    </InputGroup>
  );
};

export default Inputt;
