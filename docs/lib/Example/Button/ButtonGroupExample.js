import React from 'react';
import {
  Button,
  Control,
  Field,
} from 'reactbulma';

export const ButtonGroup = () => {
  return (
    <Field grouped>
      <Control>
        <Button color="primary">
          Save changes
        </Button>
      </Control>
      <Control>
        <Button>
          Cancel
        </Button>
      </Control>
      <Control>
        <Button color="danger">
          Delete post
        </Button>
      </Control>
    </Field>
  );
};

export default ButtonGroup;
