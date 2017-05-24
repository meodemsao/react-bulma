import React from 'react';
import { shallow } from 'enzyme';
import { NavRight } from '../';

describe('NavRight', () => {
  it('should render a nav right tag by default', () => {
    const wrapper = shallow(<NavRight />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<NavRight />);

    expect(wrapper.hasClass('nav-right')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<NavRight>Yo!</NavRight>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavRight className="extra">Yo!</NavRight>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavRight tag="div" />);

    expect(wrapper.type()).toBe('div');
  });
});
