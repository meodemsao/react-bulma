import React from 'react';
import { Progress } from 'reactbulma';

export const ProgressSize = () => {
  return (
    <div>
      <Progress size="small" value="15" max="100">15%</Progress>
      <Progress class="progress" value="30" max="100">30%</Progress>
      <Progress class="progress is-medium" value="45" max="100">45%</Progress>
      <Progress class="progress is-large" value="60" max="100">60%</Progress>
    </div>
  );
};

export default ProgressSize;
