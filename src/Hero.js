import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'hero';

const Hero = (props) => {
  const {
    className,
    cssModule,
    size,
    color,
    bold,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    color ? `is-${color}` : '',
    bold ? 'is-bold' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
