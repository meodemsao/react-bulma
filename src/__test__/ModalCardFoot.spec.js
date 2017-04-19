import React from 'react';
import { shallow } from 'enzyme';
import { ModalCardFoot } from '../';

describe('ModalCardFoot', () => {
  it('should render a modal card foot tag by default', () => {
    const wrapper = shallow(<ModalCardFoot />);

    expect(wrapper.type()).toBe('footer');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalCardFoot />);

    expect(wrapper.hasClass('modal-card-foot')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalCardFoot>Yo!</ModalCardFoot>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalCardFoot className="extra">Yo!</ModalCardFoot>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalCardFoot tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
