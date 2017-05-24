import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string
};

const defaultProps = {
  tag: 'span'
};

const defaultClass = 'tag';

const TagComponent = (props) => {
  const {
    className,
    cssModule,
    size,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    color ? `is-${color}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

TagComponent.propTypes = propTypes;
TagComponent.defaultProps = defaultProps;

export default TagComponent;
