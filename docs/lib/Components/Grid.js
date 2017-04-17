import React from 'react';
import {Notification, Icon, Tile} from 'reactbulma';

export default class Grid extends React.Component {
  render() {
    return (
      <div>
        <Notification type="primary" content="helllloooo somethings" />
        <Icon name="home" size="large" />
        <Tile contextual="ancestor">
          <Tile size="8" className="box">
            Hello
          </Tile>
        </Tile>
      </div>
    )
  }
}
