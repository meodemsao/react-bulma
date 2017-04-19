import React from 'react';
import {shallow} from 'enzyme';
import {NavItem} from '../';

describe('NavItem', () => {
  it('should render a nav item tag by default', () => {
    const wrapper = shallow(<NavItem />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render default class', () => {
    const wrapper = shallow(<NavItem />);

    expect(wrapper.hasClass('nav-item')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<NavItem>Yo!</NavItem>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavItem className="extra">Yo!</NavItem>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavItem tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<NavItem tab={true} active={true} hiddenMobile={true} hiddenTablet={true} />);

    expect(wrapper.hasClass('is-tab')).toBe(true);
    expect(wrapper.hasClass('is-active')).toBe(true);
    expect(wrapper.hasClass('is-hidden-mobile')).toBe(true);
    expect(wrapper.hasClass('is-hidden-tablet')).toBe(true);
  });

});
