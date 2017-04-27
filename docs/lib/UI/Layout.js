import React from 'react';
import Nav from './Nav';
export default (props) => {
  return (
    <div className="wrapper">
      <Nav />
      {props.children}
    </div>
  );
};
