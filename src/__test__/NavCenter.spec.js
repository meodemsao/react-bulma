import React from 'react';
import { shallow } from 'enzyme';
import { NavCenter } from '../';

describe('NavCenter', () => {
  it('should render a nav center tag by default', () => {
    const wrapper = shallow(<NavCenter />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<NavCenter />);

    expect(wrapper.hasClass('nav-center')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<NavCenter>Yo!</NavCenter>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<NavCenter className="extra">Yo!</NavCenter>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<NavCenter tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
