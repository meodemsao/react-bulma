import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  shadow: PropTypes.bool
};

const defaultProps = {
  tag: 'nav'
};

const defaultClass = 'nav';

const Nav = (props) => {
  const {
    className,
    cssModule,
    shadow,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    shadow ? 'has-shadow' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
