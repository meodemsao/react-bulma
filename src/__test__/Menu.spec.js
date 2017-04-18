import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../';

describe('Menu', () => {
  it('should render a menu tag by default', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper.type()).toBe('aside');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper.hasClass('menu')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Menu>Yo!</Menu>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Menu className="extra">Yo!</Menu>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Menu tag="ul"/>);

    expect(wrapper.type()).toBe('ul');
  });

  it('should render custom type', () => {
    const wrapper = shallow(<Menu type="label" />);

    expect(wrapper.hasClass('menu-label')).toBe(true);
  });
});
