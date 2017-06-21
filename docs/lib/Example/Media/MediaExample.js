import React from 'react';
import { Content, Delete, Icon, Image, Level, Media } from 'reactbulma';

export const MediaExample = () => {
  return (
    <Media>
      <Media left>
        <Image size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media>
      <Media content>
        <Content>
          <p>
            <strong>John Smith</strong>
            {' '}
            <small>@johnsmith</small>
            {' '}
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <Level tag="nav" mobile>
          <Level tag="div" type="left">
            <Level tag="a" type="item">
              <Icon size="small" name="reply" />
            </Level>
            <Level tag="a" type="item">
              <Icon size="small" name="retweet" />
            </Level>
            <Level tag="a" type="item">
              <Icon size="small" name="heart" />
            </Level>
          </Level>
        </Level>
      </Media>
      <Media right>
        <Delete />
      </Media>
    </Media>
  );
};

export default MediaExample;
