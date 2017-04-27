import React from 'react';
import {Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle, Icon} from 'reactbulma';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }

  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }

  render() {
    return (
      <Nav>
        <NavLeft>
          <NavItem>
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </NavItem>
        </NavLeft>
        <NavCenter>
          <NavItem>
            <Icon name="github"/>
          </NavItem>
          <NavItem>
            <Icon name="twitter"/>
          </NavItem>
        </NavCenter>
      </Nav>
    );
  }
}
