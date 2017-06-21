import React from 'react';
import { Content, Control, Button, Field, Image, Media, TextArea } from 'reactbulma';

export const MediaNesting = () => {
  return (
    <div>
      <Media>
        <Media left>
          <Image tag="p" size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </Media>
        <Media content>
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit
              non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br />
              <small>
                <a>Like</a>
                {' '}
                ·
                {' '}
                <a>Reply</a>
                {' '}
                ·
                {' '}
                3 hrs
              </small>
            </p>
          </Content>
          <Media >
            <Media left>
              <Image tag="p" size="48x48" src="http://bulma.io/images/placeholders/96x96.png" />
            </Media>
            <Media content>
              <Content>
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
                  feugiat.
                  <br />
                  <small>
                    <a>Like</a>
                    {' '}
                    ·
                    {' '}
                    <a>Reply</a>
                    {' '}
                    ·
                    {' '}
                    2 hrs
                  </small>
                </p>
              </Content>
              <Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
                massa.
              </Media>
              <Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
                euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </Media>
            </Media>
          </Media>
          <Media>
            <Media left>
              <Image tag="p" size="48x48" src="http://bulma.io/images/placeholders/96x96.png" />
            </Media>
            <Media content>
              <Content>
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
                  vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a>
                    {' '}
                    .
                    {' '}
                    <a>Reply</a>
                    {' '}
                    ·
                    {' '}
                    2 hrs
                  </small>
                </p>
              </Content>
            </Media>
          </Media>
        </Media>
      </Media>
      <Media>
        <Media left>
          <Image tag="p" size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </Media>
        <Media content>
          <Field>
            <Control>
              <TextArea placeholder="Add a comment..." />
            </Control>
          </Field>
          <Field>
            <Control>
              <Button>Post comment</Button>
            </Control>
          </Field>
        </Media>
      </Media>
    </div>
  );
};

export default MediaNesting;
