import React from 'react';
import {Box, Media, Content, Image, Level, Button, Icon} from 'reactbulma';

export const ButtonInverted = (props) => {
  return (
    <div class="block">
      <Button color="primary" style="inverted">Inverted</Button>
      <Button color="info" style="inverted">Inverted</Button>
      <Button color="success" style="inverted">Inverted</Button>
      <Button color="danger" style="inverted">Inverted</Button>
    </div>
  )
};

export default ButtonInverted;