import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/LogInSignUpForm.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

const LogInForm = () => {
  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Log in</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Your username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <Button className={`my-3 ${appStyles.button}`} type="submit">
              Log in!
            </Button>

            <Link className={styles.Link} to="/signup">
              Don't have an account? Click <span>here </span>to sign up.
            </Link>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default LogInForm;
