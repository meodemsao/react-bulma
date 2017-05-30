import React from 'react';
import { Content, Tile } from 'reactbulma';

export const Tile4Columns = () => {
  return (
    <div>
      <Tile contextual="ancestor">
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">One</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">Two</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">Three</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">Four</p>
            <p className="subtitle">Subtitle</p>
          </Tile>
        </Tile>
      </Tile>
      <Tile contextual="ancestor">
        <Tile directional size="9">
          <Tile>
            <Tile contextual="parent">
              <Tile tag="article" contextual="child box">
                <p className="title">Five</p>
                <p className="subtitle">Subtitle</p>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                </Content>
              </Tile>
            </Tile>
            <Tile size="8" directional>
              <Tile>
                <Tile contextual="parent">
                  <Tile tag="article" contextual="child box">
                    <p className="title">Six</p>
                    <p className="subtitle">Subtitle</p>
                  </Tile>
                </Tile>
                <Tile contextual="parent">
                  <Tile tag="article" contextual="child box">
                    <p className="title">Seven</p>
                    <p className="subtitle">Subtitle</p>
                  </Tile>
                </Tile>
              </Tile>
              <Tile contextual="parent">
                <Tile tag="article" contextual="child box">
                  <p className="title">Eight</p>
                  <p className="subtitle">Subtitle</p>
                </Tile>
              </Tile>
            </Tile>
          </Tile>
          <Tile>
            <Tile size="8" contextual="parent">
              <Tile tag="article" contextual="child box">
                <p className="title">Nine</p>
                <p className="subtitle">Subtitle</p>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </Content>
              </Tile>
            </Tile>
            <Tile contextual="parent">
              <Tile tag="article" contextual="child box">
                <p className="title">Ten</p>
                <p className="subtitle">Subtitle</p>
                <Content>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </Content>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <Content>
              <p className="title">Eleven</p>
              <p className="subtitle">Subtitle</p>
              <Content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </Content>
            </Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile contextual="ancestor">
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">Twelve</p>
            <p className="subtitle">Subtitle</p>
            <Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
            </Content>
          </Tile>
        </Tile>
        <Tile contextual="parent" size="6">
          <Tile tag="article" contextual="child box">
            <p className="title">Thirteen</p>
            <p className="subtitle">Subtitle</p>
            <Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </Content>
          </Tile>
        </Tile>
        <Tile contextual="parent">
          <Tile tag="article" contextual="child box">
            <p className="title">Fourteen</p>
            <p className="subtitle">Subtitle</p>
            <Content>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
    </div>
  );
};

export default Tile4Columns;
