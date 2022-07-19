import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/MainPostsPage.module.css";

function PostsPage() {
  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={4}>
          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            Like, feed, add
          </Container>

          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            Top 3 users
          </Container>

          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            Post category
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
