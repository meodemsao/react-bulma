import React from 'react';
import { Button } from 'reactbulma';

export const ButtonStateFocus = () => {
  return (
    <div>
      <Button state="focused">Focus</Button>
      <Button color="primary" state="focused">Focus</Button>
      <Button color="info" state="focused">Focus</Button>
      <Button color="success" state="focused">Focus</Button>
      <Button color="warning" state="focused">Focus</Button>
      <Button color="danger" state="focused">Focus</Button>
    </div>
  );
};

export default ButtonStateFocus;
