import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'button';

const Button = (props) => {
  const {
    className,
    cssModule,
    color,
    size,
    style,
    state,
    disabled,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    color ? `is-${color}` : '',
    style ? `is-${style}` : '',
    state ? `is-${state}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} disabled={disabled} />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
