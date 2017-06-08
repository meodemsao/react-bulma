import React from 'react';
import { Card, Icon } from 'reactbulma';

export const CardForm = () => {
  return (
    <Card>
      <Card tag="header" type="header">
        <Card tag="p" type="header-title">
          Component
        </Card>
        <Card tag="a" type="header-icon">
          <Icon name="angle-down" />
        </Card>
      </Card>
      <Card type="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        {' '}
        <a>@bulmaio</a>.
        {' '}
        <a>#css</a>
        {' '}
        <a>#responsive</a>
        <br />
        <small>11:09 PM - 1 Jan 2016</small>
      </Card>
      <Card tag="footer" type="footer">
        <Card tag="a" type="footer-item">Save</Card>
        <Card tag="a" type="footer-item">Edit</Card>
        <Card tag="a" type="footer-item">Delete</Card>
      </Card>
    </Card>
  );
};

export default CardForm;
