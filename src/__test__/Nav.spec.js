import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../';

describe('Nav', () => {
  it('should render a nav tag by default', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper.type()).toBe('nav');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper.hasClass('nav')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Nav>Yo!</Nav>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Nav className="extra">Yo!</Nav>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Nav tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

});
