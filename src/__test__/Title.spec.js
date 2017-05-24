import React from 'react';
import { shallow } from 'enzyme';
import { Title } from '../';

describe('Title', () => {
  it('should render a title tag by default', () => {
    const wrapper = shallow(<Title />);

    expect(wrapper.type()).toBe('h1');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Title />);

    expect(wrapper.hasClass('title')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Title>Yo!</Title>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Title className="extra">Yo!</Title>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Title tag="h2" />);
    expect(wrapper.type()).toBe('h2');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Title size="2" spaced />);

    expect(wrapper.hasClass('is-2')).toBe(true);
    expect(wrapper.hasClass('is-spaced')).toBe(true);
  });
});
