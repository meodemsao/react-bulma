import React from 'react';
import { shallow } from 'enzyme';
import { Notification, Delete } from '../';

describe('Notification', () => {
  it('should render a notification tag by default', () => {
    const wrapper = shallow(<Notification />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Notification />);

    expect(wrapper.hasClass('notification')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Notification>
                              <Delete/>
                                Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Notification>);

    expect(wrapper.html()).toBe('<div class="notification"><a class="delete"></a>Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit</div>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Notification className="extra">Yo!</Notification>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Notification tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<Notification color="info"/>);

    expect(wrapper.hasClass('is-info')).toBe(true);
  });

});
