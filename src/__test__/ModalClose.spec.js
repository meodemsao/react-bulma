import React from 'react';
import { shallow } from 'enzyme';
import { ModalClose } from '../';

describe('ModalClose', () => {
  it('should render a modal close tag by default', () => {
    const wrapper = shallow(<ModalClose />);

    expect(wrapper.type()).toBe('button');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalClose />);

    expect(wrapper.hasClass('modal-close')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalClose>Yo!</ModalClose>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalClose className="extra">Yo!</ModalClose>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalClose tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
