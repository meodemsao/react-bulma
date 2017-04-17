import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  spaced: PropTypes.bool,
};

const defaultProps = {
  tag: 'h1'
};

const defaultClass = 'subtitle';

const Subtitle = (props) => {
  const {
    className,
    cssModule,
    size,
    spaced,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
    spaced ? `is-spaced` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;

export default Subtitle;
