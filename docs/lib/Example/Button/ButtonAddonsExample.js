import React from 'react';
import {
  Button,
  Control,
  Field,
  Icon
} from 'reactbulma';

export const ButtonAddons = () => {
  return (
    <Field addons>
      <Control>
        <Button>
          <Icon size="small" name="align-left" />
          <span>Left</span>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon size="small" name="align-center" />
          <span>Center</span>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon size="small" name="align-right" />
          <span>Right</span>
        </Button>
      </Control>
    </Field>
  );
};

export default ButtonAddons;
