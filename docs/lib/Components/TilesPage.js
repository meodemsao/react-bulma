import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Content,
  Message,
  MessageBody,
  MessageHeader,
  Section,
  Subtitle,
  Title,
} from 'reactbulma';

import TileExample from '../Example/Tile/TileExample';
const TileExampleSource = require('!!raw!../Example/Tile/TileExample');

import TileNesting from '../Example/Tile/TileNesting';
const TileNestingSource = require('!!raw!../Example/Tile/TileNesting');

import TileNestingRequirement from '../Example/Tile/TileNestingRequirement';
const TileNestingRequirementSource = require('!!raw!../Example/Tile/TileNestingRequirement');

import Tile3Columns from '../Example/Tile/Tile3Columns';
const Tile3ColumnsSource = require('!!raw!../Example/Tile/Tile3Columns');

import Tile4Columns from '../Example/Tile/Tile4Columns';
const Tile4ColumnsSource = require('!!raw!../Example/Tile/Tile4Columns');

export default class TilesPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Tiles</Title>
          <Subtitle>
            A
            {' '}
            <strong>single tile</strong>
            {' '}
            element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like
            grids
          </Subtitle>
          <hr />
          <Content>
            <p>
              To build intricate 2-dimensional, you only need a
              {' '}
              <strong>single element</strong>
              : the
              {' '}
              <code>tile</code>
              :
            </p>
          </Content>
          <pre>
            <PrismCode className="language-jsx">
              {
                '<Tile>\n' +
                '\t<!-- The magical tile element! -->\n' +
                '</Tile>'
              }
            </PrismCode>
          </pre>
          <hr />
          <Title tag="h3">Example</Title>
          <TileExample />
          <pre>
            <PrismCode className="language-jsx">
              {TileExampleSource}
            </PrismCode>
          </pre>
          <hr />
          <Title tag="h3">Modifiers</Title>
          <Content>
            <p>
              The <code>tile</code> element has <strong>16 modifiers</strong>:
              </p>
            <ul>
              <li>
                <strong>3 contextual</strong> modifiers
                <ul>
                  <li>
                    <code>is-ancestor</code>
                  </li>
                  <li>
                    <code>is-parent</code>
                  </li>
                  <li>
                    <code>is-child</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>1 directional</strong> modifier
                <ul>
                  <li>
                    <code>is-vertical</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>12 horizontal size</strong> modifiers
                <ul>
                  <li>from <code>is-1</code></li>
                  <li>to <code>is-12</code></li>
                </ul>
              </li>
            </ul>
          </Content>
          <hr />
          <Title tag="h3">How it works: Nesting</Title>
          <Content>
            <p>Everything is a tile! To create a grid of tiles, you only need to <strong>nest</strong> <code>tile</code> elements.</p>
          </Content>
          <Cols>
            <Col size="one-third">
              <p>Start with an <strong>ancestor</strong> tile that will wrap all other tiles:</p>
            </Col>
            <Col size="tow-thirds">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tile contextual="ancestor">\n' +
                      '\t<!-- All other tile elemnts -->\n' +
                      '</Tile>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="one-third">
              <p>Add tile elements that will distribute themselves <strong>horizontally</strong>:</p>
            </Col>
            <Col size="tow-thirds">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tile contextual="ancestor">\n' +
                      '\t<Tile size="4">\n' +
                      '\t\t<!-- 1/3 -->\n' +
                      '\t</Tile>\n' +
                      '\t<Tile>\n' +
                      '\t\t<!-- This tile will take the rest: 2/3 -->\n' +
                      '\t</Tile>\n' +
                      '</Tile>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="one-third">
              <p>
                You can <strong>resize</strong> any tile according to a <strong>12 column</strong> grid.
                <br />
                For example, <code>is-4</code> will take up 1/3 of the horizontal space:
              </p>
            </Col>
            <Col size="tow-thirds">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tile contextual="ancestor">\n' +
                      '\t<Tile>\n' +
                      '\t\t<!-- Add content or other tiles -->\n' +
                      '\t</Tile>\n' +
                      '\t<Tile>\n' +
                      '\t\t<!-- Add content or other tiles -->\n' +
                      '\t</Tile>\n' +
                      '</Tile>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="one-third">
              <p>If you want to stack tiles <strong>vertically</strong>, add <code>is-vertical</code> on the parent tile:</p>
            </Col>
            <Col size="tow-thirds">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tile contextual="ancestor">\n' +
                      '\t<Tile size="4" directional>\n' +
                      '\t\t<!-- Top tile -->\n' +
                      '\t</Tile>\n' +
                      '\t<Tile>\n' +
                      '\t\t<!-- Bottom tile -->\n' +
                      '\t</Tile>\n' +
                      '\t<Tile>\n' +
                      '\t\t<!-- This tile will take up the whole vertical space -->\n' +
                      '\t</Tile>\n' +
                      '</Tile>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="one-third">
              <Content>
                <p>As soon as you want to add <strong>content</strong> to a tile, just:</p>
                <ul>
                  <li>add <em>any</em> class you want, like <code>box</code></li>
                  <li>add the <code>is-child</code> modifier on the tile</li>
                  <li>add the <code>is-parent</code> modifier on the <em>parent</em> tile</li>
                </ul>
              </Content>
            </Col>
            <Col size="tow-thirds">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tile contextual="ancestor">\n' +
                      '\t<Tile size="4" directional contextual="is-parent">\n' +
                      '\t\t<Tile contextual="child box">\n' +
                      '\t\t\t<p className="title">One</p>\n' +
                      '\t\t</Tile>\n' +
                      '\t\t<Tile contextual="child box">\n' +
                      '\t\t\t<p className="title">Two</p>\n' +
                      '\t\t</Tile>\n' +
                      '\t</Tile>\n' +
                      '\t<Tile contextual="parent">\n' +
                      '\t\t<Tile contextual="child box">\n' +
                      '\t\t\t<p className="title">Three</p>\n' +
                      '\t\t</Tile>\n' +
                      '\t</Tile>\n' +
                      '</Tile>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <TileNesting />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {TileNestingSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Nesting requirements</Title>
          <Message color="danger">
            <MessageHeader>3 levels deep at least...</MessageHeader>
            <MessageBody>
              <Content>
                <p>You need at least <strong>3 levels</strong> of hierarchy:</p>
                <pre>
                  <PrismCode className="language-markdown">
                    {
                      'tile is-ancestor\n' +
                      '|\n' +
                      '└───tile is-parent\n' +
                      '\t\t|\n' +
                      '\t\t└───tile is-child\n'
                    }
                  </PrismCode>
                </pre>
              </Content>
            </MessageBody>
          </Message>
          <Message color="success">
            <MessageHeader>...but more levels if you want!</MessageHeader>
            <MessageBody>
              <Content>
                <p>You can however nest tiles more deeply than that, and mix it up!</p>
                <pre>
                  <PrismCode className="language-markdown">
                    {
                      'tile is-ancestor\n' +
                      '|\n' +
                      '├───tile is-vertical is-8\n' +
                      '|   |\n' +
                      '|   ├───tile\n' +
                      '|   |   |\n' +
                      '|   |   ├───tile is-parent is-vertical\n' +
                      '|   |   |   ├───tile is-child\n' +
                      '|   |   |   └───tile is-child\n' +
                      '|   |   |\n' +
                      '|   |   └───tile is-parent\n' +
                      '|   |       └───tile is-child\n' +
                      '|   |\n' +
                      '|   └───tile is-parent\n' +
                      '|       └───tile is-child\n' +
                      '|\n' +
                      '└───tile is-parent\n' +
                      '└───tile is-child\n'
                    }
                  </PrismCode>
                </pre>
              </Content>
            </MessageBody>
          </Message>
          <TileNestingRequirement />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {TileNestingRequirementSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">3 columns</Title>
          <Tile3Columns />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {Tile3ColumnsSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">4 columns</Title>
          <Tile4Columns />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {Tile4ColumnsSource}
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
