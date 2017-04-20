import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '../';

describe('Pagination', () => {
  it('should render a pagination tag by default', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper.type()).toBe('nav');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper.hasClass('pagination')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Pagination>Yo!</Pagination>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Pagination className="extra">Yo!</Pagination>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Pagination tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Pagination size="medium" position="centered"/>);

    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-centered')).toBe(true);
  });

});
