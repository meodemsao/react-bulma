import React from 'react';
import { shallow } from 'enzyme';
import { Delete } from '../';

describe('Delete', () => {
  it('should render a delete tag by default', () => {
    const wrapper = shallow(<Delete />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Delete />);

    expect(wrapper.hasClass('delete')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Delete>Yo!</Delete>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Delete className="extra">Yo!</Delete>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Delete tag="span">Yo!</Delete>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Delete size="medium">Yo!</Delete>);

    expect(wrapper.hasClass('is-medium')).toBe(true);
  });
});
