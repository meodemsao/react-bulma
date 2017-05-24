import React from 'react';
import { shallow } from 'enzyme';
import { NavLeft } from '../';

describe('NavLeft', () => {
  it('should render a nav left tag by default', () => {
    const wrapper = shallow(<NavLeft />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<NavLeft />);

    expect(wrapper.hasClass('nav-left')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<NavLeft>Yo!</NavLeft>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavLeft className="extra">Yo!</NavLeft>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavLeft tag="div" />);

    expect(wrapper.type()).toBe('div');
  });
});
