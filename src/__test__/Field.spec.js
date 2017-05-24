import React from 'react';
import { shallow } from 'enzyme';
import { Field } from '../';

describe('Field', () => {
  it('should render a feild tag by default', () => {
    const wrapper = shallow(<Field />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Field />);

    expect(wrapper.hasClass('field')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Field>Yo!</Field>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Field className="extra">Yo!</Field>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Field tag="span">Yo!</Field>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Field addons grouped>Yo!</Field>);

    expect(wrapper.hasClass('has-addons')).toBe(true);
    expect(wrapper.hasClass('is-grouped')).toBe(true);
  });
});
