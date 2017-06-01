import React from 'react';
import {
  Container,
  Content,
  Title,
  Subtitle,
  Level,
  Field,
  Control,
  Input,
  Button
} from 'reactbulma';

export default class LevelPage extends React.Component {
  render() {
    return (
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
              <code>level</code>: main container
              <ul>
                <li><code>level-left</code> for the left side</li>
                <li>
                  <code>level-right</code> for the right side
                  <ul>
                    <li><code>level-item</code> for each individual element</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            In a
            {' '}
            <code>level-item</code>
            , you can then insert almost
            {' '}
            <em>anything</em>
            {' '}
            you want: a title, a button, a
            text input, or just simple text. No matter what elements you put inside a Bulma
            {' '}
            <code>level</code>
            , they
            will always be <strong>vertically centered</strong>.
          </p>
        </Content>
        <Level>
          <Level type="left" tag="div">
            <Level type="item">
              <Subtitle tag="p">
                <strong> 123 </strong> Post
              </Subtitle>
              <Field className="has-addons">
                <Control>
                  <Input type="text" placeholder="Find a post" />
                </Control>
                <Control>
                  <Button tag="button">Search</Button>
                </Control>
              </Field>
            </Level>
          </Level>
          <Level type="right">
            <Level type="item" tag="p">
              <strong>All</strong>
            </Level>
            <Level type="item" tag="p">
              <a>Published</a>
            </Level>
            <Level type="item" tag="p">
              <a>Drafts</a>
            </Level>
            <Level type="item" tag="p">
              <a>Deleted</a>
            </Level>
            <Level type="item" tag="p">
              <Button state="success">New</Button>
            </Level>
          </Level>
        </Level>
        <Title tag="h3">Centered level</Title>
        <Content>
          If you want a
          {' '}
          <strong>centered level</strong>
          , you can use as many
          {' '}
          <code>level-item</code>
          {' '}
          as you want, as
          long as they are
          {' '}
          <strong>direct</strong>
          {' '}
          children of the
          {' '}
          <code>level</code>
          {' '}
          container.
        </Content>
        <hr />
        <Level>
          <Level tag="div" type="item" className="has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </Level>
          <Level tag="div" type="item" className="has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </Level>
          <Level tag="div" type="item" className="has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
          </Level>
          <Level tag="div" type="item" className="has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </Level>
        </Level>
      </Container>
    );
  }
}
