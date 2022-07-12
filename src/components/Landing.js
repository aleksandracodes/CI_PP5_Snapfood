import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import NavLink from "react-router-dom/NavLink";
import landingImage from "../assets/landing-page-image.png";
import styles from "../styles/Landing.module.css";
import appStyles from "../App.module.css";

const Landing = () => {
  return (
    <Row className="text-center">
      <Col sm={12}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1 className="mb-4">SnapFood - Get started</h1>
              </Card.Title>
              <Card.Text className="font-weight-bold">
                SnapFood is Food Photo Sharing Portal. If you’re looking for an
                inspiration for your next meal, you’re in the right place.
                <br />
                <br />
                Join our community, find ideas and become an inspiration for
                someone else!
              </Card.Text>
            </Card.Body>
            <img
              src={landingImage}
              className={styles.LandingImage}
              alt="Person photographing a plate with food"
            />
            <Card.Body className="mb-3">
              <NavLink to="/signup">
                <Button className={appStyles.button}> Happy to join</Button>
              </NavLink>
              <NavLink to="/signin">
                <Button className={appStyles.button}>
                  I’m already a member, log me in!
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
  );
};

export default Landing;
