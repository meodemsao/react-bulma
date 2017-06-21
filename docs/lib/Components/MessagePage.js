import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Cols,
  Col,
  Container,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import MessageExample from '../Example/MessageExample';
const MessageExampleSource = require('!!raw!../Example/MessageExample');

export default class MessagePage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Message</Title>
          <Subtitle>
            Colored message blocks, to emphasize part of your page
          </Subtitle>
          <hr />
          <Cols>
            <Col size="half">
              <MessageExample title="Hello World" />
              <MessageExample color="dark" title="Dark" />
              <MessageExample color="primary" title="Primary" />
              <MessageExample color="info" title="Info" />
              <MessageExample color="warning" title="Warning" />
              <MessageExample color="danger" title="Danger" />
            </Col>
            <Col size="half">
              <pre>
                <PrismCode className="language-jsx">
                  {MessageExampleSource}
                </PrismCode>
              </pre>
            </Col>
          </Cols>
        </Container>
      </Section>
    );
  }
}
