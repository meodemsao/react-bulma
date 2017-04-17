import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  textCenter: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'level-item';

const LevelItem = (props) => {
  const {
    className,
    cssModule,
    textCenter,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    textCenter ? 'has-text-centered' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

LevelItem.propTypes = propTypes;
LevelItem.defaultProps = defaultProps;

export default LevelItem;
