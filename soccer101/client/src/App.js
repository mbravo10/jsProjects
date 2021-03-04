import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar';
import Teams from './components/Teams';
import Home from './components/Home';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => err)
  });

  return (
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
            <Route path="/teams" component={Teams}/>
        </Switch>
      </Router>
  );
}

export default App;
