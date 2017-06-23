import React from 'react';
import { shallow } from 'enzyme';
import { Select } from '../';

describe('Select', () => {
  it('should render a select tag by default and default class', () => {
    const wrapper = shallow(<Select />);

    expect(wrapper.html()).toBe('<span class="select"><select></select></span>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Select>Yo!</Select>);

    expect(wrapper.html()).toBe('<span class="select"><select>Yo!</select></span>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Select className="extra">Yo!</Select>);

    expect(wrapper.html()).toBe('<span class="extra select"><select>Yo!</select></span>');
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Select tag="p" />);

    expect(wrapper.html()).toBe('<p class="select"><select></select></p>');
  });

  it('should render disabled', () => {
    const wrapper = shallow(<Select disabled />);

    expect(wrapper.html()).toBe('<span class="select is-disabled"><select disabled=""></select></span>');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Select state="loading" size="small" />);

    expect(wrapper.html()).toBe('<span class="select is-loading is-small"><select></select></span>');
  });
});
