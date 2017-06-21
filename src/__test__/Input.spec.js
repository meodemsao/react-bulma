import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../';

describe('Input', () => {
  it('should render a input tag by default', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.html()).toBe('<input class="input"/>');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper.hasClass('input')).toBe(true);
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Input className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Input size="medium" color="success" state="hovered" />);

    expect(wrapper.hasClass('is-hovered')).toBe(true);
    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-success')).toBe(true);
  });

  it('should render with disable state', () => {
    const wrapper = shallow(<Input disabled />);

    expect(wrapper.html()).toBe('<input disabled="" class="input"/>');
  });

  it('should render with radio type', () => {
    const wrapper = shallow(<Input type="radio" />);

    expect(wrapper.html()).toBe('<input type="radio"/>');
  });

  it('should render with checkbox type', () => {
    const wrapper = shallow(<Input type="checkbox" />);

    expect(wrapper.html()).toBe('<input type="checkbox"/>');
  });
});
