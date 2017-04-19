import React from 'react';
import { shallow } from 'enzyme';
import { LevelRight } from '../';

describe('LevelRight', () => {
  it('should render a level right item tag by default', () => {
    const wrapper = shallow(<LevelRight />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<LevelRight />);

    expect(wrapper.hasClass('level-right')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<LevelRight>Yo!</LevelRight>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<LevelRight className="extra">Yo!</LevelRight>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<LevelRight tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
