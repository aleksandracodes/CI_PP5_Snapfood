import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/SmallMenuContainer.module.css";
import LikeIcon from "../assets/unlike.png";

/*
  Small menu with links to create a post, 
  see liked post and posts by other users the user is following
*/
const LikeFeedAddPost = () => {
  return (
    <Container
      className={`${appStyles.Content} ${styles.CollapsedColumn} mb-2 ${styles.LikeFeedAddDisplay}`}
    >
      <Link to="/posts/create">
        <i className="fa-regular fa-plus fa-fw"></i>
        <p className={styles.Link}>Add post</p>
      </Link>
      <Link to="/liked">
        <img
          src={LikeIcon}
          className={appStyles.LikeIcon}
          alt="Like hand"
          height="30"
          width="30"
        />
        <p className={styles.Link}>Liked posts</p>
      </Link>
      <Link to="/feed">
        <i className="fa-solid fa-rss fa-fw"></i>
        <p className={styles.Link}>Feed</p>
      </Link>
    </Container>
  );
};

export default LikeFeedAddPost;
