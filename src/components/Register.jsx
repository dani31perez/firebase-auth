import React from "react";
import { Button, Form, Container } from "react-bootstrap";

function Register() {
  return (
    <Container className=" mt-5">
      <h1 className="text-center">Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2 mt-5">
          <Button variant="outline-success" size="lg">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;
