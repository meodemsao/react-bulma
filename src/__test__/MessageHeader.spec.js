import React from 'react';
import { shallow } from 'enzyme';
import { MessageHeader } from '../';

describe('MessageHeader', () => {
  it('should render a message header tag by default', () => {
    const wrapper = shallow(<MessageHeader />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<MessageHeader />);

    expect(wrapper.hasClass('message-header')).toBe(true);
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<MessageHeader className="extra">Yo!</MessageHeader>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<MessageHeader tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<MessageHeader title="Hello"/>);

    expect(wrapper.html()).toBe('<div class="message-header">Hello<a class="delete"></a></div>');
  });

});
