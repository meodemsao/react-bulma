import React from 'react';
import { shallow } from 'enzyme';
import { HeroFoot } from '../';

describe('HeroFoot', () => {
  it('should render a herofoot tag by default', () => {
    const wrapper = shallow(<HeroFoot />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<HeroFoot />);

    expect(wrapper.hasClass('hero-foot')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<HeroFoot>Yo!</HeroFoot>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<HeroFoot className="extra">Yo!</HeroFoot>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<HeroFoot tag="span">Yo!</HeroFoot>);

    expect(wrapper.type()).toBe('span');
  });
});
