import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsMultiline = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols responsive="multiline is-mobile">
      <Col size="one-quarter">
        <Notification color="info" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="success" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="warning" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="danger" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="half">
        <Notification color="info" style={alignCenter}><code>is-half</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="success" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="warning" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col size="one-quarter">
        <Notification color="danger" style={alignCenter}><code>is-one-quarter</code></Notification>
      </Col>
      <Col>
        <Notification color="info" style={alignCenter}>Auto</Notification>
      </Col>
    </Cols>
  );
};

export default ColsMultiline;
