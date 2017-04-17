import React from 'react';

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
      <div></div>
    );
  }
}
