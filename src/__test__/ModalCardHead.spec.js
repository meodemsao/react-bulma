import React from 'react';
import { shallow } from 'enzyme';
import { ModalCardHead } from '../';

describe('ModalCardHead', () => {
  it('should render a modal card head tag by default', () => {
    const wrapper = shallow(<ModalCardHead />);

    expect(wrapper.type()).toBe('header');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalCardHead />);

    expect(wrapper.hasClass('modal-card-head')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalCardHead>Yo!</ModalCardHead>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalCardHead className="extra">Yo!</ModalCardHead>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalCardHead tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
