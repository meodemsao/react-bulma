import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  current: PropTypes.bool,
  text: PropTypes.string
};

const defaultProps = {
  tag: 'a'
};

const defaultClass = 'pagination-link';

const PaginationList = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    current,
    text,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    current ? `is-${current}` : ''
  ), cssModule);

  return (
    <li>
      <Tag {...attributes} className={classes}>
        {text}
      </Tag>
    </li>
  );
};

PaginationList.propTypes = propTypes;
PaginationList.defaultProps = defaultProps;

export default PaginationList;
