import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Standings from "./components/Standings";
import Forum from "./components/Forum";
import Login from "./components/userInfo/Login";
import Register from "./components/userInfo/Register";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/styles/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Alert />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/teams" component={Teams} />
          <Route path="/standings" component={Standings} />
          <Route path="/discussion" component={Forum} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
