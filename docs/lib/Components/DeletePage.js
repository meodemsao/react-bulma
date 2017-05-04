import React from 'react';
import {
  Container,
  Cols,
  Col,
  Content,
  Tag,
  Title,
  Subtitle,
  Notification,
  Message,
  MessageHeader,
  MessageBody,
  Delete,
  Icon
} from 'reactbulma';

export default class DeletePage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Delete</Title>
        <Subtitle tag="h2">
          A versatile <strong>delete</strong> cross
        </Subtitle>
        <hr />
        <Content>
          <p>
            The <code>.delete</code> element is a stand-alone element that can be used in different contexts.
          </p>
        </Content>
        <Cols>
          <Col>
            <Content>
              <p>
                On its own, it's a simple circle with a cross:
              </p>
              <Delete />
            </Content>
          </Col>
          <Col>

          </Col>
        </Cols>
        <Cols>
          <Col>
            <Content>
              <p>
                It comes in <strong>4 sizes</strong>:
              </p>
              <Delete size="small" />
              <Delete />
              <Delete size="medium" />
              <Delete size="large" />
            </Content>
          </Col>
          <Col>

          </Col>
        </Cols>
        <Cols>
          <Col>
            <Content>
              <p>
                Bulma uses it for the <a href="/documentation/elements/tag/">tags</a>, the <a
                href="/documentation/elements/notification/">notifications</a>, and the <a
                href="/documentation/components/message/">messages</a>:
              </p>
              <Tag color="success">
                Hello world
                <Delete />
              </Tag>
              <Notification color="danger">
                <Delete />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </Notification>
              <Message color="info">
                <MessageHeader>
                  Info
                  <Delete />
                </MessageHeader>
                <MessageBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                  felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et
                  sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                  vehicula et sem eget, facilisis sodales sem.
                </MessageBody>
              </Message>
            </Content>
          </Col>
          <Col></Col>
        </Cols>
      </Container>
    )
  }
}