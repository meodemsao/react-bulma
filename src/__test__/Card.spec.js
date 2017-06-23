import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';

describe('Card', () => {
  it('should render a card tag by default', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.hasClass('card')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Card>Yo!</Card>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Card className="extra">Yo!</Card>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Card tag="p" />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render custom type', () => {
    const wrapper = shallow(<Card type="header" />);

    expect(wrapper.hasClass('card-header')).toBe(true);
  });
});
