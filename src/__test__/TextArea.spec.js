import React from 'react';
import {shallow} from 'enzyme';
import {TextArea} from '../';

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

    expect(wrapper.html()).toBe('<textarea class="textarea">Yo!</textarea>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<TextArea className="extra">Yo!</TextArea>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<TextArea tag="div" />);

    expect(wrapper.type()).toBe('div');
  });

});
