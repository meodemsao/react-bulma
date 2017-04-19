import React from 'react';
import { shallow } from 'enzyme';
import { ModalBackground } from '../';

describe('ModalBackground', () => {
  it('should render a modal background tag by default', () => {
    const wrapper = shallow(<ModalBackground />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalBackground />);

    expect(wrapper.hasClass('modal-background')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalBackground>Yo!</ModalBackground>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalBackground className="extra">Yo!</ModalBackground>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalBackground tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
