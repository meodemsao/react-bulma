import React from 'react';
import {PrismCode} from 'react-prism';
import {
  Cols,
  Col,
  Notification,
  Container,
  Content,
  Title,
  Subtitle,
  Message,
  MessageHeader,
  MessageBody,
  Level,
  Field,
  Control,
  Input,
  Button,
  Delete
} from 'reactbulma';

import MessageExample from '../Example/MessageExample';
const MessageExampleSource = require('!!raw!../Example/MessageExample');

export default class MessagePage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Message</Title>
        <Subtitle tag="h2">Colored message blocks, to emphasize part of your page</Subtitle>
        <hr />
        <Cols>
          <Col size="half">
            <MessageExample />
            <MessageExample color="dark" />
            <MessageExample color="primary" />
            <MessageExample color="info" />
            <MessageExample color="warning" />
            <MessageExample color="danger" />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                { MessageExampleSource }
              </PrismCode>
            </pre>
          </Col>
        </Cols>
      </Container>
    )
  }
}