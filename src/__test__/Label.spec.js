import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../';

describe('Label', () => {
  it('should render a label tag by default', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper.type()).toBe('label');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Label />);

    expect(wrapper.hasClass('label')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Label>Yo!</Label>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Label className="extra">Yo!</Label>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Label tag="span" />);

    expect(wrapper.type()).toBe('span');
  });
});
