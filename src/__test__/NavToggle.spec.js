import React from 'react';
import { shallow } from 'enzyme';
import { NavToggle } from '../';

describe('NavToggle', () => {
  it('should render a nav toggle tag by default', () => {
    const wrapper = shallow(<NavToggle />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render default class', () => {
    const wrapper = shallow(<NavToggle />);

    expect(wrapper.hasClass('nav-toggle')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<NavToggle>Yo!</NavToggle>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavToggle className="extra">Yo!</NavToggle>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavToggle tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
