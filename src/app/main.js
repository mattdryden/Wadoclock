import React, { Component } from 'react';
import './main.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Wadoclock from '../wadoclock';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Wadoclock {...props} />} />
          <Route exact path="/:event/:date" render={(props) => <Wadoclock {...props} event={props.match.params.event} date={props.match.params.date} />} />
        </Switch>
      </Router>
        );
  }
}

export default App;
