import React from 'react';
import {Link} from 'react-router';
import {
  Container,
  Hero,
  Cols,
  Col,
  HeroBody,
  HeroFoot,
  Nav,
  NavLeft,
  NavItem,
  Title,
  Subtitle,
  Tabs
} from 'reactbulma';

const menuData = [
  {
    name: 'Grid', url: '/components/columns/',
    children: [
      {name: 'Columns', url: '/components/columns/'},
      {name: 'Tiles', url: '/components/tiles/'}
    ],
  },
  {
    name: 'Elements', url: '/components/button/',
    children: [
      {name: 'Button', url: '/components/button/'},
      {name: 'Content', url: '/components/content/'},
      {name: 'Delete', url: '/components/delete/'},
      {name: 'Form', url: '/components/form/'},
      {name: 'Icon', url: '/components/icon/'},
      {name: 'Image', url: '/components/image/'},
      {name: 'Notification', url: '/components/notification/'},
      {name: 'Progress', url: '/components/progress/'},
      {name: 'Table', url: '/components/table/'},
      {name: 'Tag', url: '/components/tag/'},
      {name: 'Title', url: '/components/title/'},
    ]
  },
  {
    name: 'Components', url: '/components/card/',
    children: [
      {name: 'Card', url: '/components/card/'},
      {name: 'Level', url: '/components/level/'},
      {name: 'Media object', url: '/components/mediaobject/'},
      {name: 'Menu', url: '/components/menu/'},
      {name: 'Message', url: '/components/message/'},
      {name: 'Modal', url: '/components/modal/'},
      {name: 'Nav', url: '/components/nav/'},
      {name: 'Pagination', url: '/components/pagination/'},
      {name: 'Panel', url: '/components/panel/'},
      {name: 'Tabs', url: '/components/tabs/'},
    ]
  },
  {
    name: 'Layout', url: '/components/container/',
    children: [
      {name: 'Container', url: '/components/container/'},
      {name: 'Hero', url: '/components/hero/'},
      {name: 'Section', url: '/components/section/'},
      {name: 'Footer', url: '/components/footer/'},
    ]
  }
];

function findMenu(menu, url) {
  return menu.url === url;
}



export default class Menu extends React.Component {
  constructor(props) {
    super(props);

  }

  activeRoute(routeName) {
    console.log(this.props.location.pathname);
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'is-active' : '';
  }

  renderTabItem(tab, index) {
    return (
      <li key={index} className={this.activeRoute(tab.url)}>
        <Link to={tab.url}>{tab.name}</Link>
      </li>
    )
  }

  renderNavItem(nav) {
    return (
      <NavItem>
        {nav.name}
      </NavItem>
    )
  }

  renderNavMenu(tab) {
    return (
      <Nav>
        <Container>
          <NavLeft>
            {tab.children.map((nav) => {
              this.renderNavItem(nav)
            })}
          </NavLeft>
        </Container>
      </Nav>
    )
  }

  render() {
    return (
      <Hero tag="section" color="primary">
        <HeroBody>
          <Container>
            <Cols>
              <Col>
                <Title tag="p">Documentation</Title>
                <Subtitle tag="p">Everything you need to <strong>create a website</strong> with Reactbulma</Subtitle>
              </Col>
              <Col narrow={true}>
              </Col>
            </Cols>
          </Container>
        </HeroBody>
        <HeroFoot>
          <Container>
            <Tabs style="boxed">
              <ul>
                {menuData.map((tab, index) => {
                  return this.renderTabItem(tab, index)
                })}
              </ul>
            </Tabs>
          </Container>

        </HeroFoot>
      </Hero>
    );
  }
}
