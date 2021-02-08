import React, { useState, useEffect } from 'react';
import { Card, CardGroup, Container, Col, Button } from 'react-bootstrap';
import weatherIcon from './images/weather.jpg';
import axios from 'axios';

function Weather(){
    const [weather, setWeather ] = useState('');
    const [city, setCity ] = useState('');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getWeather = useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=052e1da49244f19c526d173950e25c8f&units=imperial')
        .then(res => res.json())
        .then(
            (res2) =>{
                setIsLoaded(true);
                setWeather(res2.main.temp);
                setCity(res2.name);
            },
            (err) => {
                setIsLoaded(true);
                setError(err);
            }
            )
    })

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
                <Card.Text>{city}</Card.Text>
                <Button variant="primary" onClick={getWeather}>Get Current Weather</Button>
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