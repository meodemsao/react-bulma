import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string
};

const defaultProps = {
  tag: 'p'
};

const defaultClass = 'help';

const Help = (props) => {
  const {
    className,
    cssModule,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    color ? `is-${color}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
