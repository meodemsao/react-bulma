import React from 'react';
import { Container, Image, Nav, NavItem, NavLeft, NavRight, NavToggle } from 'reactbulma';

export const NavModifier = () => {
  return (
    <Nav shadow>
      <Container>
        <NavLeft>
          <NavItem>
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </NavItem>
          <NavItem tab hiddenMobile active>Home</NavItem>
          <NavItem tab hiddenMobile>Features</NavItem>
          <NavItem tab hiddenMobile>Pricing</NavItem>
          <NavItem tab hiddenMobile>About</NavItem>
        </NavLeft>
        <NavToggle>
          <span />
          <span />
          <span />
        </NavToggle>
        <NavRight navMenu>
          <NavItem tab hiddenTablet active>Home</NavItem>
          <NavItem tab hiddenTablet>Features</NavItem>
          <NavItem tab hiddenTablet>Pricing</NavItem>
          <NavItem tab hiddenTablet>About</NavItem>
          <NavItem tab>
            <Image size="16x16" style={{ marginRight: 8 }} src="http://bulma.io/images/jgthms.png" />
            Profile
          </NavItem>
          <NavItem tab>Log out</NavItem>
        </NavRight>
      </Container>
    </Nav>
  );
};

export default NavModifier;
