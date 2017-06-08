import React from 'react';
import { Level } from 'reactbulma';

export const LevelCentered2 = () => {
  return (
    <Level>
      <Level tag="p" type="item" textCenter>
        <a className="link is-info">Home</a>
      </Level>
      <Level tag="p" type="item" textCenter>
        <a className="link is-info">Menu</a>
      </Level>
      <Level tag="p" type="item" textCenter>
        <image src="http://bulma.io/images/bulma-type.png" style={{ height: 30 }} />
      </Level>
      <Level tag="p" type="item" textCenter>
        <a className="link is-info">Reservations</a>
      </Level>
      <Level tag="p" type="item" textCenter>
        <a className="link is-info">Contact</a>
      </Level>
    </Level>
  );
};

export default LevelCentered2;
