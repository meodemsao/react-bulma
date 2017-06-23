import React from 'react';
import { shallow } from 'enzyme';
import { Tabs } from '../';

describe('Tabs', () => {
  it('should render a subtitle tag by default', () => {
    const wrapper = shallow(<Tabs />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Tabs />);

    expect(wrapper.hasClass('tabs')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tabs>Yo!</Tabs>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Tabs className="extra">Yo!</Tabs>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Tabs tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Tabs alignment="centered" size="medium" style="boxed" fullWidth />);

    expect(wrapper.hasClass('is-centered')).toBe(true);
    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-boxed')).toBe(true);
    expect(wrapper.hasClass('is-fullwidth')).toBe(true);
  });
});
