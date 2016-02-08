import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Navigation from './navigation.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <Grid fluid style={{backgroundColor: '#222'}}>
          <Grid>
            <div id='nav'>
              <Navigation />
            </div>
          </Grid>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <div id='content'>
                {this.props.children}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
