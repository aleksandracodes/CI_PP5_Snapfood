import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/LogInSignUpForm.module.css";
import appStyles from "../../App.module.css";
import { Alert, Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value, //key is an input field name, value is the value entered by the user
    });
  };

  /* 
    Handle submitted in the form data on signing up. Redirect to log in page.
  */
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Sign up</h1>

          <Form onSubmit={handleSubmit}>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" className={styles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="username">
              <Form.Text id="passwordHelpBlock" muted>
                Your username must be 1-10 characters long.
              </Form.Text>
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Your username"
                name="username"
                maxlength="10"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" className={styles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" className={styles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" className={styles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              className={`my-3 ${appStyles.button}`}
              type="submit"
              onMouseDown={(e) => e.preventDefault()}
            >
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
