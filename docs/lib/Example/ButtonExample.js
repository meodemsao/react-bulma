import React from 'react';
import { Box, Media, Content, Image, Level, Button, Icon } from 'reactbulma';

export const ButtonColor = () => {
  return (
    <div>
      <div className="block">
        <Button>Button</Button>
        <Button color="white">White</Button>
        <Button color="light">Light</Button>
        <Button color="dark">Dark</Button>
        <Button color="black">Black</Button>
        <Button color="link">Link</Button>
      </div>
      <div className="block">
        <Button>Button</Button>
        <Button color="primary">Primary</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
};

export default ButtonColor;
