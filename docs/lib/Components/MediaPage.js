import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Delete,
  Icon,
  Image,
  Level,
  Media,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import MediaExample from '../Example/Media/MediaExample';
const MediaExampleSource = require('!!raw!../Example/Media/MediaExample');

import MediaForm from '../Example/Media/MediaForm';
const MediaFormSource = require('!!raw!../Example/Media/MediaForm');

import MediaNesting from '../Example/Media/MediaNesting';
const MediaNestingSource = require('!!raw!../Example/Media/MediaNesting');

export default class MediaPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Media Object</Title>
          <Subtitle>The famous <strong>media object</strong> prevalent in social media interfaces, but useful in any context</Subtitle>
          <hr />
          <Content>
            <p>
              The
              {' '}
              <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code">media object</a>
              {' '}
              is a UI element perfect for repeatable and nestable content.
            </p>
          </Content>
          <div className="structure">
            <Media>
              <Media tag="figure" type="left" className="structure-item" title="media-left">
                <Image size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
              </Media>
              <Media tag="div" type="content" className="structure-item is-structure-right" title="media-content">
                <Content>
                  <p>
                    <strong>John Smith</strong>
                    {' '}
                    <small>@johnsmith</small>
                    {' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </Content>
                <Level>
                  <Level tag="div" type="left">
                    <Level tag="a" type="item">
                      <Icon name="reply" size="small" />
                    </Level>
                    <Level tag="a" type="item">
                      <Icon name="reply" size="retweet" />
                    </Level>
                    <Level tag="a" type="item">
                      <Icon name="reply" size="heart" />
                    </Level>
                  </Level>
                </Level>
              </Media>
              <Media tag="div" type="right" className="structure-item" title="media-right">
                <Delete />
              </Media>
            </Media>
          </div>
          <div className="example">
            <MediaExample />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {MediaExampleSource}
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              You can include
              {' '}
              <em>any</em>
              {' '}
              other Bulma element, like inputs, textareas, icons, buttons... or even a
              {' '}
              <strong>nav bar</strong>.
            </p>
          </Content>
          <div className="example">
            <MediaForm />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {MediaFormSource}
              </PrismCode>
            </pre>
          </figure>
          <Title tag="h3">Nesting</Title>
          <Content>
            <p>
              You can nest media objects up to
              {' '}
              <strong>3 levels</strong>
              {' '}
              deep.
            </p>
          </Content>
          <div className="example">
            <MediaNesting />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {MediaNestingSource}
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
