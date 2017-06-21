import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  Cols,
  Col,
  Container,
  Content,
  MessageBody,
  Message,
  Title,
  Section,
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

import ButtonInvertOutline from '../Example/Button/ButtonInvertOutline';
const ButtonInvertOutlineSource = require('!!raw!../Example/Button/ButtonInvertOutline');

import ButtonStateNormal from '../Example/Button/ButtonStateNormal';
const ButtonStateNormalSource = require('!!raw!../Example/Button/ButtonStateNormal');

import ButtonStateHover from '../Example/Button/ButtonStateHover';
const ButtonStateHoverSource = require('!!raw!../Example/Button/ButtonStateHover');

import ButtonStateFocus from '../Example/Button/ButtonStateFocus';
const ButtonStateFocusSource = require('!!raw!../Example/Button/ButtonStateFocus');

import ButtonStateActive from '../Example/Button/ButtonStateActive';
const ButtonStateActiveSource = require('!!raw!../Example/Button/ButtonStateActive');

import ButtonStateLoading from '../Example/Button/ButtonStateLoading';
const ButtonStateLoadingSource = require('!!raw!../Example/Button/ButtonStateLoading');

import ButtonStateDisabled from '../Example/Button/ButtonStateDisabled';
const ButtonStateDisabledSource = require('!!raw!../Example/Button/ButtonStateDisabled');

import ButtonFontAwesome from '../Example/Button/ButtonFontAwesomeExample';
const ButtonFontAwesomeSource = require('!!raw!../Example/Button/ButtonFontAwesomeExample');

import ButtonFontAwesomeSquare from '../Example/Button/ButtonFontAwesomeSquare';
const ButtonFontAwesomeSquareSource = require('!!raw!../Example/Button/ButtonFontAwesomeSquare');

import ButtonGroup from '../Example/Button/ButtonGroupExample';
const ButtonGroupSource = require('!!raw!../Example/Button/ButtonGroupExample');

import ButtonAddons from '../Example/Button/ButtonAddonsExample';
const ButtonAddonsSource = require('!!raw!../Example/Button/ButtonAddonsExample');

import ButtonGroupWithAddons from '../Example/Button/ButtonGroupWithAddons';
const ButtonGroupWithAddonsSource = require('!!raw!../Example/Button/ButtonGroupWithAddons');

export default class ButtonPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Buttons</Title>
          <Subtitle>
            The classic
            {' '}
            <strong>button</strong>
            , in different colors, sizes, and states
          </Subtitle>
          <hr />
          <Cols>
            <Col>
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
            <Col>
              <ButtonSize />
            </Col>
            <Col>
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
            <Col>
              <ButtonInverted />
            </Col>
            <Col>
              <pre>
                <PrismCode className="language-jsx">
                  {ButtonInvertedSource}
                </PrismCode>
              </pre>
            </Col>
          </Cols>
          <Subtitle tag="h4">Invert Outlined (the invert color becomes the text and border colors)</Subtitle>
          <Cols>
            <Col>
              <ButtonInvertOutline />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonInvertOutlineSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">States</Title>
          <Subtitle tag="h4">Normal</Subtitle>
          <Cols>
            <Col>
              <ButtonStateNormal />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateNormalSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Hover</Subtitle>
          <Cols>
            <Col>
              <ButtonStateHover />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateHoverSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Focus</Subtitle>
          <Cols>
            <Col>
              <ButtonStateFocus />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateFocusSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Active</Subtitle>
          <Cols>
            <Col>
              <ButtonStateActive />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateActiveSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Loading</Subtitle>
          <Cols>
            <Col>
              <ButtonStateLoading />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateLoadingSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Static</Subtitle>
          <Cols>
            <Col>
              <Content>
                <p>
                  You can create a <strong>non-interactive button</strong> by using the <code>is-static</code> modifier. This is useful to align a text label with an input, for example when using <a href="http://bulma.io/documentation/elements/form#form-addons">form addons</a>.
                </p>
              </Content>
              <Button tag="span" state="static">Static</Button>
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {'<Button tag="span" state="static">Static</Button>'}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Disabled</Subtitle>
          <Cols>
            <Col>
              <ButtonStateDisabled />
              <Message tag="div" color="danger">
                <MessageBody>
                  <p>The <code>is-disabled</code> CSS class has been deprecated in favor of the <code>disabled</code> HTML attribute. <a href="https://github.com/jgthms/bulma/issues/276">Learn more</a></p>
                </MessageBody>
              </Message>
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonStateDisabledSource}
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
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
          <Cols>
            <Col>
              <Content>
                <p>
                  If the button only contains an icon, Bulma will make sure the button remains
                  {' '}
                  <strong>square</strong>, no matter the size of the button
                  {' '}
                  <em>or</em>
                  {' '}
                  of the icon.</p>
              </Content>
              <ButtonFontAwesomeSquare />
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {ButtonFontAwesomeSquareSource}
                  </PrismCode>
                </pre>
              </figure>
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
          <div className="example">
            <ButtonGroup />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonGroupSource}
              </PrismCode>
            </pre>
          </figure>
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
          <div className="example">
            <ButtonAddons />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonAddonsSource}
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Button group with addons</Title>
          <Content>You can group together addons as well:</Content>
          <div className="example">
            <ButtonGroupWithAddons />
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {ButtonGroupWithAddonsSource}
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
