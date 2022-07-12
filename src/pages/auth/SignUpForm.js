import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/LogInSignUpForm.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";

const SignUpForm = () => {
  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Sign up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1"/>
            </Form.Group>
  
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Confirm password" name="password2"/>
            </Form.Group>

            <Button className={`my-3 ${appStyles.button}`} type="submit">
              Sign up!
            </Button>
            <Link className={styles.Link} to="/login">
            Already a member? Click <span>here </span>to log in.
          </Link>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
