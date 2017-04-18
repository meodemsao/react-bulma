import React from 'react';
import classNames from 'classnames';
import Delete from './Delete';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  content: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = "notification";

const Notification = (props) => {
  const {
    className,
    cssModule,
    type,
    content,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    type ? `is-${type}` : '',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      <Delete tag="button" />
      {content ? content : null}
    </Tag>
  );
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;