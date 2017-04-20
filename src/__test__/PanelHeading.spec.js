import React from 'react';
import { shallow } from 'enzyme';
import { PanelHeading } from '../';

describe('PanelHeading', () => {
  it('should render a panel heading tag by default', () => {
    const wrapper = shallow(<PanelHeading />);

    expect(wrapper.type()).toBe('p');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PanelHeading />);

    expect(wrapper.hasClass('panel-heading')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PanelHeading>Yo!</PanelHeading>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PanelHeading className="extra">Yo!</PanelHeading>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PanelHeading tag="div"/>);

    expect(wrapper.type()).toBe('div');
  });

});
