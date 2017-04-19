import React from 'react';
import { shallow } from 'enzyme';
import { ModalContent } from '../';

describe('ModalContent', () => {
  it('should render a modal content tag by default', () => {
    const wrapper = shallow(<ModalContent />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalContent />);

    expect(wrapper.hasClass('modal-content')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalContent>Yo!</ModalContent>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalContent className="extra">Yo!</ModalContent>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalContent tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
