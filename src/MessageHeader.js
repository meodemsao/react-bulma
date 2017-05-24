import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  title: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'message-header';

const MessageHeader = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

MessageHeader.propTypes = propTypes;
MessageHeader.defaultProps = defaultProps;

export default MessageHeader;
