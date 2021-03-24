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
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <Fragment>
      <Container>
        <Jumbotron fluid>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm={5}>
                <h1>Login to your account</h1>
                <h6>
                  In order to see the posts and standings, make sure you login.
                </h6>
                <Alert variant="info">
                  If you don't have an account, create one
                </Alert>
                <Link to="/signUp">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <Form onSubmit={onSubmit}>
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
