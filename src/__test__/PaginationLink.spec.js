import React from 'react';
import {shallow} from 'enzyme';
import {PaginationLink} from '../';

describe('PaginationLink', () => {
  it('should render a pagination link tag by default', () => {
    const wrapper = shallow(<PaginationLink />);

    expect(wrapper.html()).toBe('<li><a class="pagination-link"></a></li>');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PaginationLink />);

    expect(wrapper.html()).toBe('<li><a class="pagination-link"></a></li>');
  });

  it('should render children', () => {
    const wrapper = shallow(<PaginationLink>Yo!</PaginationLink>);

    expect(wrapper.html()).toBe('<li><a class="pagination-link">Yo!</a></li>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PaginationLink className="extra">Yo!</PaginationLink>);

    expect(wrapper.html()).toBe('<li><a class="extra pagination-link">Yo!</a></li>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PaginationLink tag="span" />);

    expect(wrapper.html()).toBe('<li><span class="pagination-link"></span></li>');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<PaginationLink current={true}>Yo!</PaginationLink>);

    expect(wrapper.html()).toBe('<li><a class="pagination-link is-current">Yo!</a></li>');
  });

});
