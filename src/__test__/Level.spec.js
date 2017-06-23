import React from 'react';
import { shallow } from 'enzyme';
import { Level } from '../';

describe('Level', () => {
  it('should render a level tag by default', () => {
    const wrapper = shallow(<Level />);

    expect(wrapper.type()).toBe('nav');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Level />);

    expect(wrapper.hasClass('level')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Level>Yo!</Level>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Level className="extra">Yo!</Level>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Level tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render level mobile', () => {
    const wrapper = shallow(<Level mobile />);

    expect(wrapper.hasClass('is-mobile')).toBe(true);
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Level textCenter />);

    expect(wrapper.hasClass('has-text-centered')).toBe(true);
  });
});
