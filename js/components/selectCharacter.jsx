import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Select Character!</h1>
            <div id='content'>
              Please select character!
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
});
