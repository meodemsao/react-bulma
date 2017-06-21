import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  horizontal: PropTypes.bool,
  narrow: PropTypes.bool,
  addons: PropTypes.bool,
  addonsCenter: PropTypes.bool,
  addonsRight: PropTypes.bool,
  grouped: PropTypes.bool,
  groupedCenter: PropTypes.bool,
  groupedRight: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'field';

const Field = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    horizontal,
    narrow,
    addons,
    addonsCenter,
    addonsRight,
    grouped,
    groupedCenter,
    groupedRight,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    horizontal ? 'is-horizontal' : '',
    narrow ? 'is-narrow' : '',
    addons ? 'has-addons' : '',
    addonsCenter ? 'has-addons-centered' : '',
    addonsRight ? 'has-addons-right' : '',
    grouped ? 'is-grouped' : '',
    groupedCenter ? 'is-grouped-centered' : '',
    groupedRight ? 'is-grouped-right' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
