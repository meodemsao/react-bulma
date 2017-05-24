import React from 'react';
import { shallow } from 'enzyme';
import { ModalCardBody } from '../';

describe('ModalCard', () => {
  it('should render a modal card body tag by default', () => {
    const wrapper = shallow(<ModalCardBody />);

    expect(wrapper.type()).toBe('section');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalCardBody />);

    expect(wrapper.hasClass('modal-card-body')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalCardBody>Yo!</ModalCardBody>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalCardBody className="extra">Yo!</ModalCardBody>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalCardBody tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
