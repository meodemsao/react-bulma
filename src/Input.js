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
  state: PropTypes.string,
  focus: PropTypes.bool,
  loading: PropTypes.bool,
  disable: PropTypes.bool,
  hasIcon: PropTypes.string
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
    color,
    size,
    state,
    disable,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    color ? `is-${color}` : '',
    size ? `is-${size}` : '',
    state ? `is-${state}` : '',

  ), cssModule);

  return (
    disable
      ? <Tag {...attributes} className={classes} diabled/>
      : <Tag {...attributes} className={classes} />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
