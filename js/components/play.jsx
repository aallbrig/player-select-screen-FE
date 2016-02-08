import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default React.createClass({
  render: function () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div id='content'>
              <h3>Play</h3>
              <div>
                This is the area where you modify HP, cast spells,
                manage mana resource (magic, ability, concentration,
                etc).
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
});
