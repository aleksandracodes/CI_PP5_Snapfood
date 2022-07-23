import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import styles from "../../styles/SmallMenuContainer.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count" // descending order meaning the most followed user will be on the top
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container className={`${appStyles.Content} font-weight-bold pt-1`}>

      {popularProfiles.results.length ? (
        <>
          <p>Top Users</p>
          <div className={styles.UsersDisplay}>
            {popularProfiles.results.slice(0, 3).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
            ))}
          </div> 
        </>
      ) : (
        <Asset spinner />
      )}
    
    </Container>
  );
};

export default PopularProfiles;
