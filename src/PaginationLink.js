import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  current: PropTypes.bool
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'pagination-link';

const PaginationLink = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    current,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    current ? 'is-current' : ''
  ), cssModule);

  return (
    <li>
      <Tag {...attributes} className={classes} />
    </li>
  );
};

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;

export default PaginationLink;
