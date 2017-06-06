/**
 * Created by anvu69 on 6/6/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Subtitle,
  Title
} from 'reactbulma';

export default class TitlePage extends React.Component {
  render() {
    return(
      <Container>
        <Title>Titles</Title>
        <Subtitle>Simple <strong>headings</strong> to add depth to your page</Subtitle>
        <hr />
        <Cols>
          <Col>
            <p>There are <strong>2 types</strong> of heading:</p>
          </Col>
          <Col>
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Title>Title</Title>\n' +
                    '<Subtitle>Subtitle</Subtitle>'
                  }
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
        <hr />
        <Cols>
          <Col>
            <p>There are <strong>6 sizes</strong> available:</p>
          </Col>
          <Col>
            <p className="title is-1">Title 1</p>
            <p className="title is-2">Title 2</p>
            <p className="title is-3">Title 3 (default size)</p>
            <p className="title is-4">Title 4</p>
            <p className="title is-5">Title 5</p>
            <p className="title is-6">Title 6</p>
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Title size="1">Title 1</Title>\n' +
                    '<Title tag="h2" size="2">Title 2</Title>\n' +
                    '<Title tag="h3" size="3">Title 3</Title>\n' +
                    '<Title tag="h4" size="4">Title 4</Title>\n' +
                    '<Title tag="h5" size="5">Title 5</Title>\n' +
                    '<Title tag="h6" size="6">Title 6</Title>\n'
                  }
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
        <Cols>
          <Col />
          <Col>
            <p className="subtitle is-1">Subtitle 1</p>
            <p className="subtitle is-2">Subtitle 2</p>
            <p className="subtitle is-3">Subtitle 3</p>
            <p className="subtitle is-4">Subtitle 4</p>
            <p className="subtitle is-5">Subtitle 5 (default size)</p>
            <p className="subtitle is-6">Subtitle 6</p>
          </Col>
          <Col>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Subtitle tag="h1" size="1">Subtitle 1</Subtitle>\n' +
                    '<Subtitle size="2">Subtitle 2</Subtitle>\n' +
                    '<Subtitle tag="h3" size="3">Subtitle 3</Subtitle>\n' +
                    '<Subtitle tag="h4" size="4">Subtitle 4</Subtitle>\n' +
                    '<Subtitle tag="h5" size="5">Subtitle 5</Subtitle>\n' +
                    '<Subtitle tag="h6" size="6">Subtitle 6</Subtitle>\n'
                  }
                </PrismCode>
              </pre>
            </figure>
          </Col>
        </Cols>
      </Container>
    );
  }
}
