import React from 'react';
import { Control, Button, Field, Input, Level, LevelItem, LevelLeft, LevelRight } from 'reactbulma';

export const LevelExample = () => {
  return (
    <Level>
      <LevelLeft>
        <LevelItem>
          <p className="subtitle is-5">
            <strong>123</strong>
            {' '}
            post
          </p>
        </LevelItem>
        <LevelItem>
          <Field addons>
            <Control>
              <Input type="text" placeholder="Find a post" />
            </Control>
            <Control>
              <Button>Search</Button>
            </Control>
          </Field>
        </LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem tag="p">
          <strong>All</strong>
        </LevelItem>
        <LevelItem tag="p">
          <a>Published</a>
        </LevelItem>
        <LevelItem tag="p">
          <a>Drafts</a>
        </LevelItem>
        <LevelItem tag="p">
          <a>Deleted</a>
        </LevelItem>
        <LevelItem tag="p">
          <Button state="success">New</Button>
        </LevelItem>
      </LevelRight>
    </Level>
  );
};

export default LevelExample;
