import React from 'react';
import { shallow } from 'enzyme';
import { PaginationEllipsis } from '../';

describe('PaginationEllipsis', () => {
  it('should render a pagination ellipsis tag by default and default class', () => {
    const wrapper = shallow(<PaginationEllipsis />);

    expect(wrapper.html()).toBe('<li><span class="pagination-ellipsis"></span></li>');
  });

  it('should render children', () => {
    const wrapper = shallow(<PaginationEllipsis>Yo!</PaginationEllipsis>);

    expect(wrapper.html()).toBe('<li><span class="pagination-ellipsis">Yo!</span></li>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PaginationEllipsis className="extra">Yo!</PaginationEllipsis>);

    expect(wrapper.html()).toBe('<li><span class="extra pagination-ellipsis">Yo!</span></li>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PaginationEllipsis tag="p" />);

    expect(wrapper.html()).toBe('<li><p class="pagination-ellipsis"></p></li>');
  });
});
