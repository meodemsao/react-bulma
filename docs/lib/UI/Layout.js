import React from 'react';
import {Section} from 'reactbulma';
import TopNav from './TopNav';
import Menu from './Menu';
import Footer from './Footer';

export default (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <TopNav />
      <Menu {...props}/>
      <Section>
        {props.children}
      </Section>
      <Footer />
    </div>
  );
};
