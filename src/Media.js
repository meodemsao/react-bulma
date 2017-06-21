import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  content: PropTypes.bool,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool
};

const Media = (props) => {
  const {
    className,
    cssModule,
    tag,
    body,
    bottom,
    content,
    heading,
    left,
    list,
    middle,
    object,
    right,
    top,
    ...attributes
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = 'h4';
  } else if (left) {
    defaultTag = 'figure';
  } else if (right) {
    defaultTag = 'div';
  } else if (content) {
    defaultTag = 'div';
  } else if (object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'article';
  }
  const Tag = tag || defaultTag;

  const classes = mapToCssModules(classNames(
    className,
    {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      'media-content': content,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !content,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;

export default Media;
