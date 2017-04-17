import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  tag: 'ul'
};

const defaultClass = 'pagination-list';

const PaginationList = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes,
    size,
    position
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

PaginationList.propTypes = propTypes;
PaginationList.defaultProps = defaultProps;

export default PaginationList;
