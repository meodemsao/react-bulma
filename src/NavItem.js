import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tab: PropTypes.bool,
  active: PropTypes.bool,
  hiddenMobile: PropTypes.bool,
  hiddenTablet: PropTypes.bool
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'nav-item';

const NavItem = (props) => {
  const {
    className,
    cssModule,
    tab,
    active,
    hiddenMobile,
    hiddenTablet,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    tab ? 'is-tab' : '',
    active ? 'is-active' : '',
    hiddenMobile ? 'is-hidden-mobile' : '',
    hiddenTablet ? 'is-hidden-tablet' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
