import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from '../';

describe('Panel', () => {
  it('should render a panel tag by default', () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.type()).toBe('nav');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.hasClass('panel')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Panel>Yo!</Panel>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Panel className="extra">Yo!</Panel>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Panel tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

});
