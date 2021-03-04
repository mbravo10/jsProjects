import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => err)
  });

  return (
      <Jumbotron>
      <h1>Hello, world!</h1>
      <p>{apiResponse}</p>
      </Jumbotron>
  );
}

export default App;
