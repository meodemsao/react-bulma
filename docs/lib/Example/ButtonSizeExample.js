import React from 'react';
import {Box, Media, Content, Image, Level, Button, Icon} from 'reactbulma';

const ButtonSize = (props) => {
  return(
    <div class="block">
      <Button size="small">Small</Button>
      <Button >Normal</Button>
      <Button size="Medium">Medium</Button>
      <Button size="Large">Large</Button>
    </div>
  )
};

export default ButtonSize;
