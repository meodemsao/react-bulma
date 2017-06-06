import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Subtitle,
  Title
} from 'reactbulma';

import NotificationExample from '../Example/NotificationExample';
const NotificationExampleSource = require('!!raw!../Example/NotificationExample');

export default class NotificationPage extends React.Component {
  render() {
    return (
      <Container>
        <Title>Notifications</Title>
        <Subtitle>Bold <strong>notification</strong> blocks, to alert your users of something</Subtitle>
        <hr />
        <Cols>
          <Col>
            <NotificationExample />
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {NotificationExampleSource}
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
      </Container>
    );
  }
}
