import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import UserPage from './components/UserPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users/:id' component={UserPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
