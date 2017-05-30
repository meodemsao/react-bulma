import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsNesting = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <Cols>
      <Col>
        <Notification color="info" style={alignCenter}>First column</Notification>
        <Cols responsive="mobile">
          <Col>
            <Notification color="info" style={alignCenter}>First nested column</Notification>
          </Col>
          <Col>
            <Notification color="info" style={alignCenter}>Second nested column</Notification>
          </Col>
        </Cols>
      </Col>
      <Col>
        <Notification color="danger" style={alignCenter}>Second column</Notification>
        <Cols responsive="mobile">
          <Col size="half">
            <Notification color="danger" style={alignCenter}>50%</Notification>
          </Col>
          <Col>
            <Notification color="danger" style={alignCenter}>Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger" style={alignCenter}>Auto</Notification>
          </Col>
        </Cols>
      </Col>
    </Cols>
  );
};

export default ColsNesting;
