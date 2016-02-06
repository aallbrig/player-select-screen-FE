import React from 'react';
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, History } from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap';
import SelectCharacter from './selectCharacter.jsx';
import Home from './home.jsx';

const App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div id='nav'>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/select_character'>Select Character</Link></li>
              </ul>
            </div>
            <div id='content'>
              {this.props.children}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
});

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path='select_character' component={SelectCharacter}/>
    </Route>
  </Router>
),  document.getElementById('app'));

export default App;