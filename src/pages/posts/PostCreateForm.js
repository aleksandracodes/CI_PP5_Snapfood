import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import Upload from "../../assets/upload-image.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  const { title, category, description, image } = postData;
  const imageInput = useRef(null);
  const history = useHistory();

  /* 
    Handles changes to the create form input fields
  */
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  /* 
    Handles change to the file (image) input field
  */
  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(image); // for changing image after adding one
      setPostData({
        ...postData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  /* 
    Handles the create post form submission
    Refreshes the user's access token before making a request to create a post
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /*
    Hold input fields and buttons to create and cancel
  */
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>

        {errors.title?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Control
          type="text"
          name="title"
          className={appStyles.Input}
          value={title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>

        {errors.category?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Control
          as="select"
          name="category"
          className={appStyles.Input}
          value={category}
          onChange={handleChange}
        >
          <option>Select type of cousine</option>
          <option value="Spanish">Spanish</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Greek">Greek</option>
          <option value="Italian">Italian</option>
          <option value="Turkish">Turkish</option>
          <option value="French">French</option>
          <option value="Moroccan">Moroccan</option>
          <option value="British">British</option>
          <option value="German">German</option>
          <option value="Austrian">Austrian</option>
          <option value="Lebanese">Lebanese</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Indian">Indian</option>
          <option value="Thai">Thai</option>
          <option value="Japanese">Japanese</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          className={appStyles.Input}
          value={description}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`my-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Create
      </Button>

      <Button
        className={`${appStyles.button} mx-3`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={7} lg={8} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="pt-2 pb-4 p-0 p-md-2" md={5} lg={4}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} alt="your uploaded image" rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${appStyles.button} ${styles.ButtonChangeImage} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className={`${styles.UploadPicture} d-flex justify-content-center`}
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload a picture"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                className="d-none"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>

            {errors.image?.map((message, idx) => (
              <Alert variant="warning" className={appStyles.Alert} key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
