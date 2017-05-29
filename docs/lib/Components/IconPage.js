import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Box,
  Media,
  Content,
  Image,
  Level,
  Title,
  Subtitle,
  Icon
} from 'reactbulma';

import IconExample from '../Example/IconExample';
const IconExampleSource = require('!!raw!../Example/IconExample');

export default class IconPage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Icon</Title>
        <Subtitle tag="h2">
          Bulma is compatible with
          {' '}
          <strong>
            <a href="http://fortawesome.github.io/Font-Awesome/">
              Font Awesome
            </a>
          </strong>
          {' '}
          icons.
        </Subtitle>
        <hr />
        <IconExample />
        <pre>
          <PrismCode className="language-jsx">
            {IconExampleSource}
          </PrismCode>
        </pre>
      </Container>
    );
  }
}
