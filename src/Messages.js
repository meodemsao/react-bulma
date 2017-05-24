import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string
};

const defaultProps = {
  tag: 'article'
};

const defaultClass = 'message';

const Message = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    color,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    color ? `is-${color}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
