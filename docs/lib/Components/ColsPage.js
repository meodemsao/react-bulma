import React from 'react';
import {
  Cols,
  Col,
  Notification,
  Container,
  Content,
  Title,
  Message,
  MessageHeader,
  MessageBody
} from 'reactbulma';

export default class ColsPage extends React.Component {
  render() {
    return (
      <Container>
        <Cols>
          <Col>
            <Notification color="info">
              First column
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              Second column
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              Third column
            </Notification>
          </Col>
          <Col>
            <Notification color="danger">
              Fourth column
            </Notification>
          </Col>
        </Cols>
        <hr />
        <Title tag="h3">Sizes</Title>
        <Content>
          <p>
            If you want to change the
            {' '}
            <strong>size</strong>
            {' '}
            of a single column, you can use one the following classes:
          </p>
          <ul>
            <li>
              <code>is-three-quarters</code>
            </li>
            <li>
              <code>is-two-thirds</code>
            </li>
            <li>
              <code>is-half</code>
            </li>
            <li>
              <code>is-one-third</code>
            </li>
            <li>
              <code>is-one-quarter</code>
            </li>
          </ul>
          <p>
            The
            {' '}
            <em>other</em>
            {' '}
            columns will fill up the
            {' '}
            <strong>remaining</strong>
            {' '}
            space automatically.
          </p>
        </Content>
        <Cols>
          <Col size="three-quarters">
            <Notification color="info">is-three-quarters</Notification>
          </Col>
          <Col>
            <Notification color="warning">Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger">Auto</Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="two-thirds">
            <Notification color="info">is-two-thirds</Notification>
          </Col>
          <Col>
            <Notification color="warning">Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger">Auto</Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="half">
            <Notification color="info">is-half</Notification>
          </Col>
          <Col>
            <Notification color="warning">Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger">Auto</Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="one-thirds">
            <Notification color="info">is-one-thirds</Notification>
          </Col>
          <Col>
            <Notification color="warning">Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger">Auto</Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="one-quarter">
            <Notification color="info">one-quarter</Notification>
          </Col>
          <Col>
            <Notification color="warning">Auto</Notification>
          </Col>
          <Col>
            <Notification color="danger">Auto</Notification>
          </Col>
        </Cols>
        <Title tag="h4">12 columns</Title>
        <Content>
          <p>
            As the grid can be divided into
            {' '}
            <strong>12</strong>
            {' '}
            columns, there are size classes for each division:
          </p>
          <ul>
            <li><code>is-2</code></li>
            <li><code>is-3</code></li>
            <li><code>is-4</code></li>
            <li><code>is-5</code></li>
            <li><code>is-6</code></li>
            <li><code>is-7</code></li>
            <li><code>is-8</code></li>
            <li><code>is-9</code></li>
            <li><code>is-10</code></li>
            <li><code>is-11</code></li>
          </ul>
        </Content>
        <Message color="danger">
          <MessageHeader>Naming</MessageHeader>
          <MessageBody>
            Each modifier class is named after
            <strong>how many columns you want out of 12</strong>.
            So if you want 7 columns out of 12, use <code>is-7</code>.
          </MessageBody>
        </Message>
        <Cols>
          <Col size="2">
            <Notification color="info">
              is-2
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="3">
            <Notification color="info">
              is-3
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="4">
            <Notification color="info">
              is-4
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="5">
            <Notification color="info">
              is-5
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="6">
            <Notification color="info">
              is-6
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="7">
            <Notification color="info">
              is-7
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="8">
            <Notification color="info">
              is-8
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="9">
            <Notification color="info">
              is-9
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              1
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
        </Cols>
        <Cols>
          <Col size="11">
            <Notification color="info">
              is-11
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              1
            </Notification>
          </Col>
        </Cols>
        <Title tag="h3">Offset</Title>
        <Content>
          <p>
            While you can use
            {' '}
            <em>empty columns</em>
            {' '}
            (like
            {' '}
            <code>&lt;div class="column"&gt;&lt;/div&gt;</code>
            ) to
            create horizontal space around
            {' '}
            <code>.column</code>
            {' '}
            elements, you can also use
            {' '}
            <strong>offset</strong>
            modifiers like <code>.is-offset-x</code>:
          </p>
        </Content>
        <Cols responsive="mobile">
          <Col size="half" offset="one-quarter">
            <Notification color="info">
              <code className="html">is-half</code><br />
              <code className="html">is-offset-one-quarter</code>
            </Notification>
          </Col>
        </Cols>
        <Cols responsive="mobile">
          <Col size="4" offset="8">
            <Notification color="info">
              <code className="html">is-4</code><br />
              <code className="html">is-offset-8</code>
            </Notification>
          </Col>
        </Cols>
        <Cols responsive="mobile">
          <Col size="11" offset="4">
            <Notification color="info">
              <code className="html">is-11</code><br />
              <code className="html">is-offset-4</code>
            </Notification>
          </Col>
        </Cols>
        <Title tag="h3">Responsiveness</Title>
        <Content>
          <p>
            By default, columns are only activated from
            {' '}
            <strong>tablet</strong>
            {' '}
            onwards. This means columns are stacked
            on top of each other on <strong>mobile</strong>.
          </p>
          <p>
            If you want columns to work on
            {' '}
            <strong>mobile too</strong>
            , just add the
            {' '}
            <code>is-mobile</code>
            {' '}
            modifier on
            the <code>columns</code> container:
          </p>
        </Content>
        <Cols responsive="mobile">
          <Col>
            <Notification color="info">
              First column
            </Notification>
          </Col>
          <Col>
            <Notification color="success">
              Second column
            </Notification>
          </Col>
          <Col>
            <Notification color="warning">
              Third column
            </Notification>
          </Col>
          <Col>
            <Notification color="danger">
              Fourth column
            </Notification>
          </Col>
        </Cols>
        <Message color="info">
          <MessageHeader>Resize</MessageHeader>
          <MessageBody>
            If you want to see the difference, resize your browser and see
            {' '}
            <em>when</em>
            {' '}
            the columns are stacked and
            when they are horizontally distributed.
          </MessageBody>
        </Message>
      </Container>
    );
  }
}
