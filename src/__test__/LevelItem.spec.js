import React from 'react';
import { shallow } from 'enzyme';
import { LevelItem } from '../';

describe('LevelItem', () => {
  it('should render a level item tag by default', () => {
    const wrapper = shallow(<LevelItem />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<LevelItem />);

    expect(wrapper.hasClass('level-item')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<LevelItem>Yo!</LevelItem>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<LevelItem className="extra">Yo!</LevelItem>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<LevelItem tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<LevelItem textCenter={true} tag="span"/>);

    expect(wrapper.hasClass('has-text-centered')).toBe(true);
  });

});
