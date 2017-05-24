import React from 'react';
import { shallow } from 'enzyme';
import { Section } from '../';

describe('Section', () => {
  it('should render a section tag by default', () => {
    const wrapper = shallow(<Section />);

    expect(wrapper.type()).toBe('section');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Section />);

    expect(wrapper.hasClass('section')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Section>Yo!</Section>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Section className="extra">Yo!</Section>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Section tag="div" />);

    expect(wrapper.type()).toBe('div');
  });
});
