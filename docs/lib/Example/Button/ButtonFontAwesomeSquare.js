import React from 'react';
import {
  Button,
  Field,
  Icon
} from 'reactbulma';

export const ButtonFontAwesomeSquare = () => {
  return (
    <div>
      <Field tag="p">
        <Button size="small">
          <Icon size="small" name="header" />
        </Button>
      </Field>
      <Field tag="p">
        <Button>
          <Icon size="small" name="header" />
        </Button>
        <Button>
          <Icon name="header" />
        </Button>
      </Field>
      <Field tag="p">
        <Button size="medium">
          <Icon size="small" name="header" />
        </Button>
        <Button size="medium">
          <Icon name="header" />
        </Button>
        <Button size="medium">
          <Icon size="medium" name="header" />
        </Button>
      </Field>
      <Field tag="p">
        <Button size="large">
          <Icon size="small" name="header" />
        </Button>
        <Button size="large">
          <Icon name="header" />
        </Button>
        <Button size="large">
          <Icon size="medium" name="header" />
        </Button>
        <Button size="large">
          <Icon size="large" name="header" />
        </Button>
      </Field>
    </div>
  );
};

export default ButtonFontAwesomeSquare;
