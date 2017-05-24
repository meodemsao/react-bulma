import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from '../';

describe('Tag', () => {
  it('should render a tag tag by default', () => {
    const wrapper = shallow(<Tag />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Tag />);

    expect(wrapper.hasClass('tag')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tag>Yo!</Tag>);

    expect(wrapper.html()).toBe('<span class="tag">Yo!</span>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Tag className="extra">Yo!</Tag>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Tag tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Tag size="medium" color="info" />);

    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-info')).toBe(true);
  });
});
