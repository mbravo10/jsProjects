import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Jumbotron,
  Alert,
  Modal,
} from "react-bootstrap";
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { profile, deleteProfile } from "../../actions/auth";

export function Profile({ profile, deleteProfile }) {
  const [formData, setFormData] = useState({
    bio: "",
    teams: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { bio, teams } = formData;

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    profile(bio, teams);
  };

  const onDelete = async (e) => {
    e.preventDefault();
    deleteProfile();
  };

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={5}>
              <h1>Edit or Create a user profile</h1>
              <Alert variant="info">
                Create or Edit a profile to describe who you are! ⚽️ 🏟
              </Alert>
              <Link to="/signUp">
                <Button>Sign Up</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBio">
                  <Form.Label>Short Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter a short bio"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Group controlId="formTeams">
                  <Form.Label>Favorite teams</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place your teams"
                    name="teams"
                    value={teams}
                    onChange={onChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
              </Form>
              <br />

              <Button variant="danger" block onClick={handleShow}>
                Delete profile and user
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleClose();
                      onDelete(e);
                    }}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { profile, deleteProfile })(Profile);
