import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import columnStyles from "../../styles/SmallMenuContainer.module.css";
import PopularProfiles from "./PopularProfiles";
import LikeFeedAddPost from "../../components/LikeFeedAddPost";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
      setHasLoaded(true);
  }, [])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <p>Image</p>
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Username</h3>
          <p>Number of followers, people following & posts</p>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Follow button</p>
        </Col>
        <Col className="p-3">Profile description</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Container>
      <Row>
        <Col className="pt-2 p-0 g-0" lg={4}>
            <LikeFeedAddPost />

          <Container
            className={`${appStyles.Content} ${columnStyles.CollapsedColumn} mb-2`}
          >
            <PopularProfiles />
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>

    <Container className={appStyles.Content}>
        {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>

        </Col>
      </Row>
    </Container>

  );
}

export default ProfilePage;