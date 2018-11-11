import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import UserPage from './components/UserPage';
import FavoritesPage from './components/FavoritesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/:id' component={UserPage} />
        <Route exact path='/users/:id/userspets' component={FavoritesPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
