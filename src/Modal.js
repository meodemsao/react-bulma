import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  active: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'modal';

const Modal = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    active ? 'is-active' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
