import React from 'react';
import { shallow } from 'enzyme';
import { PaginationNext } from '../';

describe('PaginationNext', () => {
  it('should render a pagination next tag by default', () => {
    const wrapper = shallow(<PaginationNext />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PaginationNext />);

    expect(wrapper.hasClass('pagination-next')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PaginationNext>Next</PaginationNext>);

    expect(wrapper.text()).toBe('Next');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PaginationNext className="extra">Yo!</PaginationNext>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PaginationNext tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render disabled', () => {
    const wrapper = shallow(<PaginationNext disabled />);

    expect(wrapper.html()).toBe('<a class="pagination-next" disabled=""></a>');
  });
});
