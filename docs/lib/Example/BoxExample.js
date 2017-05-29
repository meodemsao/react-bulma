import React from 'react';
import { Box, Media, Content, Image, Level, Icon } from 'reactbulma';

const Example = () => {
  return (
    <Box>
      <Media>
        <Media type="left">
          <Image
            src="http://bulma.io/images/placeholders/128x128.png"
            size="128x128"
          />
        </Media>
        <Media type="content">
          <Content>
            <p>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
              egestas. Nullam condimentum luctus turpis.
            </p>
          </Content>
          <Level mobile>
            <Level tag="div" type="left">
              <Level tag="a" type="item">
                <Icon name="github" size="small" />
              </Level>
            </Level>
          </Level>
        </Media>
      </Media>
    </Box>
  );
};

export default Example;
