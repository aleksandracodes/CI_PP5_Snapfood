import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing-page-image.png";
import styles from "../styles/Landing.module.css";
import appStyles from "../App.module.css";

const Landing = () => {
  return (
    <>
      <Row className="text-center">
        <Col sm={12}>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">SnapFood - Get started</h1>
                </Card.Title>
                <Card.Text className="font-weight-bold">
                  SnapFood is Food Photo Sharing Portal. If you’re looking for
                  an inspiration for your next meal, you’re in the right place.
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
              <Card.Body>
                <Link to="/signup">
                  <Button className={`${appStyles.button} ${styles.LandingButtonMargin} mb-3`}>
                    Happy to join!
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className={`${appStyles.button} mb-3`}>
                    I’m already a member, log me in!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container>
        <footer className={styles.footer}>
          <div className="float-left">
            <p>Created by Aleksandra H.</p>
          </div>

          <div className="float-right pb-3">
            <a
              href="https://github.com/aleksandracodes/ci_pp5_snapfood/"
              aria-label="Check the website GitHub page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandrahaniok/ "
              aria-label="Visit me on LinkedIn (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Landing;
