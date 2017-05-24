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
  spaced: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'hero-body';

const HeroBody = (props) => {
  const {
    className,
    cssModule,
    size,
    spaced,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    spaced ? 'is-spaced' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

HeroBody.propTypes = propTypes;
HeroBody.defaultProps = defaultProps;

export default HeroBody;
