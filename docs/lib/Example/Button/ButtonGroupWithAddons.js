import React from 'react';
import {
  Button,
  Control,
  Field,
  Icon
} from 'reactbulma';

export const ButtonGroupWithAddons = () => {
  return (
    <div>
      <Field addons>
        <Control>
          <Button>
            <Icon size="small" name="bold" />
            <span>Bold</span>
          </Button>
        </Control>
        <Control>
          <Button>
            <Icon size="small" name="italic" />
            <span>Italic</span>
          </Button>
        </Control>
        <Control>
          <Button>
            <Icon size="small" name="underline" />
            <span>Underline</span>
          </Button>
        </Control>
      </Field>
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
    </div>
  );
};

export default ButtonGroupWithAddons;
