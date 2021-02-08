import React, { useState, useEffect } from 'react';
import { Card, CardGroup, Container, Col, Button } from 'react-bootstrap';
import weatherIcon from './images/weather.jpg';
import axios from 'axios';

function Weather(){
    const [weather, setWeather ] = useState('');

    return (
        <Container>
            <CardGroup>
            <Card >
            <Col xs={6} md={4}>
            <Card.Img variant="top" src={weatherIcon}/>
            </Col>
            <Card.Body>
                <Card.Title>Current Weather</Card.Title>
                <Card.Text>Weather from the 5 min</Card.Text>
                <Card.Text>{weather}</Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Col xs={6} md={4}>
            <Card.Img variant="top" src={weatherIcon}/>
            </Col>
            <Card.Body>
                <Card.Title>Other Info</Card.Title>
                <Card.Text>Weather from the 5 min</Card.Text>
            </Card.Body>
            </Card>
            </CardGroup>
        </Container>
    )
}
export default Weather;