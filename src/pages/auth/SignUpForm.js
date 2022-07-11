import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";

import { Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className="text-center">
    <Col className="my-auto py-2 p-md-2" >
        <Container>
          <h1>Sign up</h1>

            {/* sign up form will go here */}

        </Container>
        <Container className="mt-3">
          <Link to="/login">
            Already a member? Click <span>here</span> to log in.
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;