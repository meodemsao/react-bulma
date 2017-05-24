import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  current: PropTypes.bool,
  text: PropTypes.string
};

const defaultProps = {
  tag: 'span'
};

const defaultClass = 'pagination-ellipsis';

const PaginationEllipsis = (props) => {
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
    <li>
      <Tag {...attributes} className={classes} />
    </li>
  );
};

PaginationEllipsis.propTypes = propTypes;
PaginationEllipsis.defaultProps = defaultProps;

export default PaginationEllipsis;
