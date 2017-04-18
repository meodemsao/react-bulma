import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../';

describe('Footer', () => {
  it('should render a footer tag by default', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.type()).toBe('footer');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.hasClass('footer')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Footer>Yo!</Footer>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Footer className="extra">Yo!</Footer>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Footer tag="div">Yo!</Footer>);

    expect(wrapper.type()).toBe('div');
  });
});
