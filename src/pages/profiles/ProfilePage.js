import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import columnStyles from "../../styles/SmallMenuContainer.module.css";
import PopularProfiles from "./PopularProfiles";
import LikeFeedAddPost from "../../components/LikeFeedAddPost";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false); 
  const currentUser = useCurrentUser();
  const {id} = useParams();
  const setProfileData = useSetProfileData(); // update the page profile data
  const {pageProfile} = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>

        <Col lg={6}>
          <h3 className="m-3">{profile?.owner}</h3>
          <Row className="justify-content-center">
                <Col xs={3} className="my-3">
                    <div>Followers</div>
                    <div>{profile?.followers_number}</div>
                    </Col>
                    <Col xs={3} className="my-3">
                    <div>Following</div>
                    <div>{profile?.following_number}</div>
                    </Col>
                    <Col xs={3} className="my-3">
                    <div>Posts</div>
                    <div>{profile?.posts_number}</div>
                    </Col>
          </Row>
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