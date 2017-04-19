import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../';

describe('Icon', () => {
  it('should render a icon tag by default', () => {
    const wrapper = shallow(<Icon />);

    expect(wrapper.html()).toBe('<span class="icon"><i class=""></i></span>');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Icon />);

    expect(wrapper.hasClass('icon')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Icon>Yo!</Icon>);

    expect(wrapper.html()).toBe('<span class="icon"><i class=""></i></span>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Icon className="extra">Yo!</Icon>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Icon tag="div">Yo!</Icon>);

    expect(wrapper.type()).toBe('div');
  });
});
