import React from 'react';
import { shallow } from 'enzyme';
import { Box } from '../';

describe('Box', () => {
  it('should render a box tag by default', () => {
    const wrapper = shallow(<Box />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Box />);

    expect(wrapper.hasClass('box')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Box>Yo!</Box>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Box className="extra">Yo!</Box>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Box tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });
});
