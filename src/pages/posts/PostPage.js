import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

function PostPage() {
  // Add your logic here

  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={4}>
          <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Like, feed, add</Container>

          <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Top 3 users</Container>

          <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Post category</Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <p>Post component</p>
          <Container className={appStyles.Content}>Comments</Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
