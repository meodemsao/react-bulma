import React from 'react';
import { shallow } from 'enzyme';
import { TabList } from '../';

describe('TabList', () => {
  it('should render a tab item tag by default', () => {
    const wrapper = shallow(<TabList />);

    expect(wrapper.type()).toBe('ul');
  });

  it('should render children', () => {
    const wrapper = shallow(<TabList>Yo!</TabList>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<TabList className="extra">Yo!</TabList>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<TabList tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
