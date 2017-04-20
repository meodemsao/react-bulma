import React from 'react';
import { shallow } from 'enzyme';
import { Progress } from '../';

describe('Progress', () => {
  it('should render a progress tag by default', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.type()).toBe('progress');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Progress />);

    expect(wrapper.hasClass('progress')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Progress>Yo!</Progress>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Progress className="extra">Yo!</Progress>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Progress tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Progress size="medium" color="info" value="15" max="100"/>);

    expect(wrapper.hasClass('is-info')).toBe(true);
    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.html()).toBe('<progress class="progress is-medium is-info" value="15" max="100"></progress>');
  });

});
