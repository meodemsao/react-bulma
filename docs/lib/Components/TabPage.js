/**
 * Created by anvu69 on 6/14/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Icon,
  TabItem,
  TabList,
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
              <code>{'<Tabs />'}</code>
              {' '}
              container and a
              {' '}
              <code>{'<TabList />'}</code>
              {' '}
              list.<br />
              The <strong>default</strong> tabs style has a single border at the bottom.</p>
          </Content>
          <div className="example">
            <Tabs>
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs>\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
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
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="right">
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="right">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Icons</Title>
          <Content>
            <p>
              You can use any of the
              {' '}
              <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>
              {' '}
              <strong>icons</strong>.
            </p>
          </Content>
          <div className="example">
            <Tabs alignment="centered">
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
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
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="small">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs size="medium">
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="medium">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs size="large">
              <TabList>
                <TabItem className="is-active">Pictures</TabItem>
                <TabItem>Music</TabItem>
                <TabItem>Videos</TabItem>
                <TabItem>Documents</TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs size="large">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active">Pictures</TabItem>\n' +
                  '\t\t<TabItem>Music</TabItem>\n' +
                  '\t\t<TabItem>Videos</TabItem>\n' +
                  '\t\t<TabItem>Documents</TabItem>\n' +
                  '\t</TabList>\n' +
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
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs style="boxed">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
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
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs style="toggle">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
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
              <TabList>
                <TabItem><Icon name="angle-left" /><span>Left</span></TabItem>
                <TabItem><Icon name="angle-up" /><span>Up</span></TabItem>
                <TabItem><span>Right</span><Icon name="angle-right" /></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem><Icon name="angle-left" /><span>Left</span></TabItem>\n' +
                  '\t\t<TabItem><Icon name="angle-up" /><span>Up</span></TabItem>\n' +
                  '\t\t<TabItem><span>Right</span><Icon name="angle-right" /></TabItem>\n' +
                  '\t</TabList>\n' +
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
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered" style="boxed">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="fullwidth" style="toggle">
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth" style="toggle">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="centered" style="boxed" size="medium">
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="centered" style="boxed" size="medium">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
                  '</Tabs>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Tabs alignment="fullwidth" style="toggle" size="large">
              <TabList>
                <TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>
                <TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>
                <TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>
                <TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>
              </TabList>
            </Tabs>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Tabs alignment="fullwidth" style="toggle" size="large">\n' +
                  '\t<TabList>\n' +
                  '\t\t<TabItem className="is-active"><Icon size="small" name="image" /><span>Pictures</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="music" /><span>Music</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="film" /><span>Videos</span></TabItem>\n' +
                  '\t\t<TabItem><Icon size="small" name="file-text-o" /><span>Documents</span></TabItem>\n' +
                  '\t</TabList>\n' +
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
