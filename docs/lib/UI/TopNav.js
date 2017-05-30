import React from 'react';
import {
  Icon,
  Nav,
  NavCenter,
  NavItem,
  NavLeft,
  NavRight
} from 'reactbulma';

export default class TopNav extends React.Component {
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
            <Icon name="github" />
          </NavItem>
          <NavItem>
            <Icon name="twitter" />
          </NavItem>
        </NavCenter>
        <NavRight navMenu>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/documents">Document</NavItem>
        </NavRight>
      </Nav>
    );
  }
}
