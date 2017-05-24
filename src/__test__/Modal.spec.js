import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../';

describe('Modal', () => {
  it('should render a modal tag by default', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper.hasClass('modal')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Modal>Yo!</Modal>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Modal className="extra">Yo!</Modal>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Modal tag="span" />);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Modal active />);

    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
