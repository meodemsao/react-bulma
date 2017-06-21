/**
 * Created by anvu69 on 6/2/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import ProgressExample from '../Example/Progress/ProgressExample';
const ProgressExampleSource = require('!!raw!../Example/Progress/ProgressExample');

import ProgressSize from '../Example/Progress/ProgressSize';
const ProgressSizeSource = require('!!raw!../Example/Progress/ProgressSize');

export default class ProgressPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Progress bars</Title>
          <Subtitle>Native HTML <strong>progress</strong> bars</Subtitle>
          <hr />
          <div className="example">
            <ProgressExample />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ProgressExampleSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <div className="example">
            <ProgressSize />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ProgressSizeSource}
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
