import React from 'react';
import { Control, Field, Input, Label } from 'reactbulma';

export const InputExample = () => {
  return (
    <div>
      <Field>
        <Label>
          Name
        </Label>
        <Control>
          <Input type="input" placeHolder="Text input" />
        </Control>
      </Field>
    </div>
  );
};

export default InputExample;
