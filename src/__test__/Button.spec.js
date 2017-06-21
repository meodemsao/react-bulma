import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
  it('should render a button tag by default', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.type()).toBe('a');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.hasClass('button')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Button>Yo!</Button>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Button className="extra">Yo!</Button>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Button tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom size', () => {
    const wrapper = shallow(<Button size="small" />);

    expect(wrapper.hasClass('is-small')).toBe(true);
  });

  it('should render custom state', () => {
    const wrapper = shallow(<Button state="hovered" />);

    expect(wrapper.hasClass('is-hovered')).toBe(true);
  });

  it('should render modal button type', () => {
    const wrapper = shallow(<Button modalType="button" />);

    expect(wrapper.hasClass('modal-button')).toBe(true);
  });
});
