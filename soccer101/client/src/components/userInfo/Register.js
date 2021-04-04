import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Jumbotron,
  Alert,
} from "react-bootstrap";
import { connect } from "react-redux";
import React, { useState, Fragment } from "react";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

function Register({ register, isAuthenticated }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    register({ name, email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/discussion" />;
  }

  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={5}>
              <h1>Sign up</h1>
              <Alert variant="info">Happy to have you here 🥳</Alert>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={8}>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
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
    </Fragment>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
