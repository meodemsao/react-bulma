import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  outlined: PropTypes.bool,
  modalType: PropTypes.string,
  inverted: PropTypes.bool,
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
    state,
    modalType,
    outlined,
    inverted,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    size ? `is-${size}` : '',
    color ? `is-${color}` : '',
    state ? `is-${state}` : '',
    outlined ? 'is-outlined' : '',
    inverted ? 'is-inverted' : '',
    modalType ? `modal-${modalType}` : '',
    modalType === 'close' ? defaultClass === '' : defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} disabled={disabled} />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
