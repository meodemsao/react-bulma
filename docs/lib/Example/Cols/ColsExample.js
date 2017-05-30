import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsExample = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols>
      <Col>
        <Notification color="info" style={alignCenter}>
          First column
        </Notification>
      </Col>
      <Col>
        <Notification color="success" style={alignCenter}>
          Second column
        </Notification>
      </Col>
      <Col>
        <Notification color="warning" style={alignCenter}>
          Third column
        </Notification>
      </Col>
      <Col>
        <Notification color="danger" style={alignCenter}>
          Fourth column
        </Notification>
      </Col>
    </Cols>
  );
};

export default ColsExample;
