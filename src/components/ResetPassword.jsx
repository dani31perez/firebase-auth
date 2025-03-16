import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";

function ResetPassword() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Correo de restablecimiento enviado");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container className=" mt-5">
      <h1 className="text-center">Reset Password</h1>
      <Form onSubmit={handleReset}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2 mt-5">
          <Button variant="outline-warning" size="lg" type="submit">
            Register
          </Button>
        </div>
      </Form>
      {error && (
        <Alert className="mt-5" key="alert" variant="danger">
          {error}
        </Alert>
      )}
    </Container>
  );
}

export default ResetPassword;
