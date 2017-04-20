import React from 'react';
import { shallow } from 'enzyme';
import { PanelBlock } from '../';

describe('PanelBlock', () => {
  it('should render a panel block tag by default', () => {
    const wrapper = shallow(<PanelBlock />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<PanelBlock />);

    expect(wrapper.hasClass('panel-block')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<PanelBlock>Yo!</PanelBlock>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<PanelBlock className="extra">Yo!</PanelBlock>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<PanelBlock tag="span"/>);

    expect(wrapper.type()).toBe('span');
  });

  it('should render custom property', () => {
    const wrapper = shallow(<PanelBlock active={true}/>);

    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
