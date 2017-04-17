import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  name: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  tag: 'span'
};

const defaultClass = 'icon';

const Icon = (props) => {
  const {
    className,
    cssModule,
    name,
    size,
    tag: Tag,
    ...attributes,
  } = props;

  const classesTag = mapToCssModules(classNames(
    className,
    defaultClass,
    size ? `is-${size}` : '',
  ), cssModule);

  const classesIcon = mapToCssModules(classNames(
    className,
    name ? `fa fa-${name}` : '',
  ), cssModule);

  return (
    <Tag {...attributes} className={classesTag}>
      <i className={classesIcon}/>
    </Tag>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
