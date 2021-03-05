import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar';
import Teams from './components/Teams';
import Home from './components/Home';
import Standings from './components/Standings';
import Forum from './components/Forum';

function App() {

  return (
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route path="/teams" component={Teams}/>
          <Route path="/standings" component={Standings}/>
          <Route path="/discussion" component={Forum}/>
        </Switch>
      </Router>
  );
}

export default App;
