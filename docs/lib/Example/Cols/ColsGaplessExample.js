import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsGaplessExample = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols responsive="gapless">
      <Col><Notification color="info" style={alignCenter}>First column</Notification></Col>
      <Col><Notification color="info" style={alignCenter}>Second column</Notification></Col>
      <Col><Notification color="info" style={alignCenter}>Third column</Notification></Col>
      <Col><Notification color="info" style={alignCenter}>Fourth column</Notification></Col>
    </Cols>
  );
};

export default ColsGaplessExample;
