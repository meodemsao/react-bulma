import React from 'react';
import { Button } from 'reactbulma';

export const ButtonStateHover = () => {
  return (
    <div>
      <Button>Hover</Button>
      <Button color="primary" state="hovered">Hover</Button>
      <Button color="info" state="hovered">Hover</Button>
      <Button color="success" state="hovered">Hover</Button>
      <Button color="warning" state="hovered">Hover</Button>
      <Button color="danger" state="hovered">Hover</Button>
    </div>
  );
};

export default ButtonStateHover;
