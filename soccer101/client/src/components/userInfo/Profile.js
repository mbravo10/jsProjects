import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Jumbotron,
  Alert,
} from "react-bootstrap";
import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { profile } from "../../actions/auth";

export function Profile({ profile, isAuthenticated }) {
  const [formData, setFormData] = useState({
    bio: "",
    teams: "",
  });

  const { bio, teams } = formData;

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(teams);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    profile(bio, teams);
  };

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={5}>
              <h1>Create a user profile</h1>
              <Alert variant="info">
                Create a profile to describe who you are! ⚽️ 🏟
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
                    type="text"
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { profile })(Profile);
