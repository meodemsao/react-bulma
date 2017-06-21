import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  expanded: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool
};

const defaultProps = {
  tag: 'p'
};

const defaultClass = 'control';

const Control = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    expanded,
    iconLeft,
    iconRight,
    loading,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    expanded ? 'is-expanded' : '',
    iconLeft ? 'has-icons-left' : '',
    iconRight ? 'has-icons-right' : '',
    loading ? 'is-loading' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
