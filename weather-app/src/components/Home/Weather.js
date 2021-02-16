import React, { useState, useEffect } from 'react';
import { Card, CardGroup, Container, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import weatherIcon from './images/weather.jpg';
import axios from 'axios';

function Weather(){
    const [city, setCity] = useState('No city Selected');
   
    function onClickChange(e){
        alert(e.target.value);
        e.preventDefault();
    }


    return (
        <Container>
            <CardGroup>
            <Card>
            <Col xs={6} md={4}>
            <Card.Img variant="top" src={weatherIcon}/>
            </Col>
            <Card.Body>
                <Card.Title>{city}</Card.Title>
                <Card.Text>Weather from the 5 min</Card.Text>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Get Weather"
                aria-label="Weather"
                aria-describedby="basic-addon1"
                />
                </InputGroup>
                <Button variant="primary"
                type="submit" 
                for="basic-addon1" 
                onClick={onClickChange}>Submit</Button>
            </Card.Body>
            </Card>
            </CardGroup>
        </Container>
    )
}
export default Weather;