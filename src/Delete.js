import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'delete';

const Delete = (props) => {
  const {
    className,
    cssModule,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Delete.propTypes = propTypes;
Delete.defaultProps = defaultProps;

export default Delete;
