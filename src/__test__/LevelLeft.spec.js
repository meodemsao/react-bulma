import React from 'react';
import { shallow } from 'enzyme';
import { LevelLeft } from '../';

describe('LevelLeft', () => {
  it('should render a level left item tag by default', () => {
    const wrapper = shallow(<LevelLeft />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<LevelLeft />);

    expect(wrapper.hasClass('level-left')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<LevelLeft>Yo!</LevelLeft>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<LevelLeft className="extra">Yo!</LevelLeft>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<LevelLeft tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
