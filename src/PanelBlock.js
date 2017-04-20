import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  active: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'panel-block';

const PanelBlock = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    active,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    active ? 'is-active' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PanelBlock.propTypes = propTypes;
PanelBlock.defaultProps = defaultProps;

export default PanelBlock;
