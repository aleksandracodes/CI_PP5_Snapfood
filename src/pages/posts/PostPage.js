import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]); // run code every time the post id in the url changes

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
        <Post {...post.results[0]} setPosts={setPost} postPage />
          <Container className={appStyles.Content}>Comments</Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
