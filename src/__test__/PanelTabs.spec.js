import React from 'react';
import { shallow } from 'enzyme';
import { PanelTabs } from '../';

describe('PanelTabs', () => {
  it('should render a panel tabs tag by default', () => {
    const wrapper = shallow(<PanelTabs />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PanelTabs />);

    expect(wrapper.hasClass('panel-tabs')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PanelTabs>Yo!</PanelTabs>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PanelTabs className="extra">Yo!</PanelTabs>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PanelTabs tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

});
