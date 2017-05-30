import React from 'react';
import {
  Col,
  Cols,
  Container,
  Content,
  Title,
  Subtitle
} from 'reactbulma';

export default class ContentPage extends React.Component {
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
            The
            {' '}
            <code>.delete</code>
            {' '}
            element is a stand-alone element that can be used in different contexts.
          </p>
        </Content>
        <Cols>
          <Col>
            <Content>
              <p>
                On its own, it's a simple circle with a cross:
              </p>
            </Content>
          </Col>
        </Cols>
      </Container>

    );
  }
}
