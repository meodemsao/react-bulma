import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Content,
  Title,
  Section,
  Subtitle
} from 'reactbulma';

import CardExample from '../Example/Card/CardExample';
const CardExampleSource = require('!!raw!../Example/Card/CardExample');

import CardForm from '../Example/Card/CardForm';
const CardFromSource = require('!!raw!../Example/Card/CardForm');

import CardQuote from '../Example/Card/CardQuote';
const CardQuoteSource = require('!!raw!../Example/Card/CardQuote');

export default class CardPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Cards</Title>
          <Subtitle>An all-around flexible and composable component</Subtitle>
          <Content>
            <p>
              The
              {' '}
              <strong>card</strong>
              {' '}
              component comprises several elements that you can mix and match:
            </p>
            <ul>
              <li>
                <code>{'<Card />'}</code>: the main container
                <ul>
                  <li>
                    <code>{'<Card type="header" />'}</code>: a horizontal bar with a shadow
                    <ul>
                      <li>
                        <code>{'<Card type="header-title" />'}</code>: a left-aligned bold text
                      </li>
                      <li>
                        <code>{'<Card type="header-icon" />'}</code>: a placeholder for an icon
                      </li>
                    </ul>
                  </li>
                  <li>
                    <code>{'<Card type="image" />'}</code>: a fullwidth container for a reponsive image
                  </li>
                  <li>
                    <code>{'<Card type="content" />'}</code>: a multi-purpose container for <em>any</em> other element
                  </li>
                  <li>
                    <code>{'<Card type="footer" />'}</code>: a horizontal list of controls
                    <ul>
                      <li>
                        <code>{'<Card type="footer-item" />'}</code>: a repeatable list item
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Content>
          <hr />
          <Cols>
            <Col size="one-third">
              <CardExample />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {CardExampleSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Cols>
            <Col size="one-third">
              <CardForm />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {CardFromSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Cols>
            <Col size="one-third">
              <CardQuote />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {CardQuoteSource}
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
