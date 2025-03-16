import React from "react";
import { Button, Container } from "react-bootstrap";

function DashBoard() {
  return (
    <Container className="text-center my-5">
      <p  style={{fontSize: "70px"}}> DashBoard</p>
      <p className="fs-1 mb-5"> Welcome</p>
      <Button variant="outline-danger" size="lg">
        Logout
      </Button>
    </Container>
  );
}

export default DashBoard;
