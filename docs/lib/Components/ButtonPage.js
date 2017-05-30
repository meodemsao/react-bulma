import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  Container,
  Cols,
  Col,
  Content,
  Title,
  Subtitle
} from 'reactbulma';

import ButtonColor from '../Example/Button/ButtonExample';
const ButtonColorSource = require('!!raw!../Example/Button/ButtonExample');

import ButtonSize from '../Example/Button/ButtonSizeExample';
const ButtonSizeSource = require('!!raw!../Example/Button/ButtonSizeExample');

import ButtonOutline from '../Example/Button/ButtonOutlineExample';
const ButtonOutlineSource = require('!!raw!../Example/Button/ButtonOutlineExample');

import ButtonInverted from '../Example/Button/ButtonInvertedExample';
const ButtonInvertedSource = require('!!raw!../Example/Button/ButtonInvertedExample');

import ButtonFontAwesome from '../Example/Button/ButtonFontAwesomeExample';
const ButtonFontAwesomeSource = require('!!raw!../Example/Button/ButtonFontAwesomeExample');

import ButtonGroup from '../Example/Button/ButtonGroupExample';
const ButtonGroupSource = require('!!raw!../Example/Button/ButtonGroupExample');

import ButtonAddons from '../Example/Button/ButtonAddonsExample';
const ButtonAddonsSource = require('!!raw!../Example/Button/ButtonAddonsExample');

export default class ButtonPage extends React.Component {
  render() {
    return (
      <Container>
        <Title tag="h1">Buttons</Title>
        <Subtitle tag="h2">
          The classic
          {' '}
          <strong>button</strong>
          , in different colors, sizes, and states
        </Subtitle>
        <hr />
        <Cols>
          <Col size="half">
            <ButtonColor />
          </Col>
          <Col>
            <pre>
              <PrismCode className="language-jsx">
                {ButtonColorSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">Size</Title>
        <Cols>
          <Col size="half">
            <ButtonSize />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonSizeSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">Styles</Title>
        <Subtitle tag="h4">Outline</Subtitle>
        <Cols>
          <Col size="half">
            <ButtonOutline />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonOutlineSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <Subtitle tag="h4">Inverted (the text color becomes the background color, and vice-versa)</Subtitle>
        <Cols>
          <Col size="half">
            <ButtonInverted />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonInvertedSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">States</Title>
        <Subtitle tag="h4">Normal</Subtitle>

        <Subtitle tag="h4">With awesome font</Subtitle>
        <Cols>
          <Col size="half">
            <ButtonFontAwesome />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonFontAwesomeSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">Button group</Title>
        <Content>
          <p>
            If you want to
            {' '}
            <strong>group</strong>
            {' '}
            buttons together, use the
            {' '}
            <code>is-grouped</code>
            {' '}
            modifier on the
            <code>field</code> container:
            Save changes
            Cancel
            Delete post
          </p>
        </Content>
        <Cols>
          <Col size="half">
            <ButtonGroup />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonGroupSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">Button addons</Title>
        <Content>
          <p>
            If you want to use buttons as
            {' '}
            <strong>addons</strong>
            , use the
            {' '}
            <code>has-addons</code>
            {' '}
            modifier on the
            <code>field</code> container:
            Left
            Center
            Right
          </p>
        </Content>
        <Cols>
          <Col size="half">
            <ButtonAddons />
          </Col>
          <Col size="half">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonAddonsSource}
              </PrismCode>
            </pre>
          </Col>
        </Cols>
      </Container>
    );
  }
}
