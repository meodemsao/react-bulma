import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Cols,
  Col,
  Box,
  Media,
  Content,
  Image,
  Level,
  Title,
  Subtitle,
  Button,
  Icon
} from 'reactbulma';

import ButtonColor from '../Example/ButtonExample';
const ButtonColorSource = require('!!raw!../Example/ButtonExample');

import ButtonSize from '../Example/ButtonSizeExample';
const ButtonSizeSource = require('!!raw!../Example/ButtonSizeExample');

import ButtonOutline from '../Example/ButtonOutlineExample';
const ButtonOutlineSource = require('!!raw!../Example/ButtonOutlineExample');

import ButtonInverted from '../Example/ButtonInvertedExample';
const ButtonInvertedSource = require('!!raw!../Example/ButtonInvertedExample');

import ButtonFontAwesome from '../Example/ButtonFontAwesomeExample';
const ButtonFontAwesomeSource = require('!!raw!../Example/ButtonFontAwesomeExample');

import ButtonGroup from '../Example/ButtonGroupExample';
const ButtonGroupSource = require('!!raw!../Example/ButtonGroupExample');

import ButtonAddons from '../Example/ButtonAddonsExample';
const ButtonAddonsSource = require('!!raw!../Example/ButtonAddonsExample');

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
          <Col size="half">
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
        <Subtitle tag="h4">Inverted</Subtitle>
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
