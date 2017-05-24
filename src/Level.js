import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  textCenter: PropTypes.bool,
  mobile: PropTypes.bool
};

const defaultProps = {
  tag: 'nav'
};

const defaultClass = 'level';

const Level = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    type,
    textCenter,
    mobile,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    type ? `level-${type}` : defaultClass,
    textCenter ? 'has-text-centered' : '',
    mobile ? 'is-mobile' : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Level.propTypes = propTypes;
Level.defaultProps = defaultProps;

export default Level;
