import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '../';

describe('Image', () => {
  it('should render a image tag by default', () => {
    const wrapper = shallow(<Image />);

    expect(wrapper.html()).toBe('<figure class="image"><img role="presentation"/></figure>');
  });

  it('should render default class', () => {
    const wrapper = shallow(<Image />);

    expect(wrapper.hasClass('image')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Image />);

    expect(wrapper.html()).toBe('<figure class="image"><img role="presentation"/></figure>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Image className="extra">Yo!</Image>);

    expect(wrapper.hasClass('extra')).toBe(true);
  });

  it('should render src & size', () => {
    const wrapper = shallow(<Image size="128x128" src="http://bulma.io/images/placeholders/128x128.png" />);

    expect(wrapper.html()).toBe('<figure class="image is-128x128"><img src="http://bulma.io/images/placeholders/128x128.png" role="presentation"/></figure>');
  });
});
