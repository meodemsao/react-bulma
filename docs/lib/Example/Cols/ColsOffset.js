import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsOffset = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <div>
      <Cols responsive="mobile">
        <Col size="half" offset="one-quarter">
          <Notification color="info" style={alignCenter}>
            <code>is-half</code><br />
            <code>is-offset-one-quarter</code>
          </Notification>
        </Col>
      </Cols>
      <Cols responsive="mobile">
        <Col size="4" offset="8">
          <Notification color="info" style={alignCenter}>
            <code>is-4</code><br />
            <code>is-offset-8</code>
          </Notification>
        </Col>
      </Cols>
      <Cols responsive="mobile">
        <Col size="11" offset="1">
          <Notification color="info" style={alignCenter}>
            <code>is-11</code><br />
            <code>is-offset-1</code>
          </Notification>
        </Col>
      </Cols>
    </div>
  );
};

export default ColsOffset;
