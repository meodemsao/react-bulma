import React from 'react';
import {
  Box,
  Media,
  Content,
  Image,
  Field,
  Level,
  Control,
  Button,
  Icon
} from 'reactbulma';

export const ButtonAddons = (props) => {
  return (
    <Field addons={true}>
      <Control>
        <Button color="primary">
          <Icon size="small" name="align-left" />
          <span>Left</span>
        </Button>
      </Control>
      <Control>
        <Button>
          <Icon size="small" name="align-center"/>
          <span>Center</span>
        </Button>
      </Control>
      <Control>
        <Button color="danger">
          <Icon size="small" name="align-right"/>
          <span>Right</span>
        </Button>
      </Control>
    </Field>
  )
};

export default ButtonAddons;
