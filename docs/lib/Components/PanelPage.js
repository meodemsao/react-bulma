/**
 * Created by anvu69 on 6/14/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Content,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import PanelExample from '../Example/PanelExample';
const PanelExampleSource = require('!!raw!../Example/PanelExample');

export default class PanelPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Panel</Title>
          <Subtitle>A composable <strong>panel</strong>, for compact controls</Subtitle>
          <hr />
          <Content>
            <p>
              The <code>{'<Panel />'}</code> is container for several types:
            </p>
            <ul>
              <li>
                <code>{'<PanelHeading />'}</code> as the first child
              </li>
              <li>
                <code>{'<PanelTabs />'}</code> for navigation
              </li>
              <li>
                <code>{'<PanelBlock />'}</code> which can contain other elements, like:
                <ul>
                  <li><code>{'<Control />'}</code></li>
                  <li><code>{'<Input />'}</code></li>
                  <li><code>{'<Button />'}</code></li>
                  <li><code>{'<Icon panel />'}</code></li>
                </ul>
              </li>
            </ul>
            <p>
              The <code>{'<PanelBlock />'}</code> can be an anchor tag <code>tag="a"</code> or a label <code>tag="label"</code> with a checkbox inside.
            </p>
          </Content>
          <Cols>
            <Col size="4">
              <PanelExample />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {PanelExampleSource}
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
