import React from 'react';
import { Button } from 'reactbulma';

export const ButtonInvertOutline = () => {
  return (
    <div className="callout is-primary">
      <Button color="primary" state="inverted is-outlined">Inverted</Button>
      <Button color="info" state="inverted is-outlined">Inverted</Button>
      <Button color="success" state="inverted is-outlined">Inverted</Button>
      <Button color="danger" state="inverted is-outlined">Inverted</Button>
    </div>
  );
};

export default ButtonInvertOutline;
