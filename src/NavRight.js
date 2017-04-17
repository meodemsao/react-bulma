import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  navMenu: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'nav-right';

const NavRight = (props) => {
  const {
    className,
    cssModule,
    navMenu,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    navMenu ? 'nav-menu' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

NavRight.propTypes = propTypes;
NavRight.defaultProps = defaultProps;

export default NavRight;
