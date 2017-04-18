import React from 'react';
import { shallow } from 'enzyme';
import { HeroBody } from '../';

describe('HeroBody', () => {
  it('should render a herobody tag by default', () => {
    const wrapper = shallow(<HeroBody />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<HeroBody />);

    expect(wrapper.hasClass('hero-body')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<HeroBody>Yo!</HeroBody>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<HeroBody className="extra">Yo!</HeroBody>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<HeroBody tag="span">Yo!</HeroBody>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<HeroBody size="medium" spaced={true}>Yo!</HeroBody>);

    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-spaced')).toBe(true);
  });
});
