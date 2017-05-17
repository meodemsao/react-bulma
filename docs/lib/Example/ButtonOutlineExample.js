import React from 'react';
import {Box, Media, Content, Image, Level, Button, Icon} from 'reactbulma';

export const ButtonOutlined = (props) => {
  return (
    <div class="block">
      <Button color="primary" style="outlined">Outlined</Button>
      <Button color="info" style="outlined">Outlined</Button>
      <Button color="success" style="outlined">Outlined</Button>
      <Button color="danger" style="outlined">Outlined</Button>
    </div>
  )
};

export default ButtonOutlined;