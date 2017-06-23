import React from 'react';
import { shallow } from 'enzyme';
import { FieldLabel } from '../';

describe('FieldLabel', () => {
  it('should render a feild tag by default', () => {
    const wrapper = shallow(<FieldLabel />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<FieldLabel />);

    expect(wrapper.hasClass('field-label')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<FieldLabel>Yo!</FieldLabel>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<FieldLabel className="extra">Yo!</FieldLabel>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<FieldLabel tag="span">Yo!</FieldLabel>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render size', () => {
    const wrapper = shallow(<FieldLabel size="fullwidth">Yo!</FieldLabel>);

    expect(wrapper.hasClass('is-fullwidth')).toBe(true);
  });
});
