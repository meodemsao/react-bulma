import React from 'react';
import { Card, Content, Image, Media } from 'reactbulma';

export const CardQuote = () => {
  return (
    <Card>
      <Card type="content">
        <p className="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
        <p className="subtitle">Jeff Atwood</p>
      </Card>
      <Card tag="footer" type="footer">
        <Card tag="p" type="footer-item">
          <span>
            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </Card>
        <Card tag="p" type="footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </Card>
      </Card>
    </Card>
  );
};

export default CardQuote;
