import React from 'react';
import { Button } from 'reactbulma';

export const ButtonStateActive = () => {
  return (
    <div>
      <Button state="active">Active</Button>
      <Button color="primary" state="active">Active</Button>
      <Button color="info" state="active">Active</Button>
      <Button color="success" state="active">Active</Button>
      <Button color="warning" state="active">Active</Button>
      <Button color="danger" state="active">Active</Button>
    </div>
  );
};

export default ButtonStateActive;
