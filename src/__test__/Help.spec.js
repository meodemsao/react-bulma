import React from 'react';
import { shallow } from 'enzyme';
import { Help } from '../';

describe('Help', () => {
  it('should render a help tag by default', () => {
    const wrapper = shallow(<Help />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Help />);

    expect(wrapper.hasClass('help')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Help>Yo!</Help>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Help className="extra">Yo!</Help>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Help tag="div">Yo!</Help>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom color', () => {
    const wrapper = shallow(<Help color="primary">Yo!</Help>);

    expect(wrapper.hasClass('is-primary')).toBe(true);
  });
});
