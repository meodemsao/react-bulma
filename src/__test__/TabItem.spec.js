import React from 'react';
import { shallow } from 'enzyme';
import { TabItem } from '../';

describe('TabItem', () => {
  it('should render a tab item tag by default', () => {
    const wrapper = shallow(<TabItem />);

    expect(wrapper.type()).toBe('li');
  });

  it('should render children', () => {
    const wrapper = shallow(<TabItem>Yo!</TabItem>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<TabItem className="extra">Yo!</TabItem>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<TabItem tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<TabItem active />);

    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
