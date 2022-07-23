import React from "react";
import styles from "../../styles/Profile.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";

const Profile = (props) => {
  const { profile, imageSize = 40 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div className={`my-3 d-flex align-items-center ${styles.ProfilesDisplaySmall}`}>
      <div>
        <Link to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div>
        <Link to={`/profiles/${id}`}>
          <strong>{owner}</strong>
        </Link>
      </div>

      <div className={`${styles.FollowButtonsRemove} ml-auto`}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button className={`${styles.Button} ${styles.ButtonFollow}`} onClick={() => {}}>
              follow
            </Button>
          ) : (
            <Button className={`${styles.Button} ${styles.ButtonUnfollow}`} onClick={() => {}}>
              unfollow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
