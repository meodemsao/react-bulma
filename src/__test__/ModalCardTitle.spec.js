import React from 'react';
import { shallow } from 'enzyme';
import { ModalCardTitle } from '../';

describe('ModalCardTitle', () => {
  it('should render a modal close tag by default', () => {
    const wrapper = shallow(<ModalCardTitle />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalCardTitle />);

    expect(wrapper.hasClass('modal-card-title')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalCardTitle>Yo!</ModalCardTitle>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalCardTitle className="extra">Yo!</ModalCardTitle>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalCardTitle tag="a" />);

    expect(wrapper.type()).toBe('a');
  });
});
