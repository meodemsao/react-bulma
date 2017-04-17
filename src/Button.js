import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  style: PropTypes.string
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'button';

const Button = (props) => {
  const {
    className,
    cssModule,
    size,
    style,
    state,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    style ? `is-${style}` : '',
    state ? `is-${state}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
