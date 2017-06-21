/**
 * Created by anvu69 on 6/14/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Icon,
  Tabs,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

export default class TabPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Tabs</Title>
          <Subtitle>Simple responsive horizontal navigation <strong>tabs</strong>, with different styles</Subtitle>
          <hr />
          <Content>
            <p>
              <strong>Tabs</strong>
              {' '}
              only require a
              {' '}
              <code>tabs</code>
              {' '}
              container and a
              {' '}
              <code>{'<ul>'}</code>
              {' '}
              list.<br />
              The <strong>default</strong> tabs style has a single border at the bottom.</p>
          </Content>
          <div className="example">
            <Tabs>
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<ul>\n' +
                  '\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t<li><a>Music</a></li>\n' +
                  '\t<li><a>Videos</a></li>\n' +
                  '\t<li><a>Documents</a></li>' +
                  '</ul>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Alignment</Title>
          <Content>
            <p>
              To align the tabs list, use the
              {' '}
              <code>alignment="centered"</code>
              {' '}
              or
              {' '}
              <code>alignment="right"</code>
              {' '}
              modifier on the <code>{'<Tabs />'}</code> container:
            </p>
          </Content>
          <div className="example">
            <Tabs alignment="centered">
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t\t<li><a>Music</a></li>\n' +
                  '\t\t<li><a>Videos</a></li>\n' +
                  '\t\t<li><a>Documents</a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="right">
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="right">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t\t<li><a>Music</a></li>\n' +
                  '\t\t<li><a>Videos</a></li>\n' +
                  '\t\t<li><a>Documents</a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Icons</Title>
          <Content>
            <p>You can use any of the <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>
              <strong>icons</strong>.</p>
          </Content>
          <div className="example">
            <Tabs alignment="centered">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Sizes</Title>
          <Content>
            <p>
              You can choose between
              {' '}
              <strong>3 additional sizes</strong>:
              {' '}
              <code>size="small"</code>
              {' '}
              <code>size="medium"</code>
              {' '}
              and
              {' '}
              <code>size="large"</code>.
            </p>
          </Content>
          <div className="example">
            <Tabs size="small">
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="small">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t\t<li><a>Music</a></li>\n' +
                  '\t\t<li><a>Videos</a></li>\n' +
                  '\t\t<li><a>Documents</a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs size="medium">
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="medium">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t\t<li><a>Music</a></li>\n' +
                  '\t\t<li><a>Videos</a></li>\n' +
                  '\t\t<li><a>Documents</a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs size="large">
              <ul>
                <li className="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="large">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a>Pictures</a></li>\n' +
                  '\t\t<li><a>Music</a></li>\n' +
                  '\t\t<li><a>Videos</a></li>\n' +
                  '\t\t<li><a>Documents</a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Styles</Title>
          <Content>
            If you want a more classic style with <strong>borders</strong>, just append the <code>style="boxed"</code> modifier.
          </Content>
          <div className="example">
            <Tabs style="boxed">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs style="boxed">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            If you want
            {' '}
            <strong>mutually exclusive</strong>
            {' '}
            tabs (like radio buttons where clicking one deselects all other ones), use the
            {' '}
            <code>style="toggle"</code>
            {' '}
            modifier.
          </Content>
          <div className="example">
            <Tabs style="toggle">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs style="toggle">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            If you want the tabs to take up the
            {' '}
            <strong>whole width</strong>
            {' '}
            available, use
            {' '}
            <code>alignment="fullwidth"</code>.
          </Content>
          <div className="example">
            <Tabs alignment="fullwidth">
              <ul>
                <li>
                  <a>
                    <Icon name="angle-left" />
                    <span>Left</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Icon name="angle-up" />
                    <span>Up</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Right</span>
                    <Icon name="angle-right" />
                  </a>
                </li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth">\n' +
                  '\t<ul>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<a>\n' +
                  '\t\t\t\t<Icon name="angle-left" />\n' +
                  '\t\t\t\t<span>Left</span>\n' +
                  '\t\t\t</a>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<a>\n' +
                  '\t\t\t\t<Icon name="angle-up" />\n' +
                  '\t\t\t\t<span>Up</span>\n' +
                  '\t\t\t</a>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<a>\n' +
                  '\t\t\t\t<span>Right</span>\n' +
                  '\t\t\t\t<Icon name="angle-right" />\n' +
                  '\t\t\t</a>\n' +
                  '\t\t</li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Combining</Title>
          <Content>
            You can
            {' '}
            <strong>combine</strong>
            {' '}
            different modifiers. For example, you can have
            {' '}
            <strong>centered</strong>
            {' '}
            boxed tabs, or fullwidth toggle ones.
          </Content>
          <div className="example">
            <Tabs alignment="centered" style="boxed">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered" style="boxed">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="fullwidth" style="toggle">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth" style="toggle">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="centered" style="boxed" size="medium">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered" style="boxed" size="medium">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="fullwidth" style="toggle" size="large">
              <ul>
                <li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>
                <li><a><Icon size="small" name="music" /><span>Music</span></a></li>
                <li><a><Icon size="small" name="film" /><span>Videos</span></a></li>
                <li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>
              </ul>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth" style="toggle" size="large">\n' +
                  '\t<ul>\n' +
                  '\t\t<li className="is-active"><a><Icon size="small" name="image" /><span>Pictures</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="music" /><span>Music</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="film" /><span>Videos</span></a></li>\n' +
                  '\t\t<li><a><Icon size="small" name="file-text-o" /><span>Documents</span></a></li>\n' +
                  '\t</ul>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
