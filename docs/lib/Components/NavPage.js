/**
 * Created by anvu69 on 6/13/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import NavExample from '../Example/Nav/NavExample';
const NavExampleSource = require('!!raw!../Example/Nav/NavExample');

import NavModifier from '../Example/Nav/NavModifier';
const NavModifierSource = require('!!raw!../Example/Nav/NavExample');

export default class NavPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Nav</Title>
          <Subtitle>
            A responsive horizontal <strong>nav bar</strong> that can contain links, tabs, buttons, icons, and a logo
          </Subtitle>
          <hr />
          <Content>
            <p>
              The
              {' '}
              <code>{'<Nav />'}</code>
              {' '}
              container can have
              {' '}
              <strong>3 parts</strong>:
            </p>
            <ul>
              <li><code>{'<NavLeft />'}</code></li>
              <li><code>{'<NavCenter />'}</code></li>
              <li><code>{'<NavRight />'}</code></li>
            </ul>
            <p>
              Each nav item needs to be wrapped in a
              {' '}
              <code>{'<NavItem />'}</code>
              {' '}
              element.
            </p>
            <p>
              For responsiveness,
              {' '}
              <strong>2 additional</strong>
              {' '}
              classes are available:
            </p>
            <ul>
              <li><code>{'<NavToggle />'}</code> for the hamburger menu on mobile</li>
              <li><code>{'<NavRight navMenu />'}</code> for menu that is collapsable on mobile (you can combine it with <code>{'<NavRight />'}</code>)</li>
              <li>toggle <code>active</code> on <code>{'<NavToggle />'}</code> and <code>{'<NavRight navMenu />'}</code> when <code>{'<NavToggle />'}</code> was clicked</li>
            </ul>
          </Content>
          <div className="example is-paddingless">
            <NavExample />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {NavExampleSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Modifiers</Title>
          <Content>
            <ul>
              <li>the <code>{'<Nav />'}</code> container can have a <strong>shadow</strong> by adding the <code>shadow</code> modifier</li>
              <li>the <code>{'<NavItem />'}</code> can become <strong>active</strong> by adding the <code>active</code> modifier</li>
              <li>the <code>{'<NavItem />'}</code> can become a <strong>tab</strong> by adding the <code>tab</code> modifier</li>
            </ul>
            <p>
              To optimise the space on desktop, but also allow the mobile view to be usable, you can
              {' '}
              <strong>duplicate</strong>
              {' '}
              nav items in both
              {' '}
              <code>{'<NavLeft />'}</code>
              {' '}
              and
              {' '}
              <code>{'<NavRight />'}</code>, and show/hide them with
              {' '}
              <a href="http://bulma.io/documentation/modifiers/responsive-helpers/">responsive helpers</a>.
            </p>
          </Content>
        </Container>
        <div className="example is-paddingless">
          <NavModifier />
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {NavModifierSource}
            </PrismCode>
          </pre>
        </figure>
      </Section>
    );
  }
}
