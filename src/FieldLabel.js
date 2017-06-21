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
  tag: 'div'
};

const defaultClass = 'field-label';

const FieldLabel = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
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

FieldLabel.propTypes = propTypes;
FieldLabel.defaultProps = defaultProps;

export default FieldLabel;
