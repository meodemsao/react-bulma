import React from 'react';
import { PrismCode } from 'react-prism'
import {
  Container,
  Content,
  Title,
  Subtitle
} from 'reactbulma';

import ContentExample from '../Example/Content/ContentExample';
const ContentExampleSource = require('!!raw!../Example/Content/ContentExample');

import ContentSmall from '../Example/Content/ContentSmall';
import ContentMedium from '../Example/Content/ContentMedium';
import ContentLarge from '../Example/Content/ContentLarge';

export default class ContentPage extends React.Component {
  render() {
    return (
      <Container>
        <Title>Content</Title>
        <Subtitle>A single class to handle WYSIWYG generated content, where only <strong>HTML tags</strong> are available</Subtitle>
        <hr />
        <Content>
          <p>
            When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use
            {' '}
            <code>content</code>
            {' '}
            as container. It can handle almost any HTML tag:
          </p>
          <ul>
            <li>
              <code>{'<p>'}</code>
              {' '}
              paragraphs
            </li>
            <li>
              <code>{'<ul>'}</code>
              {' '}
              <code>{'<li>'}</code>
              {' '}
              <code>{'<dl>'}</code>
              {' '}
              lists
            </li>
            <li>
              <code>{'<h1>'}</code>
              {' '}
              to
              {' '}
              <code>{'<h6>'}</code>
              {' '}
              headings
            </li>
            <li>
              <code>{'<blockquote>'}</code>
              {' '}
              quotes
            </li>
            <li>
              <code>{'<em>'}</code>
              {' '}
              and
              {' '}
              <code>{'<strong>'}</code>
            </li>
            <li>
              <code>{'<table>'}</code>
              {' '}
              <code>{'<tr>'}</code>
              {' '}
              <code>{'<th>'}</code>
              {' '}
              <code>{'<td>'}</code>
              {' '}
              tables
            </li>
          </ul>
          <p>
            This
            {' '}
            <code>content</code>
            {' '}
            class can be used in
            {' '}
            <em>any</em>
            {' '}
            context where you just want to (or can only) write some
            {' '}
            <strong>text</strong>. For example, it's used for the paragraph you're currently reading.</p>
        </Content>
        <div className="example">
          <ContentExample />
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {ContentExampleSource}
            </PrismCode>
          </pre>
        </figure>
        <hr />
        <Title tag="h3">Sizes</Title>
        <Content>
          <p>
            You can use the
            {' '}
            <code>is-small</code>,
            {' '}
            <code>is-medium</code>
            {' '}
            and
            {' '}
            <code>is-large</code>
            {' '}
            modifiers to change the font size.
          </p>
        </Content>
        <div className="example">
          <ContentSmall />
        </div>
        <div className="example">
          <ContentMedium />
        </div>
        <div className="example">
          <ContentLarge />
        </div>
      </Container>
    );
  }
}
