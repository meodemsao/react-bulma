import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  tag: 'input'
};

const defaultClass = 'input';

const Input = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    color,
    size,
    state,
    disabled,
    ...attributes,
  } = props;

  if (Tag === 'input') {
    type
      ? attributes.type = type
      : attributes.type = 'text'
  }

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    color ? `is-${color}` : '',
    size ? `is-${size}` : '',
    state ? `is-${state}` : ''
  ), cssModule);

  console.log('disabled.......',disabled);

  return (
    disabled
      ? <Tag {...attributes} className={classes} disabled />
      : <Tag {...attributes} className={classes} />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
