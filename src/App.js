import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FilmList from "./components/FilmList";
import Jumbotron from "./components/Jumbotron";
import PeopleList from "./components/PeopleList";
import Detail from "./components/Detail";
import PeopleDetails from "./components/PeopleDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Jumbotron />
          <Link to="/" className="btn btn-primary mx-3">
            Go Home
          </Link>
          <Link to="/films" className="btn btn-primary mx-3">
            List Films
          </Link>
          <Link to="/people" className="btn btn-primary mx-3">
            List People
          </Link>
          <Switch>
            <Route exact path="/films" component={FilmList} />
            <Route exact path="/people" component={PeopleList} />
            <Route exact path="/films/:id" component={Detail} />
            <Route exact path="/people/:id" component={PeopleDetails} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
