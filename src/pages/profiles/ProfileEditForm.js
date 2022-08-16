import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import editButtonStyles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import FeedbackMsg from "../../components/FeedbackMsg";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    description: "",
    image: "",
  });
  const { name, description, image } = profileData;

  const [errors, setErrors] = useState({});

  const [showAlert, setShowAlert] = useState(false);

  /*
    Handles the edit of user profile information
    Makes a request to the API based on profile's id
  */
  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, description, image } = data;
          setProfileData({ name, description, image });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  /* 
    Handles changes to the profile form input fields
  */
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Handles the profile form submission
    Displays a feedback message to the user on successful submission
    Redirects the user to the profile page after a short delay
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      setShowAlert(true);
      setTimeout(function () {
        history.goBack();
      }, 2500);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        {showAlert && (
          <FeedbackMsg
            variant="info"
            message="Your profile has been updated. Taking you back to your profile's page..."
          />
        )}
        <Form.Label className="font-weight-bold">
          Profile description
        </Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={handleChange}
          name="description"
          rows={7}
          className={appStyles.Input}
          aria-label="profile description"
        />
      </Form.Group>

      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`my-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Save
      </Button>

      <Button
        className={`mx-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="d-none d-md-block p-0 p-md-2 text-center" md={8} lg={8}>
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Col className="py-2 pb-4 p-md-2 text-center" md={4} lg={4}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image className={appStyles.Image} src={image} alt="your uploaded profile picture" rounded />
                </figure>
              )}

              <div>
                <Form.Label
                  className={`${appStyles.button} ${editButtonStyles.ButtonChangeImage} btn my-auto mb-sm-4`}
                  htmlFor="image-upload"
                >
                  Change your picture
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                className="d-none"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>

            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
