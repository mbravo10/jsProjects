import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Form, Button   } from 'react-bootstrap';

function SignIn(props){
    return(
        <Container >
        <Form>
            <Col xs={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
            
           
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
            

            
            <Button variant="primary" type="submit">
                Sign In
            </Button>
            </Col>

        </Form>
        </Container>
    )
}

export default SignIn;