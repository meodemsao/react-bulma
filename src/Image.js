import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  src: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  tag: 'figure'
};

const defaultClass = 'image';

const Image = (props) => {
  const {
    className,
    cssModule,
    src,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      <img src={src} role="presentation" />
    </Tag>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
