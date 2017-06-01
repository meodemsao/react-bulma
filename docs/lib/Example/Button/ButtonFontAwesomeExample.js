import React from 'react';
import {
  Button,
  Field,
  Icon
} from 'reactbulma';

const ButtonFontAwesome = () => {
  return (
    <div>
      <Field tag="p">
        <Button>
          <Icon name="bold" size="small" />
        </Button>
        <Button>
          <Icon name="italic" size="small" />
        </Button>
        <Button>
          <Icon name="underline" size="small" />
        </Button>
      </Field>
      <Field tag="p">
        <Button>
          <Icon name="github" />
          <span>GitHub</span>
        </Button>
        <Button color="primary">
          <Icon name="twitter" />
          <span>Twitter</span>
        </Button>
        <Button color="success">
          <Icon name="check" />
          <span>Success</span>
        </Button>
        <Button state="outlined" color="danger">
          <Icon name="times" />
          <span>Delete</span>
        </Button>
      </Field>
      <Field tag="p">
        <Button size="small">
          <Icon name="github" size="small" />
          <span>GitHub</span>
        </Button>
        <Button>
          <Icon name="github" />
          <span>GitHub</span>
        </Button>
        <Button size="medium">
          <Icon name="github" />
          <span>GitHub</span>
        </Button>
        <Button size="large">
          <Icon name="github" size="medium" />
          <span>GitHub</span>
        </Button>
      </Field>
    </div>
  );
};

export default ButtonFontAwesome;
