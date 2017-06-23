import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '../';

describe('Col', () => {
  it('should render a col tag by default', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.hasClass('column')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Col>Yo!</Col>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Col className="extra">Yo!</Col>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Col tag="span">Yo!</Col>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom size', () => {
    const wrapper = shallow(<Col size="1">Yo!</Col>);

    expect(wrapper.hasClass('is-1')).toBe(true);
  });

  it('should render custom offset', () => {
    const wrapper = shallow(<Col offset="1">Yo!</Col>);

    expect(wrapper.hasClass('is-offset-1')).toBe(true);
  });

  it('should render col narrow', () => {
    const wrapper = shallow(<Col narrow narrowMobile narrowDesktop narrowTablet>Yo!</Col>);

    expect(wrapper.hasClass('is-narrow')).toBe(true);
    expect(wrapper.hasClass('is-narrow-mobile')).toBe(true);
    expect(wrapper.hasClass('is-narrow-desktop')).toBe(true);
    expect(wrapper.hasClass('is-narrow-tablet')).toBe(true);
  });
});
