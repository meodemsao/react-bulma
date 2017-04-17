import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  value: PropTypes.string,
  max: PropTypes.string
};

const defaultProps = {
  tag: 'progress'
};

const defaultClass = 'progress';

const Progress = (props) => {
  const {
    className,
    cssModule,
    size,
    value,
    max,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    value ? value : '',
    max ? max : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
