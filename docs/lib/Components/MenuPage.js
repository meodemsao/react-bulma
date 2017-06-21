/**
 * Created by anvu69 on 6/9/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import MenuExample from '../Example/MenuExample';
const MenuExampleSource = require('!!raw!../Example/MenuExample');

export default class MenuPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Menu</Title>
          <Subtitle>
            A simple <strong>menu</strong>, for any type of vertical navigation
          </Subtitle>
          <hr />
          <Cols>
            <Col size="3">
              <MenuExample />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {MenuExampleSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
        </Container>
      </Section>
    );
  }
}
