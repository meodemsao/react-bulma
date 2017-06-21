import React from 'react';
import { Button, Control, Icon, Input, Panel, PanelBlock, PanelHeading, PanelTabs } from 'reactbulma';

export const PanelExample = () => {
  return (
    <Panel>
      <PanelHeading>
        Repositories
      </PanelHeading>
      <PanelBlock>
        <Control iconLeft>
          <Input size="small" type="text" placeholder="Search" />
          <Icon size="small" left name="search" />
        </Control>
      </PanelBlock>
      <PanelTabs tag="p">
        <a className="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </PanelTabs>
      <PanelBlock tag="a" active>
        <Icon panel name="book" />
        bulma
      </PanelBlock>
      <PanelBlock tag="a">
        <Icon panel name="book" />
        marksheet
      </PanelBlock>
      <PanelBlock tag="a">
        <Icon panel name="book" />
        minireset.css
      </PanelBlock>
      <PanelBlock tag="a">
        <Icon panel name="book" />
        jgthms.github.io
      </PanelBlock>
      <PanelBlock tag="a">
        <Icon panel name="code-fork" />
        daniellowtw/infBoard
      </PanelBlock>
      <PanelBlock tag="a">
        <Icon panel name="code-fork" />
        mojs
      </PanelBlock>
      <PanelBlock tag="label">
        <Input type="checkbox" />
          Remember me
      </PanelBlock>
      <PanelBlock>
        <Button color="primary" outlined size="fullwidth">
          Reset all filters
        </Button>
      </PanelBlock>
    </Panel>
  );
};

export default PanelExample;
