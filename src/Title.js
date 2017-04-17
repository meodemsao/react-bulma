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

const defaultClass = 'title';

const Title = (props) => {
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
    spaced ? 'is-spaced' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
