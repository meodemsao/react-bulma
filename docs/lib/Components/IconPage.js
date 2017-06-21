import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Icon,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import IconExample from '../Example/IconExample';
const IconExampleSource = require('!!raw!../Example/IconExample');

export default class IconPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Icon</Title>
          <Subtitle>
            Bulma is compatible with
            {' '}
            <strong>
              <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>
            </strong>
            {' '}
            icons.
          </Subtitle>
          <hr />
          <Content>
            <p>
              Because the icons can take a few seconds to load, and because you want control over the
              {' '}
              <strong>space</strong>
              {' '}
              the icons will take, you can use the
              {' '}
              <code>icon</code>
              {' '}
              class as a container:
            </p>
          </Content>
          <div className="example">
            <IconExample />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {IconExampleSource}
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              The
              {' '}
              <code>icon</code>
              {' '}
              container will take up
              {' '}
              <em>exactly</em>
              {' '}
              <strong>1.5rem x 1.5rem</strong>. The icon itself is sized at
              {' '}
              <strong>21px</strong>.
            </p>
          </Content>
          <hr />
          <Title tag="h3">Sizes</Title>
          <Content>
            <p>
              Font Awesome icons use a font-size of
              {' '}
              <strong>28px</strong>
              {' '}
              by default, and are best rendered when using
              {' '}
              <strong>multiples of 7</strong>.
            </p>
            <p>
              The Bulma
              {' '}
              <code>icon</code>
              {' '}
              container is always slightly bigger than the font-size used:
            </p>
          </Content>
          <table className="table">
            <thead>
              <tr>
                <th colSpan="2">Class</th>
                <th>Font-size</th>
                <th>Container size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>icon is-small</code></td>
                <td><Icon size="small" name="home" /></td>
                <td>14px</td>
                <td>1rem x 1rem</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td><Icon name="home" /></td>
                <td>21px</td>
                <td>1.5rem x 1.5rem</td>
              </tr>
              <tr>
                <td><code>icon is-medium</code></td>
                <td><Icon size="medium" name="home" /></td>
                <td>28px</td>
                <td>2rem x 2rem</td>
              </tr>
              <tr>
                <td><code>icon is-large</code></td>
                <td><Icon size="large" name="home" /></td>
                <td>42px</td>
                <td>3rem x 3rem</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
    );
  }
}
