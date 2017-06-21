/**
 * Created by anvu69 on 6/14/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Notification,
  Title,
  Section,
  Subtitle
} from 'reactbulma';

export default class ContainerPage extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <Container>
            <Title>Container</Title>
            <Subtitle>A simple <strong>container</strong> to center your content horizontally</Subtitle>
            <hr />
            <Content>
              <p>
                The
                {' '}
                <code>{'<Container />'}</code>
                {' '}
                class can be used in any context, but mostly as a
                {' '}
                <strong>direct child</strong>
                {' '}
                of either:
              </p>
              <ul>
                <li><code>{'<Nav />'}</code></li>
                <li><code>{'<Hero />'}</code></li>
                <li><code>{'<Section />'}</code></li>
                <li><code>{'<Footer />'}</code></li>
              </ul>
              <p>This is how the container will behave:</p>
              <ul>
                <li>on <strong>mobile</strong> and <strong>tablet</strong>, it will have a margin of <strong>20px</strong> on both the left and right sides.</li>
                <li>on <strong>desktop</strong> (&gt;= 1000px), it will have a maximum width of <strong>960px</strong> and will be <strong>horizontally centered</strong>.</li>
                <li>on <strong>widescreen</strong> (&gt;= 1192px), it will have a maximum width of <strong>1152px</strong>.</li>
                <li>on <strong>fullhd</strong> (&gt;= 1384px), it will have a maximum width of <strong>1344px</strong>.</li>
              </ul>
              <p>
                The values
                {' '}
                <strong>960</strong>,
                {' '}
                <strong>1152</strong>
                {' '}
                and <strong>1344</strong>
                {' '}
                have been chosen because they are divisible by both
                {' '}
                <strong>12</strong> and <strong>16</strong>.
              </p>
            </Content>
          </Container>
        </Section>
        <div className="example is-fullwidth">
          <Container>
            <Notification>
              This container is <strong>centered</strong> on desktop.
            </Notification>
          </Container>
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {
                '<Container>\n' +
                '\t<Notification>\n' +
                '\t\tThis container is <strong>centered</strong> on desktop.\n' +
                '\t</Notification>\n' +
                '</Container>'
              }
            </PrismCode>
          </pre>
        </figure>
        <Container>
          <hr />
          <Title tag="h3">Fluid container</Title>
          <Content>
            <p>If you don't want to have a maximum width but want to keep the 20px margin on the left and right sides, add the
              {' '}
              <code>fluid</code>
              {' '}
              modifier:
            </p>
          </Content>
        </Container>
        <div className="example is-fullwidth">
          <Container fluid>
            <Notification>
              This container is <strong>fluid</strong>: it will have a 20px gap on either side.
            </Notification>
          </Container>
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {
                '<Container fluid>\n' +
                '\t<Notification>\n' +
                '\t\tThis container is <strong>fluid</strong>: it will have a 20px gap on either side.\n' +
                '\t</Notification>\n' +
                '</Container>'
              }
            </PrismCode>
          </pre>
        </figure>
      </div>
    );
  }
}
