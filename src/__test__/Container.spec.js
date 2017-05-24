import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../';

describe('Container', () => {
  it('should render a container tag by default', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Container>Yo!</Container>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Container className="extra">Yo!</Container>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Container tag="span">Yo!</Container>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Container fluid>Yo!</Container>);

    expect(wrapper.hasClass('is-fluid')).toBe(true);
  });
});
