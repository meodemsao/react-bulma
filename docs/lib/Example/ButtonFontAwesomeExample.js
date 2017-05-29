import React from 'react';
import {
  Box,
  Media,
  Content,
  Image,
  Level,
  Field,
  Button,
  Icon
} from 'reactbulma';

const ButtonFontAwesome = () => {
  return (
    <div>
      <Field>
        <Button size="small">
          <Icon name="bold" />
        </Button>
        <Button size="small">
          <Icon name="italic" />
        </Button>
        <Button size="small">
          <Icon name="underline" />
        </Button>
      </Field>
      <Field>
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
        <Button style="outline" color="danger">
          <Icon name="times" />
          <span>Delete</span>
        </Button>
      </Field>
    </div>
  );
};

export default ButtonFontAwesome;
