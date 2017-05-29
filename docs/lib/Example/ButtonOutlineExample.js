import React from 'react';
import { Box, Media, Content, Image, Level, Button, Icon } from 'reactbulma';

export const ButtonOutlined = () => {
  return (
    <div className="block">
      <Button color="primary" state="outlined">Outlined</Button>
      <Button color="info" state="outlined">Outlined</Button>
      <Button color="success" state="outlined">Outlined</Button>
      <Button color="danger" state="outlined">Outlined</Button>
    </div>
  );
};

export default ButtonOutlined;
