/**
 * Created by anvu69 on 6/12/17.
 */
import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;

const propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  state: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  tag: 'span',
  children: null
};

const defaultClass = 'select';

const Select = (props) => {
  const {
    className,
    cssModule,
    state,
    size,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
    state ? `is-${state}` : '',
    disabled ? 'is-disabled' : '',
    size ? `is-${size}` : ''
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} >
      <select disabled={disabled}>
        {props.children}
      </select>
    </Tag>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
