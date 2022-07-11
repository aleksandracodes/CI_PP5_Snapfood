import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavLink from "react-router-dom/NavLink";

const Landing = () => {
  return (
    <div>
      <Row>
        <Col sm={12}>
        <Card className="text-center">
            <Card.Body>
              <Card.Title>
                <h1>SnapFood - Get started</h1>
              </Card.Title>
              <Card.Text>
                SnapFood is Food Photo Sharing Portal. If you’re looking for an
                inspiration for your next meal, you’re in the right place.
                <br />
                <br />
                Join our community, find ideas and become an inspiration for
                someone else!
              </Card.Text>
            </Card.Body>
            <img src="https://res.cloudinary.com/dgcydxlev/image/upload/v1657316420/istockphoto-1263096919-612x612_muqujg.jpg" style={{ width: '350px' }} alt="Person photographing a plate with food"/>
            <Card.Body>
              <NavLink to="/signup">
                <Button variant="secondary">Happy to join</Button>
              </NavLink>
              <NavLink to="/signin">
                <Button variant="secondary">
                  I’m already a member, log me in!
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
