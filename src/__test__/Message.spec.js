import React from 'react';
import { shallow } from 'enzyme';
import { Message } from '../';

describe('Message', () => {
  it('should render a message tag by default', () => {
    const wrapper = shallow(<Message />);

    expect(wrapper.type()).toBe('article');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Message />);

    expect(wrapper.hasClass('message')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Message>Yo!</Message>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Message className="extra">Yo!</Message>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Message tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Message color="info"/>);

    expect(wrapper.hasClass('is-info')).toBe(true);
  });

});
