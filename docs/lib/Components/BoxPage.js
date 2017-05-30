import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Title,
  Subtitle
} from 'reactbulma';

import BoxExample from '../Example/BoxExample';
const BoxExampleSource = require('!!raw!../Example/BoxExample');

export default class BoxPage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Box</Title>
        <Subtitle tag="h2">
          A white <strong>box</strong> to contain other elements
        </Subtitle>
        <hr />
        <BoxExample />
        <pre>
          <PrismCode className="language-jsx">
            {BoxExampleSource}
          </PrismCode>
        </pre>
      </Container>
    );
  }
}
