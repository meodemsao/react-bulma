import React from 'react';
import { shallow } from 'enzyme';
import { Subtitle } from '../';

describe('Subtitle', () => {
  it('should render a subtitle tag by default', () => {
    const wrapper = shallow(<Subtitle />);

    expect(wrapper.type()).toBe('h1');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Subtitle />);

    expect(wrapper.hasClass('subtitle')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Subtitle>Yo!</Subtitle>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Subtitle className="extra">Yo!</Subtitle>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Subtitle tag="h2" />);
    expect(wrapper.type()).toBe('h2');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Subtitle size="2" spaced />);

    expect(wrapper.hasClass('is-2')).toBe(true);
    expect(wrapper.hasClass('is-spaced')).toBe(true);
  });
});
