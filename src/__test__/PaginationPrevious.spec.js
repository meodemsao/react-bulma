import React from 'react';
import { shallow } from 'enzyme';
import { PaginationPrevious } from '../';

describe('PaginationPrevious', () => {
  it('should render a pagination previous next tag by default', () => {
    const wrapper = shallow(<PaginationPrevious />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PaginationPrevious />);

    expect(wrapper.hasClass('pagination-previous')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PaginationPrevious>Previous</PaginationPrevious>);

    expect(wrapper.text()).toBe('Previous');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PaginationPrevious className="extra">Yo!</PaginationPrevious>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PaginationPrevious tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render disabled', () => {
    const wrapper = shallow(<PaginationPrevious disabled />);

    expect(wrapper.html()).toBe('<a class="pagination-previous" disabled=""></a>');
  });
});
