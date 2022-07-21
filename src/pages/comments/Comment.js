import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_on, content } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      <Media>
        <Link to={`/profiles/${profile_id}`} className="my-3">
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center mb-4">
          <div className={styles.CommentBox}>
            <span className={styles.OwnerName}>{owner}</span>
            <span className={styles.Date}> | {updated_on}</span>
            <span className={styles.DropdownDots}>
            {is_owner && (
              <DropdownMenu handleEdit={() => {}} handleDelete={() => {}} />
              )}
            </span>
            <p className="pr-2 pt-2">{content}</p>
          </div>
        </Media.Body>

      </Media>
    </div>
  );
};

export default Comment;
