import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Control,
  Button,
  Field,
  Input,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

import LevelExample from '../Example/Level/LevelExample';
import TitlePage from "./TitlePage";
const LevelExampleSoure = require('!!raw!../Example/Level/LevelExample');

import LevelCentered from '../Example/Level/LevelCentered';
const LevelCenteredSource = require('!!raw!../Example/Level/LevelCentered');

import LevelCentered2 from '../Example/Level/LevelCentered2';
const LevelCentered2Source = require('!!raw!../Example/Level/LevelCentered2');

import LevelMobile from '../Example/Level/LevelMobile';
const LevelMobileSource = require('!!raw!../Example/Level/LevelMobile');

export default class LevelPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Level</Title>
          <Subtitle>
            A multi-purpose horizontal level, which can contain almost any other element
          </Subtitle>
          <hr />
          <Content>
            <p>The <strong>structure</strong> of a level is the following:</p>
            <ul>
              <li>
                <code>{'<Level />'}</code>: main container
                <ul>
                  <li><code>{'<LevelLeft />'}</code> for the left side</li>
                  <li>
                    <code>{'<LevelRight />'}</code> for the right side
                    <ul>
                      <li><code>{'<LevelItem />'}</code> for each individual element</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              In a
              {' '}
              <code>{'<LevelItem />'}</code>
              , you can then insert almost
              {' '}
              <em>anything</em>
              {' '}
              you want: a title, a button, a
              text input, or just simple text. No matter what elements you put inside a Bulma
              {' '}
              <code>{'<Level />'}</code>
              , they will always be
              {' '}
              <strong>vertically centered</strong>.
            </p>
          </Content>
          <div className="structure">
            <Level title="level" className="structure-item is-structure-container">
              <LevelLeft className="structure-item" title="level-left">
                <LevelItem>
                  <p className="subtitle is-5">
                    <strong>123</strong> posts
                  </p>
                </LevelItem>
                <LevelItem>
                  <Field addons>
                    <Control>
                      <Input type="text" placeholder="Find a post" />
                    </Control>
                    <Control>
                      <Button>Search</Button>
                    </Control>
                  </Field>
                </LevelItem>
              </LevelLeft>
              <LevelRight className="structure-item" title="level-right">
                <LevelItem tag="p">
                  <strong>All</strong>
                </LevelItem>
                <LevelItem tag="p">
                  <a>Published</a>
                </LevelItem>
                <LevelItem tag="p">
                  <a>Drafts</a>
                </LevelItem>
                <LevelItem tag="p">
                  <a>Deleted</a>
                </LevelItem>
                <LevelItem tag="p">
                  <Button color="success">
                    New
                  </Button>
                </LevelItem>
              </LevelRight>
            </Level>
          </div>
          <div className="example">
            <LevelExample />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {LevelExampleSoure}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Centered level</Title>
          <Content>
            If you want a
            {' '}
            <strong>centered level</strong>
            , you can use as many
            {' '}
            <code>{'<LevelItem />'}</code>
            {' '}
            as you want, as
            long as they are
            {' '}
            <strong>direct</strong>
            {' '}
            children of the
            {' '}
            <code>{'<Level />'}</code>
            {' '}
            container.
          </Content>
          <div className="example">
            <LevelCentered />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {LevelCenteredSource}
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <LevelCentered2 />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {LevelCentered2Source}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Mobile level</Title>
          <Content>
            By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the <code>mobile</code> modifier on the <code>{'<Level />'}</code> container.
          </Content>
          <div className="example">
            <LevelMobile />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {LevelMobileSource}
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
