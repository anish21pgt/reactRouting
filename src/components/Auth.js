import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    authenticate();
    navigate("/");
  };

  const onSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header />
      <div style={{ width: "300px", margin: "auto", textAlign: "center", marginTop: "200px" }}>
        <h2>User Login</h2>
        <div className="p-2"></div>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <div className="p-3"></div>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="p-2"></div>
          <Button variant="primary" onClick={onClick} style={{ width: "100px" }}>
            Log In
          </Button>
        </Form>
        <div className="p-3"></div>
        <p>
          Not a registered user?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={onSignUpClick}>
            Sign Up
          </span>
        </p>
      </div>
      <div className="p-5"></div>
      <div className="p-5"></div>
      <div className="p-5"></div>
      <Footer />
    </>
  );
};


