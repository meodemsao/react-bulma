import React from 'react';
import { Button } from 'reactbulma';

export const ButtonInverted = () => {
  return (
    <div className="callout is-primary">
      <Button color="primary" state="inverted">Inverted</Button>
      <Button color="info" state="inverted">Inverted</Button>
      <Button color="success" state="inverted">Inverted</Button>
      <Button color="danger" state="inverted">Inverted</Button>
    </div>
  );
};

export default ButtonInverted;
