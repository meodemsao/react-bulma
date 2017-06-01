import React from 'react';
import {
  Content,
  Delete,
  Message,
  MessageHeader,
  MessageBody,
  Notification,
  Tag
} from 'reactbulma';

export const DeleteExample = () => {
  return (
    <div>
      <Content>
        <p>
          Bulma uses it for the
          {' '}
          <a href="/documentation/elements/tag/">tags</a>, the
          {' '}
          <a href="/documentation/elements/notification/">notifications</a>, and the
          {' '}
          <a href="/documentation/components/message/">messages</a>:
        </p>
      </Content>
      <div className="block">
        <Tag color="success">
          Hello world
          <Delete />
        </Tag>
      </div>
      <Notification color="danger">
        <Delete />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Notification>
      <Message color="info">
        <MessageHeader>
          Info
          <Delete />
        </MessageHeader>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </MessageBody>
      </Message>
    </div>
  );
};

export default DeleteExample;
