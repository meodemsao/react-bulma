import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'pagination-next';

const PaginationPrevious = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    disabled,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass
  ), cssModule);

  return (
    disabled
      ? <Tag {...attributes} className={classes} diabled />
      : <Tag {...attributes} className={classes} />
  );
};

PaginationPrevious.propTypes = propTypes;
PaginationPrevious.defaultProps = defaultProps;

export default PaginationPrevious;
