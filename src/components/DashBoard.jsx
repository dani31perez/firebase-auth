import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function DashBoard() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="text-center my-5">
      <p style={{ fontSize: "70px" }}> DashBoard</p>
      <p className="fs-1 mb-5"> Welcome {user?.email}!</p>
      <Button variant="outline-danger" size="lg" onClick={handleLogout}>
        Logout
      </Button>
      {error && (
        <Alert className="mt-5" key="alert" variant="danger">
          {error}
        </Alert>
      )}
    </Container>
  );
}

export default DashBoard;
