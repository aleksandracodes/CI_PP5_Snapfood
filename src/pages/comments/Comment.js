import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";
import FeedbackMsg from "../../components/FeedbackMsg";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_number: prevPost.results[0].comments_number - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <div>
      {showAlert &&
        <FeedbackMsg variant="info" message="Comment has been updated" />
       }
      
      <Media>
        <Link to={`/profiles/${profile_id}`} className="my-3">
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center mb-4">
          <div className={styles.CommentBox}>
            <span className={styles.OwnerName}>{owner}</span>
            <span className={styles.Date}> | {updated_on}</span>
            <span className={styles.DropdownDots}>
              {is_owner && !showEditForm && (
                <DropdownMenu
                  handleEdit={() => setShowEditForm(true)}
                  handleDelete={handleDelete}
                />
              )}
            </span>
            {showEditForm ? (
              <CommentEditForm
                id={id}
                profile_id={profile_id}
                content={content}
                profileImage={profile_image}
                setComments={setComments}
                setShowEditForm={setShowEditForm}
                setShowAlert={setShowAlert}
              />
            ) : (
              <p className="pr-2 pt-2">{content}</p>
            )}
          </div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
