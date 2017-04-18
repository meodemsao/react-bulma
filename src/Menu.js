import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string
};

const defaultProps = {
  tag: 'aside'
};

const defaultClass = "menu";

const Menu = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    type ? `menu-${type}` : defaultClass,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
