import React from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

const {PropTypes} = React;

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  tag: 'footer'
};

const defaultClass = 'footer';

const Footer = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes,
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    defaultClass,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
    </Tag>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
