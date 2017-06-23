import React from 'react';
import { shallow } from 'enzyme';
import { FieldBody } from '../';

describe('FieldBody', () => {
  it('should render a feild tag by default', () => {
    const wrapper = shallow(<FieldBody />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<FieldBody />);

    expect(wrapper.hasClass('field-body')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<FieldBody>Yo!</FieldBody>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<FieldBody className="extra">Yo!</FieldBody>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<FieldBody tag="span">Yo!</FieldBody>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render size', () => {
    const wrapper = shallow(<FieldBody size="fullwidth">Yo!</FieldBody>);

    expect(wrapper.hasClass('is-fullwidth')).toBe(true);
  });
});
