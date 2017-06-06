import React from 'react';
import { Progress } from 'reactbulma';

export const ProgressExample = () => {
  return (
    <div>
      <Progress value="15" max="100">15%</Progress>
      <Progress color="primary" value="30" max="100">30%</Progress>
      <Progress color="info" value="45" max="100">45%</Progress>
      <Progress color="success" value="60" max="100">60%</Progress>
      <Progress color="warning" value="75" max="100">75%</Progress>
      <Progress color="=danger" value="90" max="100">90%</Progress>
    </div>
  );
};

export default ProgressExample;
