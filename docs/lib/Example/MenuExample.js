import React from 'react';
import { Menu } from 'reactbulma';

export const MenuExample = () => {
  return (
    <Menu>
      <Menu tag="p" type="label">
        General
      </Menu>
      <Menu tag="ul" type="list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </Menu>
      <Menu tag="p" type="label">
        Administration
      </Menu>
      <Menu tag="ul" type="list">
        <li><a>Team Settings</a></li>
        <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </Menu>
      <Menu tag="p" type="label">
        Transactions
      </Menu>
      <Menu tag="ul" type="list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </Menu>
    </Menu>
  );
};

export default MenuExample;
