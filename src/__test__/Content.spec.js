import React from 'react';
import { shallow } from 'enzyme';
import { Content } from '../';

describe('Content', () => {
  it('should render a content tag by default', () => {
    const wrapper = shallow(<Content />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Content />);

    expect(wrapper.hasClass('content')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Content>Yo!</Content>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Content className="extra">Yo!</Content>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Content tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom size', () => {
    const wrapper = shallow(<Content size="small" />);

    expect(wrapper.hasClass('is-small')).toBe(true);
  });

  it('should render content text center', () => {
    const wrapper = shallow(<Content textCenter />);

    expect(wrapper.hasClass('has-text-centered')).toBe(true);
  });
});
