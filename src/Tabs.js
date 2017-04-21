import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  alignment: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string,
  toggle: PropTypes.bool,
  fullWidth: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'tabs';

const Tabs = (props) => {
  const {
    className,
    cssModule,
    alignment,
    size,
    style,
    fullWidth,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    alignment ? `is-${alignment}` : '',
    size ? `is-${size}` : '',
    style ? `is-${style}` : '',
    fullWidth ? 'is-fullwidth' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
