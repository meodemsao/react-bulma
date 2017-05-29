import React, { Component } from 'react';
import { Notification, Delete } from 'reactbulma';

export default class NotificationPage extends Component {
  render() {
    return (
      <div>
        <Notification>
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <Notification color="primary">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <Notification color="info">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <Notification color="success">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <Notification color="warning">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
        <Notification color="danger">
          <Delete />
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Notification>
      </div>
    );
  }
}
