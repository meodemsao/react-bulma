import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Footer,
  Icon,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

export default class FooterPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Footer</Title>
          <Subtitle>A simple responsive <strong>footer</strong> which can include anything: lists, headings, columns, icons, buttons...</Subtitle>
          <div className="example">
            <Footer>
              <Container>
                <Content textCenter>
                  <p>
                    <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                  </p>
                  <p>
                    <Icon tag="a" href="https://github.com/jgthms/bulma" name="github" />
                  </p>
                </Content>
              </Container>
            </Footer>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Footer>\n' +
                  '\t<Container>\n' +
                  '\t\t<Content textCenter>\n' +
                  '\t\t\t<p>\n' +
                  '\t\t\t\t<strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed\n' +
                  '\t\t\t\t<a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content\n' +
                  '\t\t\t\tis licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.\n' +
                  '\t\t\t</p>\n' +
                  '\t\t\t<p>\n' +
                  '\t\t\t\t<Icon tag="a" href="https://github.com/jgthms/bulma" name="github" />\n' +
                  '\t\t\t</p>\n' +
                  '\t\t</Content>\n' +
                  '\t</Container>\n' +
                  '</Footer>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
