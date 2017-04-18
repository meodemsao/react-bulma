import React from 'react';
import { shallow } from 'enzyme';
import { Cols } from '../';

describe('Cols', () => {
  it('should render a col tag by default', () => {
    const wrapper = shallow(<Cols />);

    expect(wrapper.type()).toBe('div');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Cols />);

    expect(wrapper.hasClass('columns')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Cols>Yo!</Cols>);

    expect(wrapper.text()).toBe('Yo!');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Cols className="extra">Yo!</Cols>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const wrapper = shallow(<Col tag="span">Yo!</Col>);

    expect(wrapper.type()).toBe('span');
  });
});
