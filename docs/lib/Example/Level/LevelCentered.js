import React from 'react';
import { Level, LevelItem } from 'reactbulma';

export const LevelCentered = () => {
  return (
    <Level>
      <LevelItem textCenter>
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </LevelItem>
      <LevelItem textCenter>
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </LevelItem>
      <LevelItem textCenter>
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </LevelItem>
      <LevelItem textCenter>
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </LevelItem>
    </Level>
  );
};

export default LevelCentered;
