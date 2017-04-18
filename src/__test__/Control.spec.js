import React from 'react';
import {shallow} from 'enzyme';
import {Control} from '../';

describe('Control', () => {
  it('should render a control tag by default', () => {
    const wrapper = shallow(<Control />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Control />);

    expect(wrapper.hasClass('control')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Control>Yo!</Control>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Control className="extra">Yo!</Control>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Control tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom propery', () => {
    const wrapper = shallow(<Control expanded={true} iconLeft={true} iconRight={true} />);

    expect(wrapper.hasClass('is-expanded')).toBe(true);
    expect(wrapper.hasClass('has-icons-left')).toBe(true);
    expect(wrapper.hasClass('has-icon-right')).toBe(true);
  });
});
