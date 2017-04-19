import React from 'react';
import { shallow } from 'enzyme';
import { ModalCard } from '../';

describe('ModalCard', () => {
  it('should render a modal card tag by default', () => {
    const wrapper = shallow(<ModalCard />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<ModalCard />);

    expect(wrapper.hasClass('modal-card')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<ModalCard>Yo!</ModalCard>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<ModalCard className="extra">Yo!</ModalCard>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<ModalCard tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
