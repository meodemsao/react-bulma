import React from 'react';
import { Section } from 'reactbulma';
import TopNav from './TopNav';
import Menu from './Menu';
import Footer from './Footer';

export default props => {
  return (
    <div className="wrapper">
      <TopNav />
      <Menu {...props} />
      {props.children}
      <Footer />
    </div>
  );
};
