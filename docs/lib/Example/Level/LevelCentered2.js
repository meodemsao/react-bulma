import React from 'react';
import { Level, LevelItem } from 'reactbulma';

export const LevelCentered2 = () => {
  return (
    <Level>
      <LevelItem textCenter>
        <a className="link is-info">Home</a>
      </LevelItem>
      <LevelItem textCenter>
        <a className="link is-info">Menu</a>
      </LevelItem>
      <LevelItem textCenter>
        <image src="http://bulma.io/images/bulma-type.png" style={{ height: 30 }} />
      </LevelItem>
      <LevelItem textCenter>
        <a className="link is-info">Reservations</a>
      </LevelItem>
      <LevelItem textCenter>
        <a className="link is-info">Contact</a>
      </LevelItem>
    </Level>
  );
};

export default LevelCentered2;
