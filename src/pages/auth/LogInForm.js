import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/LogInSignUpForm.module.css";
import appStyles from "../../App.module.css";
import { Alert, Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function LogInForm() {
  const setCurrentUser = useSetCurrentUser()
  useRedirect("loggedIn");

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
  };

  /* 
    Handle submitted in the form data on logging in. Redirect to home page.
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="text-center">
      <Col className="my-auto offset-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className="mb-4">Log in</h1>

          <Form onSubmit={handleSubmit}>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={`${appStyles.Input} text-center`}
                type="text"
                placeholder="Your username"
                name="username"
                maxLength={10}
                value={username}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.password?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={`${appStyles.Input} text-center`}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}
            <Button
              className={`my-3 ${appStyles.button}`}
              type="submit"
              onMouseDown={(e) => e.preventDefault()}
            >
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
}

export default LogInForm;
