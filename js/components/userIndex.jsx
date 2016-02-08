import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3>Manage Characters</h3>
            <div id='content'>
              Manage User content.
            </div>
            <h3>Manage Spells</h3>
            <div>
              Manage Spells content.
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
});
