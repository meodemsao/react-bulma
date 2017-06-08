import React from 'react';
import { Control, Button, Field, Input, Level } from 'reactbulma';

export const LevelExample = () => {
  return (
    <Level>
      <Level type="left" tag="div">
        <Level tag="div" type="item">
          <p className="subtitle is-5">
            <strong>123</strong>
            {' '}
            post
          </p>
        </Level>
        <Level tag="div" type="item">
          <Field addons>
            <Control>
              <Input type="text" placeholder="Find a post" />
            </Control>
            <Control>
              <Button>Search</Button>
            </Control>
          </Field>
        </Level>
      </Level>
      <Level type="right">
        <Level type="item" tag="p">
          <strong>All</strong>
        </Level>
        <Level type="item" tag="p">
          <a>Published</a>
        </Level>
        <Level type="item" tag="p">
          <a>Drafts</a>
        </Level>
        <Level type="item" tag="p">
          <a>Deleted</a>
        </Level>
        <Level type="item" tag="p">
          <Button state="success">New</Button>
        </Level>
      </Level>
    </Level>
  );
};

export default LevelExample;
