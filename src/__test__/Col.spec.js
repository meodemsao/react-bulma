import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '../';

describe('Col', () => {
  it('should render a hero tag by default', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Col />);

    expect(wrapper.hasClass('column')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Col>Yo!</Col>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Col className="extra">Yo!</Col>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Col tag="span">Yo!</Col>);

    expect(wrapper.type()).toBe('span');
  });
});
