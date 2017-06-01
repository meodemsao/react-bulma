import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Content,
  Title,
  Subtitle
} from 'reactbulma';

import BoxExample from '../Example/BoxExample';
const BoxExampleSource = require('!!raw!../Example/BoxExample');

export default class BoxPage extends React.Component {
  render() {
    return (
      <Container>
        <Title>Box</Title>
        <Subtitle>
          A white
          {' '}
          <strong>box</strong>
          {' '}
          to contain other elements
        </Subtitle>
        <hr />
        <Cols>
          <Col size="4">
            <Content>
              <p>
                The
                {' '}
                <code>.box</code>
                {' '}
                element is simply a container with a shadow, a border, a radius, and some padding.
                <br />
                For example, you can include a media object:
              </p>
            </Content>
          </Col>
          <Col size="8">
            <BoxExample />
          </Col>
        </Cols>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {BoxExampleSource}
            </PrismCode>
          </pre>
        </figure>
      </Container>
    );
  }
}
