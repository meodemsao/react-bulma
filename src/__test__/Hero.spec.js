import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '../';

describe('Hero', () => {
  it('should render a hero tag by default', () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Hero />);

    expect(wrapper.hasClass('hero')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Hero>Yo!</Hero>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Hero className="extra">Yo!</Hero>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Hero tag="span">Yo!</Hero>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Hero color="primary" size="medium" bold={true}>Yo!</Hero>);

    expect(wrapper.hasClass('is-primary')).toBe(true);
    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-bold')).toBe(true);
  });
});
