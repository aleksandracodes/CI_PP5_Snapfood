import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments, setShowAlert } = props;
  const [formContent, setFormContent] = useState(content);

  /* 
    Handles changes to form input
  */
  const handleChange = (e) => {
    setFormContent(e.target.value);
  };

  /* 
    Handles the edit comment form submission
    Updates displayed comment with date set to 'now'
    Displays confirmation alert to the user 
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_on: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
      setShowAlert(true);
    } catch (err) {}
  };

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>

      <div className="text-right">
        <Button
          className={styles.CommentsButton}
          disabled={!content.trim()}
          onMouseDown={(e) => e.preventDefault()}
          type="submit"
        >
          Update
        </Button>
        <Button
          className={styles.CommentsButton}
          onClick={() => {
            setShowEditForm(false);
            setShowAlert(false);
          }}
          onMouseDown={(e) => e.preventDefault()}
          type="button"
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
