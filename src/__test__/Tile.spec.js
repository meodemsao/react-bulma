import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from '../';

describe('Tile', () => {
  it('should render a tile tag by default', () => {
    const wrapper = shallow(<Tile />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Tile />);

    expect(wrapper.hasClass('tile')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Tile>Yo!</Tile>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Tile className="extra">Yo!</Tile>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Tile tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Tile size="2" contextual="ancestor" directional />);

    expect(wrapper.hasClass('is-2')).toBe(true);
    expect(wrapper.hasClass('is-ancestor')).toBe(true);
    expect(wrapper.hasClass('is-vertical')).toBe(true);
  });
});
