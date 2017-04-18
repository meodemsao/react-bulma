import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  addons: PropTypes.bool,
  grouped: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'field';

const Field = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    addons,
    grouped,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    addons ? 'has-addons' : '',
    grouped ? 'is-grouped' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}/>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
