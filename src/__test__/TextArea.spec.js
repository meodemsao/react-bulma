import React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../';

describe('TextArea', () => {
  it('should render a textarea tag by default', () => {
    const wrapper = shallow(<TextArea />);

    expect(wrapper.type()).toBe('textarea');
  });

  it('should render default class', () => {
    const wrapper = shallow(<TextArea />);

    expect(wrapper.hasClass('textarea')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<TextArea>Yo!</TextArea>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<TextArea className="extra">Yo!</TextArea>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<TextArea tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<TextArea size="medium" color="info" state="loading" />);

    expect(wrapper.hasClass('is-medium')).toBe(true);
    expect(wrapper.hasClass('is-info')).toBe(true);
    expect(wrapper.hasClass('is-loading')).toBe(true);
  });

  it('should render disabled text area', () => {
    const wrapper = shallow(<TextArea disabled />);

    expect(wrapper.html()).toBe('<textarea class="textarea" disabled=""></textarea>');
  });
});
