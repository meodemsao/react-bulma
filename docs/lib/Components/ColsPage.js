import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Message,
  MessageHeader,
  MessageBody,
  Section,
  Subtitle,
  Title,
} from 'reactbulma';

import ColsExample from '../Example/Cols/ColsExample';
const ColsExampleSource = require('!!raw!../Example/Cols/ColsExample');

import ColsSize from '../Example/Cols/ColsSize';
const ColsSizeSource = require('!!raw!../Example/Cols/ColsSize');

import Cols12Columns from '../Example/Cols/Cols12Columns';

import ColsOffset from '../Example/Cols/ColsOffset';
const ColsOffsetSource = require('!!raw!../Example/Cols/ColsOffset');

import ColsMobile from '../Example/Cols/ColsMobile';
const ColsMobileSource = require('!!raw!../Example/Cols/ColsMobile');

import ColsDesktop from '../Example/Cols/ColsDesktop';
const ColsDesktopSource = require('!!raw!../Example/Cols/ColsDesktop');

import ColsCustom from '../Example/Cols/ColsCustom';
const ColsCustomSource = require('!!raw!../Example/Cols/ColsCustom');

import ColsNesting from '../Example/Cols/ColsNesting';
const ColsNestingSource = require('!!raw!../Example/Cols/ColsNesting');

import ColsMultiline from '../Example/Cols/ColsMultiline';
const ColsMultilineSource = require('!!raw!../Example/Cols/ColsMultiline');

import ColsGaplessExample from '../Example/Cols/ColsGaplessExample';

import ColsGapless from '../Example/Cols/ColsGapless';
const ColsGaplessSource = require('!!raw!../Example/Cols/ColsGapless');

import ColsNarrowColumn from '../Example/Cols/ColsNarrowColumn';
const ColsNarrowColumnSource = require('!!raw!../Example/Cols/ColsNarrowColumn');

export default class ColsPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Columns</Title>
          <Subtitle>
            A simple way to build
            {' '}
            <strong>responsive columns</strong>
          </Subtitle>
          <hr />
          <Content>
            <p>To build a <strong>grid</strong>, just:</p>
            <ol>
              <li>Add a <code>{'<Cols />'}</code> container</li>
              <li>Add as many <code>{'<Col />'}</code> elements as you want</li>
            </ol>
            <p>Each column will have an <strong>equal width</strong>, no matter the number of columns.</p>
          </Content>
          <ColsExample />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsExampleSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Sizes</Title>
          <Content>
            <p>
              If you want to change the
              {' '}
              <strong>size</strong>
              {' '}
              of a single column, you can use one the following classes:
            </p>
            <ul>
              <li>
                <code>{'<Col size="three-quarters" />'}</code>
              </li>
              <li>
                <code>{'<Col size="two-thirds" />'}</code>
              </li>
              <li>
                <code>{'<Col size="half" />'}</code>
              </li>
              <li>
                <code>{'<Col size="one-third" />'}</code>
              </li>
              <li>
                <code>{'<Col size="one-quarter" />'}</code>
              </li>
            </ul>
            <p>
              The
              {' '}
              <em>other</em>
              {' '}
              columns will fill up the
              {' '}
              <strong>remaining</strong>
              {' '}
              space automatically.
            </p>
          </Content>
          <ColsSize />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsSizeSource}
              </PrismCode>
            </pre>
          </figure>
          <Title tag="h4">12 columns</Title>
          <Content>
            <p>
              As the grid can be divided into
              {' '}
              <strong>12</strong>
              {' '}
              columns, there are size classes for each division:
            </p>
            <ul>
              <li><code>{'<Col size="2" />'}</code></li>
              <li><code>{'<Col size="3" />'}</code></li>
              <li><code>{'<Col size="4" />'}</code></li>
              <li><code>{'<Col size="5" />'}</code></li>
              <li><code>{'<Col size="6" />'}</code></li>
              <li><code>{'<Col size="7" />'}</code></li>
              <li><code>{'<Col size="8" />'}</code></li>
              <li><code>{'<Col size="9" />'}</code></li>
              <li><code>{'<Col size="10" />'}</code></li>
              <li><code>{'<Col size="11" />'}</code></li>
            </ul>
          </Content>
          <Message color="danger">
            <MessageHeader>Naming</MessageHeader>
            <MessageBody>
              Each modifier class is named after <strong>how many columns you want out of 12</strong>. So if you want 7 columns out of 12, use <code>is-7</code>.
            </MessageBody>
          </Message>
          <Cols12Columns />
          <hr />
          <Title tag="h3">Offset</Title>
          <Content>
            <p>
              While you can use
              {' '}
              <em>empty columns</em>
              {' '}
              (like
              {' '}
              <code>{'<Col />'}</code>
              ) to
              create horizontal space around
              {' '}
              <code>.column</code>
              {' '}
              elements, you can also use
              {' '}
              <strong>offset</strong>
               modifiers like <code>{'<Col size="offset-x" />'}</code>:
            </p>
          </Content>
          <ColsOffset />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsOffsetSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Responsiveness</Title>
          <Content>
            <p>
              By default, columns are only activated from
              {' '}
              <strong>tablet</strong>
              {' '}
              onwards. This means columns are stacked
              on top of each other on <strong>mobile</strong>.
            </p>
            <p>
              If you want columns to work on
              {' '}
              <strong>mobile too</strong>
              , just add the
              {' '}
              <code>responsive="mobile"</code>
              {' '}
              modifier on
              the <code>{'<Cols />'}</code> container:
            </p>
          </Content>
          <ColsMobile />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsMobileSource}
              </PrismCode>
            </pre>
          </figure>
          <Message color="info">
            <MessageHeader>Resize</MessageHeader>
            <MessageBody>
              If you want to see the difference, resize your browser and see
              {' '}
              <em>when</em>
              {' '}
              the columns are stacked and
              when they are horizontally distributed.
            </MessageBody>
          </Message>
          <Content>
            <p>If you <em>only</em> want columns on desktop, just use the <code>responsive="desktop"</code> modifier on the <code>{'<Cols />'}</code> container:</p>
          </Content>
          <ColsDesktop />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsDesktopSource}
              </PrismCode>
            </pre>
          </figure>
          <Title tag="h4">Different sizes per breakpoint</Title>
          <Content>
            <p>You can define a <strong>column size</strong> for <em>each</em> viewport size: mobile, tablet, and desktop.</p>
          </Content>
          <ColsCustom />
          <Message color="info">
            <MessageHeader>Resize</MessageHeader>
            <MessageBody>
              If you want to see these classes in action, resize your browser window and see how the same column varies in width at each breakpoint.
            </MessageBody>
          </Message>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsCustomSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Nesting</Title>
          <Content>
            <p>
              You can <strong>nest</strong> columns to have more flexibility in your design. You only need to follow this structure:
            </p>
            <ul>
              <li>
                <code>{'<Cols />'}</code>: top-level columns container
                <ul>
                  <li>
                    <code>{'<Col />'}</code>
                    <ul>
                      <li>
                        <code>{'<Cols />'}</code>: nested columns
                        <ul>
                          <li>
                            <code>{'<Col />'}</code> and so on…
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              The difference with <a href="#multiline">multiline columns</a> is the <strong>order</strong> in the HTML code: all the <strong className="has-text-info">blue</strong> columns appear <em>before</em> the <strong className="has-text-danger">red</strong> ones. Resize to a narrower viewport to see the result.
            </p>
          </Content>
          <ColsNesting />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsNestingSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Multiline</Title>
          <Content>
            <p>Whenever you want to start a new line, you can close a <code>{'<Cols />'}</code> container and start a new one.
              But you can also add the <code>multiline</code> modifier and add <strong>more</strong> column elements that would fit in a single row.</p>
          </Content>
          <ColsMultiline />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsMultilineSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Gapless</Title>
          <Content>
            <p>If you want to remove the <strong>space</strong> between the columns, add the <code>gapless</code> modifier on the <code>{'<Cols />'}</code> container:</p>
          </Content>
          <ColsGaplessExample />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {`
                  <Cols responsive="gapless">
                    <Col><Notification color="info">First column</Notification></Col>
                    <Col><Notification color="info">Second column</Notification></Col>
                    <Col><Notification color="info">Third column</Notification></Col>
                    <Col><Notification color="info">Fourth column</Notification></Col>
                  </Cols>
                `}
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>You can combine it with the <code>multiline</code> modifier:</p>
          </Content>
          <ColsGapless />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsGaplessSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Narrow column</Title>
          <Content>
            <p>If you want a column to only take the <strong>space it needs</strong>, use the <code>narrow</code> modifier.
              The other column(s) will fill up the remaining space.</p>
          </Content>
          <ColsNarrowColumn />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ColsNarrowColumnSource}
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>As for the size modifiers, you can have narrow columns for different <strong>breakpoints</strong>:</p>
            <ul>
              <li>
                <code>is-narrow-mobile</code>
              </li>
              <li>
                <code>is-narrow-tablet</code>
              </li>
              <li>
                <code>is-narrow-desktop</code>
              </li>
            </ul>
          </Content>
        </Container>
      </Section>
    );
  }
}
