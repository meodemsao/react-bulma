import React from 'react';
import { Button } from 'reactbulma';

export const ButtonStateLoading = () => {
  return (
    <div>
      <Button state="loading">Loading</Button>
      <Button color="primary" state="loading">Loading</Button>
      <Button color="info" state="loading">Loading</Button>
      <Button color="success" state="loading">Loading</Button>
      <Button color="warning" state="loading">Loading</Button>
      <Button color="danger" state="loading">Loading</Button>
    </div>
  );
};

export default ButtonStateLoading;
