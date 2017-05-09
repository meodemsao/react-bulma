import React from 'react';
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

export default class MessagePage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Message</Title>
        <Subtitle tag="h2">Colored message blocks, to emphasize part of your page</Subtitle>
        <hr />
        <Cols>
          <Col size="half">
            <Message>
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
            <Message color="dark">
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
            <Message color="primary">
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
            <Message color="info">
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
            <Message color="warning">
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
            <Message color="danger">
              <MessageHeader>
                <p>Hello World</p>
                <Delete />
              </MessageHeader>
              <MessageBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </MessageBody>
            </Message>
          </Col>
          <Col size="half">

          </Col>
        </Cols>
      </Container>
    )
  }
}