/**
 * Created by anvu69 on 6/8/17.
 */
import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'card';

const Card = (props) => {
  const {
    className,
    cssModule,
    type,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    type ? `card-${type}` : defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;