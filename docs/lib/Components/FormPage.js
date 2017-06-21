/**
 * Created by anvu69 on 6/12/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  Col,
  Cols,
  Container,
  Content,
  Control,
  Field,
  FieldBody,
  FieldLabel,
  Help,
  Icon,
  Input,
  Label,
  TextArea,
  Title,
  Section,
  Select,
  Subtitle
} from 'reactbulma';

export default class FormPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Form</Title>
          <Subtitle>All generic <strong>form controls</strong>, designed for consistency</Subtitle>
          <hr />
          <Content>
            <p>The following form controls <strong>classes</strong> are supported:</p>
            <ul>
              <li><code>{'<Label />'}</code></li>
              <li><code>{'<Input />'}</code></li>
              <li><code>{'<TextArea />'}</code></li>
              <li><code>{'<Select />'}</code></li>
              <li><code>{'<Input type="checkbox">'}</code></li>
              <li><code>{'<Input type="radio" />'}</code></li>
              <li><code>{'<Button />'}</code></li>
              <li><code>{'<Input type="help" />'}</code></li>
            </ul>
            <p>
              Each of them should be wrapped in a
              {' '}
              <code>{'<Control />'}</code>
              {' '}
              container.
              <br />
              When combining several controls in a
              {' '}
              <strong>form</strong>, use the
              {' '}
              <code>{'<Field />'}</code>
              {' '}
              class as a
              {' '}
              <strong>container</strong>, to keep the spacing consistent.
            </p>
          </Content>
          <Cols>
            <Col size="half">
              <Field>
                <Label>Name</Label>
                <Control>
                  <Input type="text" placeholder="Text input" />
                </Control>
              </Field>
              <Field>
                <Label>Username</Label>
                <Control iconLeft iconRight>
                  <Input type="text" placeholder="Text input" value="bulma" />
                  <Icon size="small" left name="user" />
                  <Icon size="small" right name="check" />
                </Control>
                <Help color="success">This username is available</Help>
              </Field>
              <Field>
                <Label>Email</Label>
                <Control iconLeft iconRight>
                  <Input color="danger" type="text" placeholder="Email input" value="hello@" />
                  <Icon size="small" left name="envelope" />
                  <Icon size="small" right name="warning" />
                </Control>
                <Help color="danger">This email is invalid</Help>
              </Field>
              <Field>
                <Label>Subject</Label>
                <Control>
                  <Select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Label>Message</Label>
                <Control>
                  <TextArea placeholder="Textarea" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label type="checkbox">
                    <Input type="checkbox" />{' '}I agree to the <a href="">terms and conditions</a>
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label type="radio">
                    <Input type="radio" name="question" />{' '}Yes
                  </Label>
                  <Label type="radio">
                    <Input type="radio" name="question" />{' '}No
                  </Label>
                </Control>
              </Field>
              <Field grouped>
                <Control>
                  <Button color="primary">Submit</Button>
                </Control>
                <Control>
                  <Button color="link">Cancel</Button>
                </Control>
              </Field>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">Colors</Title>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input color="primary" type="text" placeholder="Primary input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input color="info" type="text" placeholder="Info input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input color="success" type="text" placeholder="Success input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input color="warning" type="text" placeholder="Warning input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input color="danger" type="text" placeholder="Danger input" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input color="primary" type="text" placeholder="Primary input" />\n' +
                      '\t</Control>\n' +
                      '</Field>' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input color="info" type="text" placeholder="Info input" />\n' +
                      '\t</Control>\n' +
                      '</Field>' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input color="success" type="text" placeholder="Success input" />\n' +
                      '\t</Control>\n' +
                      '</Field>' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input color="warning" type="text" placeholder="Warning input" />\n' +
                      '\t</Control>\n' +
                      '</Field>' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input color="danger" type="text" placeholder="Danger input" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">Sizes</Title>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input size="small" type="text" placeholder="Small input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input type="text" placeholder="Normal input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input size="medium" type="text" placeholder="Medium input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input size="large" type="text" placeholder="Large input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Select size="small">
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Select size="medium">
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Select size="large">
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input size="small" type="text" placeholder="Small input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input type="text" placeholder="Normal input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input size="medium" type="text" placeholder="Medium input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input size="large" type="text" placeholder="Large input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Select size="small">\n' +
                      '\t\t\t<option>Select dropdown</option>\n' +
                      '\t\t\t<option>With options</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Select>\n' +
                      '\t\t\t<option>Select dropdown</option>\n' +
                      '\t\t\t<option>With options</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Select size="medium">\n' +
                      '\t\t\t<option>Select dropdown</option>\n' +
                      '\t\t\t<option>With options</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Select size="large">\n' +
                      '\t\t\t<option>Select dropdown</option>\n' +
                      '\t\t\t<option>With options</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">States</Title>
          <Subtitle tag="h4">Normal</Subtitle>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input type="text" placeholder="Normal input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <TextArea placeholder="Normal textarea" />
                </Control>
              </Field>
            </Col>
            <Col>
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t <Input type="text" placeholder="Normal input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<TextArea placeholder="Normal textarea" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Hover</Subtitle>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input type="text" state="hovered" placeholder="Hovered input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <TextArea state="hovered" placeholder="Hovered textarea" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input type="text" state="hovered" placeholder="Hovered input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<TextArea state="hovered" placeholder="Hovered textarea" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Focus</Subtitle>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input type="text" state="focused" placeholder="Focused input" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <TextArea state="focused" placeholder="Focused textarea" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input type="text" state="focused" placeholder="Focused input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<TextArea state="focused" placeholder="Focused textarea" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Loading</Subtitle>
          <Cols>
            <Col size="half">
              <Field>
                <Control loading>
                  <Input type="text" placeholder="Loading input" />
                </Control>
              </Field>
              <Field>
                <Control tag="div">
                  <Select state="loading">
                    <option>Loading dropdown</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Control loading>
                  <TextArea placeholder="Loading textarea" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control loading>\n' +
                      '\t\t<Input type="text" placeholder="Loading input" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control tag="div">\n' +
                      '\t\t<Select state="loading">\n' +
                      '\t\t\t<option>Loading dropdown</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control loading>\n' +
                      '\t\t<TextArea placeholder="Loading textarea" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Subtitle tag="h4">Disabled</Subtitle>
          <Cols>
            <Col size="half">
              <Field>
                <Control>
                  <Input type="text" placeholder="Disabled Input" disabled />
                </Control>
              </Field>
              <Field>
                <Control tag="div">
                  <Select disabled>
                    <option>Disabled dropdown</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Control>
                  <TextArea placeholder="Disabled textarea" disabled />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label type="checkbox" disabled>
                    <Input type="checkbox" disabled />
                    {' '}Remember me
                  </Label>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Label type="radio" disabled>
                    <Input type="radio" name="question" disabled />
                    {' '}Yes
                  </Label>
                  <Label type="radio" disabled>
                    <Input type="radio" name="question" disabled />
                    {' '}No
                  </Label>
                </Control>
              </Field>
              <Field grouped>
                <Control>
                  <Button color="primary" disabled>Submit</Button>
                </Control>
                <Control>
                  <Button disabled>Cancel</Button>
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Input type="text" placeholder="Disabled Input" disabled />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control tag="div">\n' +
                      '\t\t<Select disabled>\n' +
                      '\t\t\t<option>Disabled dropdown</option>\n' +
                      '\t\t</Select>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<TextArea placeholder="Disabled textarea" disabled />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Label type="checkbox" disabled>\n' +
                      '\t\t\t<Input type="checkbox" disabled /> Remember me\n' +
                      '\t\t</Label>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Label type="radio" disabled>\n' +
                      '\t\t\t<Input type="radio" name="question" disabled /> Yes\n' +
                      '\t\t</Label>\n' +
                      '\t\t<Label type="radio" disabled>\n' +
                      '\t\t\t<Input type="radio" name="question" disabled /> No\n' +
                      '\t\t</Label>\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field grouped>\n' +
                      '\t<Control>\n' +
                      '\t\t<Button color="primary" disabled>Submit</Button>\n' +
                      '\t</Control>\n' +
                      '\t<Control>\n' +
                      '\t\t<Button disabled>Cancel</Button>\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">With icons</Title>
          <Content>
            <p>
              You can append one of 2 <strong>modifiers</strong> on a control:
            </p>
            <ul>
              <li>
                <code>{'<Control iconLeft>'}</code>
              </li>
              <li>
                and/or <code>{'<Control iconRight>'}</code>
              </li>
            </ul>
            <p>
              You also need to add a modifier on the <strong>icon</strong>:
            </p>
            <ul>
              <li>
                <code>{'<Icon left />'}</code> if <code>{'<Control iconLeft>'}</code> is used
              </li>
              <li>
                <code>{'<Icon right />'}</code> if <code>{'<Control iconRight>'}</code> is used
              </li>
            </ul>
            <p>
              The size of the <strong>input</strong> will define the size of the icon container.
            </p>
          </Content>
          <Cols>
            <Col size="half">
              <Field>
                <Control iconLeft>
                  <Input type="email" placeholder="Email" />
                  <Icon left size="small" name="envelope" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft>
                  <Input type="password" placeholder="Password" />
                  <Icon left size="small" name="lock" />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button color="success">Login</Button>
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control iconLeft>\n' +
                      '\t\t<Input type="email" placeholder="Email" />\n' +
                      '\t\t<Icon left size="small" name="envelope" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control iconLeft>\n' +
                      '\t\t<Input type="password" placeholder="Password" />\n' +
                      '\t\t<Icon left size="small" name="lock" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control>\n' +
                      '\t\t<Button color="success">Login</Button>\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="half">
              <Content>
                <p>
                  You can now append icons to <strong>select dropdowns</strong> as well.
                </p>
              </Content>
              <Field>
                <Control iconLeft>
                  <Select>
                    <option selected>Country</option>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                  <Icon left size="small" name="globe" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Control iconLeft>\n' +
                      '\t\t<Select>\n' +
                      '\t\t\t<option selected>Country</option>\n' +
                      '\t\t\t<option>Select dropdown</option>\n' +
                      '\t\t\t<option>With options</option>\n' +
                      '\t\t</Select>\n' +
                      '\t\t<Icon left size="small" name="globe" />\n' +
                      '\t</Control>' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Content>
            <p>
              If the control contains an icon, Bulma will make sure the icon remains <strong>centered</strong>, no matter the size of the input <em>or</em> of the icon.
            </p>
          </Content>
          <Cols>
            <Col size="half">
              <Field>
                <Label size="small">Small input</Label>
                <Control iconLeft iconRight>
                  <Input size="small" type="email" placeholder="Email" />
                  <Icon left size="small" name="envelope" />
                  <Icon right size="small" name="check" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Label size="small">Small input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input size="small" type="email" placeholder="Email" />\n' +
                      '\t\t<Icon left size="small" name="envelope" />\n' +
                      '\t\t<Icon right size="small" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="half">
              <Field>
                <Label>Normal input</Label>
                <Control iconLeft iconRight>
                  <Input type="email" placeholder="Email" />
                  <Icon left size="small" name="envelope" />
                  <Icon right size="small" name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" placeholder="Email" />
                  <Icon left name="envelope" />
                  <Icon right name="check" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Label>Normal input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" placeholder="Email" />\n' +
                      '\t\t<Icon left size="small" name="envelope" />\n' +
                      '\t\t<Icon right size="small" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" placeholder="Email" />\n' +
                      '\t\t<Icon left name="envelope" />\n' +
                      '\t\t<Icon right name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="half">
              <Field>
                <Label size="medium">Medium input</Label>
                <Control iconLeft iconRight>
                  <Input type="email" size="medium" placeholder="Email" />
                  <Icon left size="small" name="envelope" />
                  <Icon right size="small" name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" size="medium" placeholder="Email" />
                  <Icon left name="envelope" />
                  <Icon right name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" size="medium" placeholder="Email" />
                  <Icon left size="medium" name="envelope" />
                  <Icon right size="medium" name="check" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Label size="medium">Medium input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="medium" placeholder="Email" />\n' +
                      '\t\t<Icon left size="small" name="envelope" />\n' +
                      '\t\t<Icon right size="small" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="medium" placeholder="Email" />\n' +
                      '\t\t<Icon left name="envelope" />\n' +
                      '\t\t<Icon right name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="medium" placeholder="Email" />\n' +
                      '\t\t<Icon left size="medium" name="envelope" />\n' +
                      '\t\t<Icon right size="medium" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <Cols>
            <Col size="half">
              <Field>
                <Label size="large">Large input</Label>
                <Control iconLeft iconRight>
                  <Input type="email" size="large" placeholder="Email" />
                  <Icon left size="small" name="envelope" />
                  <Icon right size="small" name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" size="large" placeholder="Email" />
                  <Icon left name="envelope" />
                  <Icon right name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" size="large" placeholder="Email" />
                  <Icon left size="medium" name="envelope" />
                  <Icon right size="medium" name="check" />
                </Control>
              </Field>
              <Field>
                <Control iconLeft iconRight>
                  <Input type="email" size="large" placeholder="Email" />
                  <Icon left size="large" name="envelope" />
                  <Icon right size="large" name="check" />
                </Control>
              </Field>
            </Col>
            <Col size="half">
              <figure className="highlight">
                <pre>
                  <PrismCode className="language-jsx">
                    {
                      '<Field>\n' +
                      '\t<Label size="large">Large input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="large" placeholder="Email" />\n' +
                      '\t\t<Icon left size="small" name="envelope" />\n' +
                      '\t\t<Icon right size="small" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Label size="large">Large input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="large" placeholder="Email" />\n' +
                      '\t\t<Icon left name="envelope" />\n' +
                      '\t\t<Icon right name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Label size="large">Large input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="large" placeholder="Email" />\n' +
                      '\t\t<Icon left size="medium" name="envelope" />\n' +
                      '\t\t<Icon right size="medium" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n' +
                      '<Field>\n' +
                      '\t<Label size="large">Large input</Label>\n' +
                      '\t<Control iconLeft iconRight>\n' +
                      '\t\t<Input type="email" size="large" placeholder="Email" />\n' +
                      '\t\t<Icon left size="large" name="envelope" />\n' +
                      '\t\t<Icon right size="large" name="check" />\n' +
                      '\t</Control>\n' +
                      '</Field>\n'
                    }
                  </PrismCode>
                </pre>
              </figure>
            </Col>
          </Cols>
          <hr />
          <Title tag="h3">Form addons</Title>
          <Content>
            <p>
              If you want to <strong>attach</strong> controls together, use the <code>has-addons</code> modifier on the <code>control</code> container:
            </p>
          </Content>
          <div className="example">
            <Field addons>
              <Control>
                <Input type="text" placeholder="Find a repository" />
              </Control>
              <Control>
                <Button color="info">Search</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons>\n' +
                  '\t<Control>\n' +
                  '\t\t<Input type="text" placeholder="Find a repository" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button color="info">Search</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              You can attach inputs, buttons, and dropdowns <strong>only</strong>.
            </p>
          </Content>
          <Content>
            <p>
              It can be useful to append a <a href="http://bulma.io/documentation/elements/button#static-button">static button</a>.
            </p>
          </Content>
          <div className="example">
            <Field addons>
              <Control>
                <Input type="text" placeholder="Your email" />
              </Control>
              <Control>
                <Button color="static">@gmail.com</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons>\n' +
                  '\t<Control>\n' +
                  '\t\t<Input type="text" placeholder="Your email"/>\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button color="static">@gmail.com</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              Use the <code>{'<Control expanded />'}</code> modifier on the element you want to fill up the remaining space (in this case, the input):
            </p>
          </Content>
          <div className="example">
            <Field addons>
              <Control>
                <Select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </Select>
              </Control>
              <Control>
                <Input type="text" placeholder="Amount of money" />
              </Control>
              <Control>
                <Button>Transfer</Button>
              </Control>
            </Field>
            <Field addons>
              <Control>
                <Select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </Select>
              </Control>
              <Control expanded>
                <Input type="text" placeholder="Amount of money" />
              </Control>
              <Control>
                <Button>Transfer</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons>\n' +
                  '\t<Control>\n' +
                  '\t\t<Select>\n' +
                  '\t\t\t<option>$</option>\n' +
                  '\t\t\t<option>£</option>\n' +
                  '\t\t\t<option>€</option>\n' +
                  '\t\t</Select>\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Input type="text" placeholder="Amount of money" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button>Transfer</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>\n' +
                  '<Field addons>\n' +
                  '\t<Control>\n' +
                  '\t\t<Select>\n' +
                  '\t\t\t<option>$</option>\n' +
                  '\t\t\t<option>£</option>\n' +
                  '\t\t\t<option>€</option>\n' +
                  '\t\t</Select>\n' +
                  '\t</Control>\n' +
                  '\t<Control expanded>\n' +
                  '\t\t<Input type="text" placeholder="Amount of money" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button>Transfer</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>\n'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              If you want a full width select dropdown, pair <code>{'<Control expanded>'}</code> with <code>{'<Select size="fullwidth">'}</code>.
            </p>
          </Content>
          <div className="example">
            <Field addons>
              <Control expanded>
                <Select size="fullwidth">
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Chile">Chile</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Venezuela">Venezuela</option>
                </Select>
              </Control>
              <Control>
                <Button type="submit" color="primary">Choose</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons>\n' +
                  '\t<Control expanded>\n' +
                  '\t\t<Select size="fullwidth">\n' +
                  '\t\t\t<option value="Argentina">Argentina</option>\n' +
                  '\t\t\t<option value="Bolivia">Bolivia</option>\n' +
                  '\t\t\t<option value="Brazil">Brazil</option>\n' +
                  '\t\t\t<option value="Chile">Chile</option>\n' +
                  '\t\t\t<option value="Colombia">Colombia</option>\n' +
                  '\t\t\t<option value="Ecuador">Ecuador</option>\n' +
                  '\t\t\t<option value="Guyana">Guyana</option>\n' +
                  '\t\t\t<option value="Paraguay">Paraguay</option>\n' +
                  '\t\t\t<option value="Peru">Peru</option>\n' +
                  '\t\t\t<option value="Suriname">Suriname</option>\n' +
                  '\t\t\t<option value="Uruguay">Uruguay</option>\n' +
                  '\t\t\t<option value="Venezuela">Venezuela</option>\n' +
                  '\t\t</Select>\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button type="submit" color="primary">Choose</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              Use the <code>has-addons-centered</code> or the <code>has-addons-right</code> modifers to alter the <strong>alignment</strong>.
            </p>
          </Content>
          <div className="example">
            <Field addons addonsCenter>
              <Control>
                <Select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </Select>
              </Control>
              <Control>
                <Input type="text" placeholder="Amount of money" />
              </Control>
              <Control>
                <Button color="primary">Transfer</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons addonsCenter>\n' +
                  '\t<Control>\n' +
                  '\t\t<Select>\n' +
                  '\t\t\t<option>$</option>\n' +
                  '\t\t\t<option>£</option>\n' +
                  '\t\t\t<option>€</option>\n' +
                  '\t\t</Select>\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Input type="text" placeholder="Amount of money" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button color="primary">Transfer</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Field addons addonsRight>
              <Control>
                <Select>
                  <option>$</option>
                  <option>£</option>
                  <option>€</option>
                </Select>
              </Control>
              <Control>
                <Input type="text" placeholder="Amount of money" />
              </Control>
              <Control>
                <Button color="primary">Transfer</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field addons addonsRight>\n' +
                  '\t<Control>\n' +
                  '\t\t<Select>\n' +
                  '\t\t\t<option>$</option>\n' +
                  '\t\t\t<option>£</option>\n' +
                  '\t\t\t<option>€</option>\n' +
                  '\t\t</Select>\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Input type="text" placeholder="Amount of money" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button color="primary">Transfer</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Form group</Title>
          <Content>
            <p>
              If you want to <strong>group</strong> controls together, use the <code>{'<Field grouped />'}</code> modifier on the <code>{'<Control />'}</code> container.
              <br />
              Use the <code>{'<Field groupedCentered />'}</code> or the <code>{'<Field groupedRight />'}</code> modifers to alter the <strong>alignment</strong>.
            </p>
            <p>
              Add the <code>{'<Control expanded />'}</code> modifier on the control element you want to <strong>fill up the remaining space</strong>.
            </p>
          </Content>
          <div className="example">
            <Field grouped>
              <Control expanded>
                <Input type="text" placeholder="Find a repository" />
              </Control>
              <Control>
                <Button color="info">Search</Button>
              </Control>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field grouped>\n' +
                  '\t<Control expanded>\n' +
                  '\t\t<Input type="text" placeholder="Find a repository" />\n' +
                  '\t</Control>\n' +
                  '\t<Control>\n' +
                  '\t\t<Button color="info">Search</Button>\n' +
                  '\t</Control>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h3">Horizontal form</Title>
          <Content>
            <p>
              If you want a
              {' '}
              <strong>horizontal</strong>
              {' '}
              form control, use the <code>{'<Field horizontal />'}</code> modifier on the <code>{'<Control />'}</code> container, in which you include:
            </p>
            <ul>
              <li>
                <code>{'<FieldLabel />'}</code> for the side label
              </li>
              <li>
                <code>{'<FieldBody />'}</code> for the input/select/textarea container
              </li>
            </ul>
            <p>
              You can of course use <code>{'<Field grouped />'}</code> or <code>{'<Field addons >'}</code> for the child elements.
            </p>
          </Content>
          <div className="example">
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>From</Label>
              </FieldLabel>
              <FieldBody>
                <Field groupded>
                  <Control expended iconLeft>
                    <Input type="text" placeholder="Name" />
                    <Icon left size="small" name="user" />
                  </Control>
                </Field>
                <Field>
                  <Control expanded iconLeft iconRight>
                    <Input color="success" type="email" placeholder="Email" value="alex@smith.com" />
                    <Icon left size="small" name="envelope" />
                    <Icon right size="small" name="check" />
                  </Control>
                  <Help color="success">This email is correct</Help>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>Department</Label>
              </FieldLabel>
              <FieldBody>
                <Field narrow>
                  <Control>
                    <Select size="fullwidth">
                      <option>Business development</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                    </Select>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>Already a member?</Label>
              </FieldLabel>
              <FieldBody>
                <Field narrow>
                  <Control>
                    <Label type="radio">
                      <Input type="radio" name="Member" /> Yes
                    </Label>
                    <Label type="radio">
                      <Input type="radio" name="Member" /> No
                    </Label>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>Subject</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Input type="text" color="danger" placeholder="e.g. Partnership opportunity" />
                  </Control>
                  <Help color="danger">This field is required</Help>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>Question</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <TextArea placeholder="Explain how we can help you" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                {/* Left empty for spacing*/}
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Button color="primary">Send message</Button>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>From</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field groupded>\n' +
                  '\t\t\t<Control expended iconLeft>\n' +
                  '\t\t\t\t<Input type="text" placeholder="Name" />\n' +
                  '\t\t\t\t<Icon left size="small" name="user" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control expanded iconLeft iconRight>\n' +
                  '\t\t\t\t<Input color="success" type="email" placeholder="Email" value="alex@smith.com" />\n' +
                  '\t\t\t\t<Icon left size="small" name="envelope" />\n' +
                  '\t\t\t\t<Icon right size="small" name="check" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t\t<Help color="success">This email is correct</Help>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>Department</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field narrow>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Select size="fullwidth">\n' +
                  '\t\t\t\t\t<option>Business development</option>\n' +
                  '\t\t\t\t\t<option>Marketing</option>\n' +
                  '\t\t\t\t\t<option>Sales</option>\n' +
                  '\t\t\t\t</Select>\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>Already a member?</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field narrow>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Label type="radio">\n' +
                  '\t\t\t\t\t<Input type="radio" name="Member" /> Yes\n' +
                  '\t\t\t\t</Label>\n' +
                  '\t\t\t\t<Label type="radio">\n' +
                  '\t\t\t\t\t<Input type="radio" name="Member" /> No\n' +
                  '\t\t\t\t</Label>\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>Subject</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Input type="text" color="danger" placeholder="e.g. Partnership opportunity" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t\t<Help color="danger">This field is required</Help>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>Question</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<TextArea placeholder="Explain how we can help you" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t\t<FieldLabel size="normal">\n' +
                  '\t\t\t{/* Left empty for spacing*/}\n' +
                  '\t\t</FieldLabel>\n' +
                  '\t\t<FieldBody>\n' +
                  '\t\t\t<Field>\n' +
                  '\t\t\t\t<Control>\n' +
                  '\t\t\t\t\t<Button color="primary">Send message</Button>\n' +
                  '\t\t\t\t</Control>\n' +
                  '\t\t\t</Field>\n' +
                  '\t\t</FieldBody>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              To preserve the
              {' '}
              <strong>vertical alignment</strong>
              {' '}
              of labels with each type and size of control, the
              {' '}
              <code>{'<FieldLabel />'}</code>
              {' '}
              comes with
              {' '}
              <strong>4 size modifiers</strong>:
            </p>
            <ul>
              <li>
                <code>{'<FieldLabel size="small" />'}</code>
              </li>
              <li>
                <code>{'<FieldLabel size="normal" />'}</code> for any <code>{'<Input />'}</code> or <code>{'<Button />'}</code>
              </li>
              <li>
                <code>{'<FieldLabel size="medium" />'}</code>
              </li>
              <li>
                <code>{'<FieldLabel size="large" />'}</code>
              </li>
            </ul>
          </Content>
          <div className="example">
            <Field horizontal>
              <FieldLabel>
                <Label>No padding</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Label type="checkbox">
                      <Input type="checkbox" /> Checkbox
                    </Label>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="small">
                <Label>Small padding</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Input size="small" type="text" placeholder="Small sized input" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="normal">
                <Label>Normal label</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Input type="text" placeholder="Normal sized input" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="medium">
                <Label>Medium label</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Input type="text" size="medium" placeholder="Medium sized input" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>
            <Field horizontal>
              <FieldLabel size="large">
                <Label>Large label</Label>
              </FieldLabel>
              <FieldBody>
                <Field>
                  <Control>
                    <Input type="text" size="large" placeholder="Large sized input" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Field horizontal>\n' +
                  '\t<FieldLabel>\n' +
                  '\t\t<Label>No padding</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Label type="checkbox">\n' +
                  '\t\t\t\t\t<Input type="checkbox" /> Checkbox\n' +
                  '\t\t\t\t</Label>\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="small">\n' +
                  '\t\t<Label>Small padding</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Input size="small" type="text" placeholder="Small sized input" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="normal">\n' +
                  '\t\t<Label>Normal label</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Input type="text" placeholder="Normal sized input" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="medium">\n' +
                  '\t\t<Label>Medium label</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Input type="text" size="medium" placeholder="Medium sized input" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>\n' +
                  '<Field horizontal>\n' +
                  '\t<FieldLabel size="large">\n' +
                  '\t\t<Label>Large label</Label>\n' +
                  '\t</FieldLabel>\n' +
                  '\t<FieldBody>\n' +
                  '\t\t<Field>\n' +
                  '\t\t\t<Control>\n' +
                  '\t\t\t\t<Input type="text" size="large" placeholder="Large sized input" />\n' +
                  '\t\t\t</Control>\n' +
                  '\t\t</Field>\n' +
                  '\t</FieldBody>\n' +
                  '</Field>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Container>
      </Section>
    );
  }
}
