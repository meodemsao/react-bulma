import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  fullWidth: PropTypes.bool
};

const defaultProps = {
  tag: 'section'
};

const defaultClass = 'section';

const Section = (props) => {
  const {
    className,
    cssModule,
    size,
    fullWidth,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    fullWidth ? 'is-fullwidth' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
