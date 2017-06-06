/**
 * Created by anvu69 on 6/2/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Image,
  Subtitle,
  Title
} from 'reactbulma';

import ImageExample from '../Example/Image/ImageExample';
const ImageExampleSource = require('!!raw!../Example/Image/ImageExample');

import ImageRetina from '../Example/Image/ImageRetina';
const ImageRetinaSource = require('!!raw!../Example/Image/ImageRetina');

export default class ImagePage extends React.Component {
  render() {
    return (
      <Container>
        <Title>Images</Title>
        <Subtitle>
          A container for
          {' '}
          <strong>responsive images</strong>
        </Subtitle>
        <hr />
        <Content>
          <p>
            Because images can take a few seconds to load (or not at all), use the
            {' '}
            <code>.image</code>
            {' '}
            container to specify a
            {' '}
            <strong>precisely sized</strong>
            {' '}
            container so that your layout isn't broken because of image loading or image errors.
          </p>
        </Content>
        <div className="example">
          <ImageExample />
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {ImageExampleSource}
            </PrismCode>
          </pre>
        </figure>
        <hr />
        <Title tag="h3">Fixed square images</Title>
        <Content>
          <p>
            There are
            {' '}
            <strong>7</strong>
            {' '}
            dimensions to choose from, useful for
            {' '}
            <strong>avatars</strong>:
          </p>
        </Content>
        <table className="table is-bordered">
          <tbody>
            <tr>
              <td><code>image is-16x16</code></td>
              <td><Image size="16x16" src="http://bulma.io/images/placeholders/16x16.png" /></td>
              <td>16x16px</td>
            </tr>
            <tr>
              <td><code>image is-24x24</code></td>
              <td><Image size="24x24" src="http://bulma.io/images/placeholders/24x24.png" /></td>
              <td>24x24px</td>
            </tr>
            <tr>
              <td><code>image is-32x32</code></td>
              <td><Image size="32x32" src="http://bulma.io/images/placeholders/32x32.png" /></td>
              <td>32x32px</td>
            </tr>
            <tr>
              <td><code>image is-48x48</code></td>
              <td><Image size="48x48" src="http://bulma.io/images/placeholders/48x48.png" /></td>
              <td>48x48px</td>
            </tr>
            <tr>
              <td><code>image is-64x64</code></td>
              <td><Image size="64x64" src="http://bulma.io/images/placeholders/64x64.png" /></td>
              <td>64x64px</td>
            </tr>
            <tr>
              <td><code>image is-96x96</code></td>
              <td><Image size="96x96" src="http://bulma.io/images/placeholders/96x96.png" /></td>
              <td>96x96px</td>
            </tr>
            <tr>
              <td><code>image is-128x128</code></td>
              <td><Image size="128x128" src="http://bulma.io/images/placeholders/128x128.png" /></td>
              <td>128x128px</td>
            </tr>
          </tbody>
        </table>
        <Title tag="h4">Retina images</Title>
        <Content>
          <p>
            Because the image is fixed in size, you can use an image that is
            {' '}
            <strong>twice as big</strong>. So for example, in a
            {' '}
            <code>128x128</code>
            {' '}
            container, you can use a
            {' '}
            <code>256x256</code>
            {' '}
            image, but resized to
            {' '}
            <strong>128x128</strong>
            {' '}
            pixels.
          </p>
        </Content>
        <div className="example">
          <ImageRetina />
        </div>
        <figure className="highlight">
          <pre>
            <PrismCode className="language-jsx">
              {ImageRetinaSource}
            </PrismCode>
          </pre>
        </figure>
        <hr />
        <Title tag="h3">Responsive images with ratios</Title>
        <Content>
          <p>
            If you don't know the exact dimensions but know the
            {' '}
            <strong>ratio</strong>
            {' '}
            instead, you can use one of the
            {' '}
            <strong>5 ratio modifers</strong>:
          </p>
        </Content>
        <table className="table is-bordered" id="images">
          <tbody>
            <tr>
              <td><code>image is-square</code></td>
              <td><Image size="square" src="http://bulma.io/images/placeholders/480x480.png" /></td>
              <td>Square (or 1by1)</td>
            </tr>
            <tr>
              <td><code>image is-1by1</code></td>
              <td><Image size="1by1" src="http://bulma.io/images/placeholders/480x480.png" /></td>
              <td>1 by 1</td>
            </tr>
            <tr>
              <td><code>image is-4by3</code></td>
              <td><Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" /></td>
              <td>4 by 3</td>
            </tr>
            <tr>
              <td><code>image is-3by2</code></td>
              <td><Image size="3by2" src="http://bulma.io/images/placeholders/480x320.png" /></td>
              <td>3 by 2</td>
            </tr>
            <tr>
              <td><code>image is-16by9</code></td>
              <td><Image size="16by9" src="http://bulma.io/images/placeholders/640x360.png" /></td>
              <td>16 by 9</td>
            </tr>
            <tr>
              <td><code>image is-2by1</code></td>
              <td><Image size="2by1" src="http://bulma.io/images/placeholders/640x320.png" /></td>
              <td>2 by 1</td>
            </tr>
          </tbody>
        </table>
        <Content>
          <p>
            The
            {' '}
            <code>.image</code>
            {' '}
            container will take up the
            {' '}
            <strong>whole width</strong>
            {' '}
            while maintaining the perfect ratio.</p>
        </Content>
      </Container>
    );
  }
}
