import React from 'react';
import { Content, Image, Tile } from 'reactbulma';

export const TileExample = () => {
  return (
    <Tile contextual="ancestor">
      <Tile directional size="8">
        <Tile>
          <Tile contextual="parent" directional>
            <Tile tag="article" contextual="child notification is-primary">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </Tile>
            <Tile tag="article" contextual="child notification is-warning">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </Tile>
          </Tile>
          <Tile contextual="parent">
            <Tile tag="article" contextual="child notification is-info">
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
            </Tile>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child notification is-danger">
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <Content><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p></Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile contextual="parent">
        <Tile tag="article" contextual="child notification is-success">
          <Content>
            <p className="title">Tall tile</p>
            <p className="subtitle">With even more content</p>
            <Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </Content>
          </Content>
        </Tile>
      </Tile>
    </Tile>
  );
};

export default TileExample;
