import React from 'react';
import {
  Container,
  Tile,
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

export default class TilesPage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Tiles</Title>
        <Subtitle tag="h2">
          A
          {' '}
          <strong>single</strong>
          {' '}
          tile element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like
          grids
        </Subtitle>
        <hr />
        <Content>
          <p>
            To build intricate 2-dimensional, you only need a
            {' '}
            <strong>single element</strong>
            : the
            {' '}
            <code>tile</code>
            :
          </p>
        </Content>
        <hr />
        <Title tag="h3">Example</Title>
        <Tile contextual="ancestor">
          <Tile vertical size="8">
            <Tile>
              <Tile contextual="parent" vertical />
            </Tile>
            <Tile contextual="parent" />
          </Tile>
        </Tile>
      </Container>
    );
  }
}
