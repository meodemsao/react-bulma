import React from 'react';
import { Button } from 'reactbulma';

const ButtonSize = () => {
  return (
    <div className="block">
      <Button size="small">Small</Button>
      <Button>Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export default ButtonSize;
