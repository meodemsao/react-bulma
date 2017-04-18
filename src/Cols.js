import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  responsive: PropTypes.string,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const defaultClass = 'columns';

const Cols = (props) => {
  const {
    className,
    responsive,
    gapless,
    multiline,
    cssModule,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    responsive ? `is-${responsive}` : '',
    gapless ? 'is-gapless' : '',
    multiline ? 'is-multiline' : '',
    defaultClass
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Cols.propTypes = propTypes;
Cols.defaultProps = defaultProps;

export default Cols;
