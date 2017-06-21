import React from 'react';
import { Level } from 'reactbulma';

export const LevelMobile = () => {
  return (
    <Level mobile>
      <Level tag="div" type="item" textCenter>
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </Level>
      <Level tag="div" type="item" textCenter>
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </Level>
      <Level tag="div" type="item" textCenter>
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </Level>
      <Level tag="div" type="item" textCenter>
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </Level>
    </Level>
  );
};

export default LevelMobile;
