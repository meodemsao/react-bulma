import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Content,
  Delete,
  Subtitle,
  Title
} from 'reactbulma';

import DeleteExample from '../Example/DeleteExample';
const DeleteExampleSource = require('!!raw!../Example/DeleteExample');

export default class DeletePage extends React.Component {
  render() {
    return (
      <Container>
        <Title>Delete</Title>
        <Subtitle>
          A versatile
          {' '}
          <strong>delete</strong>
          {' '}
          cross
        </Subtitle>
        <hr />
        <Content>
          <p>
            The
            {' '}
            <code>.delete</code>
            {' '}
            element is a stand-alone element that can be used in different contexts.
          </p>
        </Content>
        <Cols>
          <Col>
            <Content>
              <p>
                On its own, it's a simple circle with a cross:
              </p>
              <Delete />
            </Content>
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {'<Delete />'}
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
        <Cols>
          <Col>
            <Content>
              <p>
                It comes in <strong>4 sizes</strong>:
              </p>
              <Delete size="small" />
              <Delete />
              <Delete size="medium" />
              <Delete size="large" />
            </Content>
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Delete size="small" />\n' +
                    '<Delete />\n' +
                    '<Delete size="medium" />\n' +
                    '<Delete size="large" />'
                  }
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
        <Cols>
          <Col size="half">
            <DeleteExample />
          </Col>
          <Col size="half">
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {DeleteExampleSource}
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
      </Container>
    );
  }
}
