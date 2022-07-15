import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Upload from "../../assets/upload-image.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";

function PostCreateForm() {
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" className={appStyles.Input} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control 
            as="select"
            name="category"
            className={appStyles.Input}
        >
          <option>Select type of cousine</option>
          <option value="spanish">Spanish</option>
          <option value="polish">Polish</option>
          <option value="greek">Greek</option>
          <option value="italian">Italian</option>
          <option value="turkish">Turkish</option>
          <option value="french">French</option>
          <option value="moroccan">Moroccan</option>
          <option value="british">British</option>
          <option value="german">German</option>
          <option value="austrian">Austrian</option>
          <option value="lebanese">Lebanese</option>
          <option value="caribbean">Caribbean</option>
          <option value="indian">Indian</option>
          <option value="thai">Thai</option>
          <option value="japanese">Japanese</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          <option value="american">American</option>
          <option value="other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          name="description"
          className={appStyles.Input}
        />
      </Form.Group>

      <Button className={`my-3 ${appStyles.button}`} type="submit">
        Create
      </Button>

      <Button className={`${appStyles.button} mx-3`} onClick={() => {}}>
        Cancel
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col md={7} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 p-0 p-md-2" md={5} lg={4}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                    <img src={Upload} alt="Upload image" />
              </Form.Label>
            </Form.Group>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
