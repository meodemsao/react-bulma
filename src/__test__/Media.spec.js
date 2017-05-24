import React from 'react';
import { shallow } from 'enzyme';
import { Media } from '../';

describe('Media', () => {
  it('should render a media tag by default', () => {
    const wrapper = shallow(<Media />);

    expect(wrapper.type()).toBe('article');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Media />);

    expect(wrapper.hasClass('media')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Media>Yo!</Media>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Media className="extra">Yo!</Media>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Media tag="figure" />);

    expect(wrapper.type()).toBe('figure');
  });

  it('should render custom type', () => {
    const wrapper = shallow(<Media type="left" />);

    expect(wrapper.hasClass('media-left')).toBe(true);
  });
});
