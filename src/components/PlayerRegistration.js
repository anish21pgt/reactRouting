import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export const PlayerRegistration = () => {
  const navigate = useNavigate();
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
  const [signupPassword, setSignupPassword] = useState("");



  const onSignUpClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <div style={{ width: "300px", margin: "auto", textAlign: "center", marginTop: "200px" }}>

        <h2>Player Tournament Registration</h2>
        <div className="p-2"></div>
        <Form>
          <Form.Group controlId="formSignupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose a username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
          </Form.Group>
          <div className="p-3"></div>
          <Form.Group controlId="formSignupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </Form.Group>
          <div className="p-3"></div>
          <Form.Group controlId="formSignupPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={signupPhoneNumber}
              onChange={(e) => setSignupPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <div className="p-3"></div>
          <Form.Group controlId="formSignupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Choose a password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </Form.Group>
          <div className="p-2"></div>
          <Button variant="primary" onClick={onSignUpClick} style={{ width: "100px" }}>
            Register
          </Button>
        </Form>
        <div className="p-3"></div>

      </div>
      <div className="p-5"></div>
      <Footer />
    </>
  );
};
