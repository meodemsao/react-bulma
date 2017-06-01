import React from 'react';
import { Button } from 'reactbulma';

export const ButtonStateDisable = () => {
  return (
    <div className="block">
      <Button disabled>Disabled</Button>
      <Button color="primary" disabled>Disabled</Button>
      <Button color="info" disabled>Disabled</Button>
      <Button color="success" disabled>Disabled</Button>
      <Button color="warning" disabled>Disabled</Button>
      <Button color="danger" disabled>Disabled</Button>
    </div>
  );
};

export default ButtonStateDisable;
