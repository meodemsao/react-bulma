import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  offset: PropTypes.string,
  narrow: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'column';

const Col = (props) => {
  const {
    className,
    cssModule,
    size,
    offset,
    narrow,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    offset ? `is-offset-${offset}` : '',
    narrow ? `is-${narrow}` : '',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
