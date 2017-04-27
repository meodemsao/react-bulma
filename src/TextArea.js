import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  focus: PropTypes.bool,
  loading: PropTypes.bool,
  disable: PropTypes.bool,
  hasIcon: PropTypes.string
};

const defaultProps = {
  tag: 'textarea'
};

const defaultClass = 'textarea';

const TextArea = (props) => {
  const {
    className,
    cssModule,
    color,
    size,
    state,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
