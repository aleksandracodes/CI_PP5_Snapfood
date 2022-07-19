import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoResultsImage from "../../assets/no-results-found.png";
import LikeFeedAddPost from "../../components/LikeFeedAddPost";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function MainPostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={4}>
            <LikeFeedAddPost />

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

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResultsImage} width={20} height={20} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}

        </Col>
      </Row>
    </Container>
  );
}

export default MainPostsPage;
