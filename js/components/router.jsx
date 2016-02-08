import React from 'react';
import {Router, Route, IndexRoute, Link, History } from 'react-router';
import Home from './home.jsx';
import UserIndex from './userIndex.jsx';
import SelectCharacter from './selectCharacter.jsx';
import App from './app.jsx';
import Play from './play.jsx';

export default React.createClass({
  render: function () {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path='play' component={Play}/>
          <Route path='select_character' component={SelectCharacter}/>
          <Route path='manage_user' component={UserIndex}/>
        </Route>
      </Router>
    )
  }
});
