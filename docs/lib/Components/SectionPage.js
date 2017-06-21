import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

export default class SectionPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Section</Title>
          <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
          <hr />
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Section>\n' +
                  '\t<Container>\n' +
                  '\t\t<Title>Section</Title>\n' +
                  '\t\t<Subtitle>\n' +
                  '\t\t\tA simple container to divide your page into <strong>sections</strong>, like the one you\'re currently reading\n' +
                  '\t\t</Subtitle>\n' +
                  '\t</Container>\n' +
                  '</Section>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>You can use the modifiers <code>size="medium"</code> and <code>size="large"</code> to change the <strong>spacing</strong>.</p>
          </Content>
        </Container>
      </Section>
    );
  }
}
