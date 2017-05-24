import React from 'react';
import { shallow } from 'enzyme';
import { HeroHead } from '../';

describe('HeroHead', () => {
  it('should render a herohead tag by default', () => {
    const wrapper = shallow(<HeroHead />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<HeroHead />);

    expect(wrapper.hasClass('hero-head')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<HeroHead>Yo!</HeroHead>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<HeroHead className="extra">Yo!</HeroHead>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<HeroHead tag="span">Yo!</HeroHead>);

    expect(wrapper.type()).toBe('span');
  });
});
