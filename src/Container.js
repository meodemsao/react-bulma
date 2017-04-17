import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fluid: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'container';

const Container = (props) => {
  const {
    className,
    cssModule,
    fluid,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    fluid ? 'is-fluid' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
