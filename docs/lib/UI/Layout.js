import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default (props) => {
  return (
    <div className="wrapper">
      <Nav />
      {props.children}
      <Footer/>
    </div>
  );
};
