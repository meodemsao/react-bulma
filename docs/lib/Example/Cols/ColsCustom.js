import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsCustom = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols responsive="mobile">
      <Col size="half-mobile is-one-third-tablet is-one-quarter-desktop">
        <Notification color="info" style={alignCenter}>
          <code>is-half-mobile</code><br />
          <code>is-one-third-tablet</code><br />
          <code>is-one-quarter-desktop</code>
        </Notification>
      </Col>
      <Col><Notification color="success" style={alignCenter}>1</Notification></Col>
      <Col><Notification color="warning" style={alignCenter}>1</Notification></Col>
      <Col><Notification color="success" style={alignCenter}>1</Notification></Col>
      <Col><Notification color="warning" style={alignCenter}>1</Notification></Col>
    </Cols>
  );
};

export default ColsCustom;
