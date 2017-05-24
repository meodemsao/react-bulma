import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  position: PropTypes.string
};

const defaultProps = {
  tag: 'nav'
};

const defaultClass = 'pagination';

const Pagination = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    position,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    position ? `is-${position}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
