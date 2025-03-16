import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSingIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className=" mt-5">
      <h1 className="text-center">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2 mt-5">
          <Button variant="outline-success" size="lg" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <div className="d-grid gap-2 mt-2">
        <Button variant="outline-warning" size="lg" onClick={handleSingIn}>
          Login with google
        </Button>
        <Button
          variant="outline-warning"
          size="lg"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </div>
      {error && (
        <Alert className="mt-5" key="alert" variant="danger">
          {error}
        </Alert>
      )}
    </Container>
  );
}

export default Login;
