import React from "react";
import NotFound from "../assets/404-page.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";

/*
  Displays a 404 page customised graphic
  and a link to return to the main page
*/
const PageNotFound = () => {
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={12}>
        <Container className={appStyles.Content}>
          <Image className={appStyles.Image} src={NotFound} alt="Page not found image" rounded />
          <h3 className="my-3">Aw snap! This page has not been found</h3>

          <Link to="/">
            <Button className={`${appStyles.button} my-3`}>
              Go to the main page
            </Button>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default PageNotFound;
