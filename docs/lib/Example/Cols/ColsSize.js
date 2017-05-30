import React from 'react';
import { Col, Cols, Notification } from 'reactbulma';

export const ColsSize = () => {
  let alignCenter = { textAlign: 'center', paddingLeft: 0, paddingRight: 0 };
  return (
    <div>
      <Cols>
        <Col size="three-quarters">
          <Notification color="info" style={alignCenter}><code>is-three-quarters</code></Notification>
        </Col>
        <Col>
          <Notification color="warning" style={alignCenter}>Auto</Notification>
        </Col>
        <Col>
          <Notification color="danger" style={alignCenter}>Auto</Notification>
        </Col>
      </Cols>
      <Cols>
        <Col size="two-thirds">
          <Notification color="info" style={alignCenter}><code>is-two-thirds</code></Notification>
        </Col>
        <Col>
          <Notification color="warning" style={alignCenter}>Auto</Notification>
        </Col>
        <Col>
          <Notification color="danger" style={alignCenter}>Auto</Notification>
        </Col>
      </Cols>
      <Cols>
        <Col size="half">
          <Notification color="info" style={alignCenter}><code>is-half</code></Notification>
        </Col>
        <Col>
          <Notification color="warning" style={alignCenter}>Auto</Notification>
        </Col>
        <Col>
          <Notification color="danger" style={alignCenter}>Auto</Notification>
        </Col>
      </Cols>
      <Cols>
        <Col size="one-thirds">
          <Notification color="info" style={alignCenter}><code>is-one-thirds</code></Notification>
        </Col>
        <Col>
          <Notification color="warning" style={alignCenter}>Auto</Notification>
        </Col>
        <Col>
          <Notification color="danger" style={alignCenter}>Auto</Notification>
        </Col>
      </Cols>
      <Cols>
        <Col size="one-quarter">
          <Notification color="info" style={alignCenter}><code>one-quarter</code></Notification>
        </Col>
        <Col>
          <Notification color="warning" style={alignCenter}>Auto</Notification>
        </Col>
        <Col>
          <Notification color="danger" style={alignCenter}>Auto</Notification>
        </Col>
      </Cols>
    </div>
  );
};

export default ColsSize;
