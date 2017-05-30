import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsMobile = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols responsive="mobile">
      <Col><Notification color="info" style={alignCenter}>1</Notification></Col>
      <Col><Notification color="success" style={alignCenter}>2</Notification></Col>
      <Col><Notification color="warning" style={alignCenter}>3</Notification></Col>
      <Col><Notification color="danger" style={alignCenter}>4</Notification></Col>
    </Cols>
  );
};

export default ColsMobile;
