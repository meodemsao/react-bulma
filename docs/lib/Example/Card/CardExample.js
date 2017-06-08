import React from 'react';
import { Card, Content, Image, Media } from 'reactbulma';

export const CardExample = () => {
  return (
    <Card>
      <Card type="image">
        <Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      </Card>
      <Card type="content">
        <Media>
          <Media type="left">
            <Image size="48x48" src="http://bulma.io/images/placeholders/96x96.png" />
          </Media>
          <Media type="content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </Media>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          {' '}
          <a>@bulmaio</a>.
          {' '}
          <a>#css</a>
          {' '}
          <a>#responsive</a>
          <br />
          <small>11:09 PM - 1 Jan 2016</small>
        </Content>
      </Card>
    </Card>
  );
};

export default CardExample;
