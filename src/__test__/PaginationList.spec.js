import React from 'react';
import { shallow } from 'enzyme';
import { PaginationList } from '../';

describe('PaginationList', () => {
  it('should render a pagination list tag by default', () => {
    const wrapper = shallow(<PaginationList />);

    expect(wrapper.type()).toBe('ul');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PaginationList />);

    expect(wrapper.hasClass('pagination-list')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PaginationList>Yo!</PaginationList>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PaginationList className="extra">Yo!</PaginationList>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PaginationList tag="div" />);

    expect(wrapper.type()).toBe('div');
  });
});
