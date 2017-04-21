import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  contextual: PropTypes.string,
  directional: PropTypes.bool,
  size: PropTypes.string,
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = "tile";

const Tile = (props) => {
  const {
    className,
    cssModule,
    contextual,
    directional,
    size,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    contextual ? `is-${contextual}` : '',
    directional ? 'is-vertical' : '',
    size ? `is-${size}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
