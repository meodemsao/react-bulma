import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'modal-background';

const ModalBackground = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalBackground.propTypes = propTypes;
ModalBackground.defaultProps = defaultProps;

export default ModalBackground;
