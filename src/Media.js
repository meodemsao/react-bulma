import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string
};

const defaultProps = {
  tag: 'article'
};

const defaultClass = "media";

const Media = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    type ? `media-${type}` : defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;
Media.defaultProps = defaultProps;

export default Media;
