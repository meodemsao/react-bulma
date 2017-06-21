import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Col,
  Cols,
  Container,
  Delete,
  Field,
  Section,
  Subtitle,
  Tag,
  Title
} from 'reactbulma';

export default class TagPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Tags</Title>
          <Subtitle>Small <strong>tag labels</strong> to insert anywhere</Subtitle>
          <hr />
          <Cols>
            <Col size="4">
              By default, a <strong>tag</strong> is a 1.5rem high label.
            </Col>
            <Col size="2">
              <Tag>Tag label</Tag>
            </Col>
            <Col size="6">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tag>Tag label</Tag>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="4">
              Like with buttons, there are <strong>9 different colors</strong> available.
            </Col>
            <Col size="2">
              <Field>
                <Tag color="black">Black</Tag>
              </Field>
              <Field>
                <Tag color="dark">Dark</Tag>
              </Field>
              <Field>
                <Tag color="light">Light</Tag>
              </Field>
              <Field>
                <Tag color="white">White</Tag>
              </Field>
              <Field>
                <Tag color="primary">Primary</Tag>
              </Field>
              <Field>
                <Tag color="info">Info</Tag>
              </Field>
              <Field>
                <Tag color="success">Success</Tag>
              </Field>
              <Field>
                <Tag color="warning">Warning</Tag>
              </Field>
              <Field>
                <Tag color="danger">Danger</Tag>
              </Field>
            </Col>
            <Col size="6">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tag color="black">Black</Tag>\n' +
                      '<Tag color="dark">Dark</Tag>\n' +
                      '<Tag color="light">Light</Tag>\n' +
                      '<Tag color="white">White</Tag>\n' +
                      '<Tag color="primary">Primary</Tag>\n' +
                      '<Tag color="info">Info</Tag>\n' +
                      '<Tag color="success">Success</Tag>\n' +
                      '<Tag color="warning">Warning</Tag>\n' +
                      '<Tag color="danger">Danger</Tag>\n'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="4">
              And <strong>2 additional</strong> sizes.
            </Col>
            <Col size="2">
              <Field>
                <Tag color="primary" size="medium">Medium</Tag>
              </Field>
              <Field>
                <Tag color="info" size="large">Large</Tag>
              </Field>
            </Col>
            <Col size="6">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tag color="primary" size="medium">Medium</Tag>\n' +
                      '<Tag color="info" size="large">Large</Tag>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="4">
              You can also append a <strong>delete button</strong>.
            </Col>
            <Col size="2">
              <Field>
                <Tag color="success">
                  Bar
                  <Delete size="small" />
                </Tag>
              </Field>
              <Field>
                <Tag color="warning" size="medium">
                  Hello
                  <Delete size="small" />
                </Tag>
              </Field>
              <Field>
                <Tag color="danger" size="large">
                  World
                  <Delete size="small" />
                </Tag>
              </Field>
            </Col>
            <Col size="6">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Tag color="success">\n' +
                      '\tBar\n' +
                      '\t<Delete size="small" />\n' +
                      '</Tag>\n' +
                      '<Tag color="warning" size="medium">\n' +
                      '\tHello\n' +
                      '\t<Delete size="small" />\n' +
                      '</Tag>\n' +
                      '<Tag color="danger" size="large">\n' +
                      '\tWorld\n' +
                      '\t<Delete size="small" />\n' +
                      '</Tag>'
                    }
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
