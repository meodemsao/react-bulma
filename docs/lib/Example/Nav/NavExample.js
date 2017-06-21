import React from 'react';
import { Control, Button, Field, Icon, Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle } from 'reactbulma';

export const NavExample = () => {
  return (
    <Nav>
      <NavLeft>
        <NavItem>
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
        </NavItem>
      </NavLeft>
      <NavCenter>
        <NavItem>
          <Icon name="github" />
        </NavItem>
        <NavItem>
          <Icon name="twitter" />
        </NavItem>
      </NavCenter>
      {/* This "<NavToggle />" hamburger menu is only visible on mobile*/}
      <NavToggle>
        <span />
        <span />
        <span />
      </NavToggle>
      {/* This "<NavRight navMenu>" is hidden on mobile*/}
      {/* Add the modifier "active" to display it on mobile*/}
      <NavRight navMenu>
        <NavItem>
          Home
        </NavItem>
        <NavItem>
          Documentation
        </NavItem>
        <NavItem>
          Blog
        </NavItem>
        <NavItem tag="div">
          <Field grouped>
            <Control>
              <Button>
                <Icon name="twitter" />
                <span>Tweet</span>
              </Button>
            </Control>
            <Control>
              <Button color="primary">
                <Icon name="download" />
                <span>Download</span>
              </Button>
            </Control>
          </Field>
        </NavItem>
      </NavRight>
    </Nav>
  );
};

export default NavExample;
