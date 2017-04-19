import React from 'react';
import classNames from 'classnames';
import Delete from './Delete';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  title: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = "message-header";

const Notification = (props) => {
  const {
    className,
    cssModule,
    title,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} >
      {title}
      <Delete/>
    </Tag>
  );
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
