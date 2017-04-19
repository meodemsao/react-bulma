import React from 'react';
import { shallow } from 'enzyme';
import { MessageBody } from '../';

describe('MessageBody', () => {
  it('should render a message body tag by default', () => {
    const wrapper = shallow(<MessageBody />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<MessageBody />);

    expect(wrapper.hasClass('message-body')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<MessageBody>Yo!</MessageBody>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<MessageBody className="extra">Yo!</MessageBody>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<MessageBody tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

});
