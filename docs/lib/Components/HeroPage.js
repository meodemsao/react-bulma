import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Button,
  Container,
  Content,
  Icon,
  Hero,
  HeroBody,
  HeroFoot,
  HeroHead,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  NavToggle,
  Tabs,
  Title,
  Section,
  Subtitle
} from 'reactbulma';

export default class HeroPage extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <Container>
            <Title>Hero</Title>
            <Subtitle>
              An imposing <strong>hero banner</strong> to showcase something
            </Subtitle>
          </Container>
        </Section>
        <Section fullWidth>
          <div className="example">
            <Hero tag="section">
              <HeroBody>
                <Container>
                  <p className="title">
                    Hero title
                  </p>
                  <p className="subtitle">
                    Hero subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Hero title</Title>\n' +
                  '\t\t\t<Subtitle>Hero subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Section>
        <Section>
          <Container>
            <Title tag="h3">Colors</Title>
            <Subtitle tag="h4">As with buttons, you can choose one of the <strong>7 different colors</strong></Subtitle>
          </Container>
        </Section>
        <Section fullWidth>
          <div className="example">
            <Hero tag="section" color="primary">
              <HeroBody>
                <Container>
                  <p className="title">
                    Primary title
                  </p>
                  <p className="subtitle">
                    Primary subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" color="primary">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Primary title</Title>\n' +
                  '\t\t\t<Subtitle>Primary subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" color="info">
              <HeroBody>
                <Container>
                  <p className="title">
                    Info title
                  </p>
                  <p className="subtitle">
                    Info subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" color="success">
              <HeroBody>
                <Container>
                  <p className="title">
                    Success title
                  </p>
                  <p className="subtitle">
                    Success subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" color="warning">
              <HeroBody>
                <Container>
                  <p className="title">
                    Warning title
                  </p>
                  <p className="subtitle">
                    Warning subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" color="danger">
              <HeroBody>
                <Container>
                  <p className="title">
                    Danger title
                  </p>
                  <p className="subtitle">
                    Danger subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" color="light">
              <HeroBody>
                <Container>
                  <p className="title">
                    Light title
                  </p>
                  <p className="subtitle">
                    Light subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" color="dark">
              <HeroBody>
                <Container>
                  <p className="title">
                    Dark title
                  </p>
                  <p className="subtitle">
                    Dark subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
        </Section>
        <Section>
          <Container>
            <Title tag="h3">Gradients</Title>
            <Subtitle tag="h4">
              By adding the <code>bold</code> modifier, you can generate a subtle <strong>gradient</strong>
            </Subtitle>
          </Container>
        </Section>
        <Section fullWidth>
          <div className="example">
            <Hero tag="section" bold size="medium" color="primary">
              <HeroBody>
                <Container>
                  <p className="title">
                    Primary bold title
                  </p>
                  <p className="subtitle">
                    Primary bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" bold size="medium" color="primary">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Primary bold title</Title>\n' +
                  '\t\t\t<Subtitle>Primary bold subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" bold size="medium" color="info">
              <HeroBody>
                <Container>
                  <p className="title">
                    Info bold title
                  </p>
                  <p className="subtitle">
                    Info bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" bold size="medium" color="success">
              <HeroBody>
                <Container>
                  <p className="title">
                    Success bold title
                  </p>
                  <p className="subtitle">
                    Success bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" bold size="medium" color="warning">
              <HeroBody>
                <Container>
                  <p className="title">
                    Warning bold title
                  </p>
                  <p className="subtitle">
                    Warning bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" bold size="medium" color="danger">
              <HeroBody>
                <Container>
                  <p className="title">
                    Danger bold title
                  </p>
                  <p className="subtitle">
                    Danger bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" bold size="medium" color="light">
              <HeroBody>
                <Container>
                  <p className="title">
                    Light bold title
                  </p>
                  <p className="subtitle">
                    Light bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <div className="example">
            <Hero tag="section" bold size="medium" color="dark">
              <HeroBody>
                <Container>
                  <p className="title">
                    Dark bold title
                  </p>
                  <p className="subtitle">
                    Dark bold subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
        </Section>
        <Section>
          <Container>
            <Title tag="h3">Sizes</Title>
            <Subtitle tag="h4">You can have even more imposing banners by using one of <strong>3 different
              sizes</strong></Subtitle>
          </Container>
        </Section>
        <Section fullWidth>
          <div className="example">
            <Hero tag="section" size="medium" color="primary">
              <HeroBody>
                <Container>
                  <p className="title">
                    Medium title
                  </p>
                  <p className="subtitle">
                    Medium subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" size="medium" color="primary">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Medium title</Title>\n' +
                  '\t\t\t<Subtitle>Medium subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" size="large" color="info">
              <HeroBody>
                <Container>
                  <p className="title">
                    Large title
                  </p>
                  <p className="subtitle">
                    Large subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" size="large" color="info">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Large title</Title>\n' +
                  '\t\t\t<Subtitle>Large subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" size="fullheight" color="success">
              <HeroBody>
                <Container>
                  <p className="title">
                    Full Height title
                  </p>
                  <p className="subtitle">
                    Full Height subtitle
                  </p>
                </Container>
              </HeroBody>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" size="fullheight" color="success">\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Full Height title</Title>\n' +
                  '\t\t\t<Subtitle>Full Height subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Section>
        <Section>
          <Container>
            <Title tag="h3">Full height hero</Title>
            <Subtitle tag="h4">And vertically centered</Subtitle>
            <Content>
              <p>You can split the hero in <strong>3 vertical parts</strong>:</p>
              <ul>
                <li>
                  <code>{'<Hero />'}</code>
                  <ul>
                    <li><code>{'<HeroHead />'}</code> (always at the top)</li>
                    <li><code>{'<HeroBody>'}</code> (always vertically centered)</li>
                    <li><code>{'<HeroFoot />'}</code> (always at the bottom)</li>
                  </ul>
                </li>
              </ul>
            </Content>
          </Container>
        </Section>
        <Section fullWidth>
          <div className="example">
            <Hero tag="section" size="medium" color="primary">
              <HeroHead>
                <Nav tag="header">
                  <Container>
                    <NavLeft>
                      <NavItem>
                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </NavItem>
                    </NavLeft>
                    <NavToggle>
                      <span />
                      <span />
                      <span />
                    </NavToggle>
                    <NavRight navMenu>
                      <NavItem active>Home</NavItem>
                      <NavItem>Example</NavItem>
                      <NavItem>Documentation</NavItem>
                      <NavItem tag="span">
                        <Button color="primary" inverted>
                          <Icon name="github" />
                          <span>Download</span>
                        </Button>
                      </NavItem>
                    </NavRight>
                  </Container>
                </Nav>
              </HeroHead>
              <HeroBody>
                <Container textCenter>
                  <p className="title">
                    Title
                  </p>
                  <p className="subtitle">
                    Subtitle
                  </p>
                </Container>
              </HeroBody>
              <HeroFoot>
                <Tabs tag="nav">
                  <Container>
                    <ul>
                      <li className="is-active"><a>Overview</a></li>
                      <li><a>Modifiers</a></li>
                      <li><a>Grid</a></li>
                      <li><a>Elements</a></li>
                      <li><a>Components</a></li>
                      <li><a>Layout</a></li>
                    </ul>
                  </Container>
                </Tabs>
              </HeroFoot>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section">\n' +
                  '\t<HeroHead>\n' +
                  '\t\t<Nav tag="header">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<NavLeft>\n' +
                  '\t\t\t\t\t<NavItem>\n' +
                  '\t\t\t\t\t\t<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavLeft>\n' +
                  '\t\t\t\t<NavToggle>\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t</NavToggle>\n' +
                  '\t\t\t\t<NavRight navMenu>\n' +
                  '\t\t\t\t\t<NavItem active>Home</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Example</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Documentation</NavItem>\n' +
                  '\t\t\t\t\t<NavItem tag="span">\n' +
                  '\t\t\t\t\t\t<Button color="primary" inverted>\n' +
                  '\t\t\t\t\t\t\t<Icon name="github" />\n' +
                  '\t\t\t\t\t\t\t<span>Download</span>\n' +
                  '\t\t\t\t\t\t</Button>\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavRight>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Nav>\n' +
                  '\t</HeroHead>\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Hero title</Title>\n' +
                  '\t\t\t<Subtitle>Hero subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '\t<HeroFoot>\n' +
                  '\t\t<Tabs tag="nav">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<ul>\n' +
                  '\t\t\t\t\t<li className="is-active"><a>Overview</a></li>\n' +
                  '\t\t\t\t\t<li><a>Modifiers</a></li>\n' +
                  '\t\t\t\t\t<li><a>Grid</a></li>\n' +
                  '\t\t\t\t\t<li><a>Elements</a></li>\n' +
                  '\t\t\t\t\t<li><a>Components</a></li>\n' +
                  '\t\t\t\t\t<li><a>Layout</a></li>\n' +
                  '\t\t\t\t</ul>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Tabs>\n' +
                  '\t</HeroFoot>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" size="large" color="info">
              <HeroHead>
                <Nav tag="header">
                  <Container>
                    <NavLeft>
                      <NavItem>
                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </NavItem>
                    </NavLeft>
                    <NavToggle>
                      <span />
                      <span />
                      <span />
                    </NavToggle>
                    <NavRight navMenu>
                      <NavItem active>Home</NavItem>
                      <NavItem>Example</NavItem>
                      <NavItem>Documentation</NavItem>
                      <NavItem tag="span">
                        <Button color="primary" inverted>
                          <Icon name="github" />
                          <span>Download</span>
                        </Button>
                      </NavItem>
                    </NavRight>
                  </Container>
                </Nav>
              </HeroHead>
              <HeroBody>
                <Container textCenter>
                  <p className="title">
                    Title
                  </p>
                  <p className="subtitle">
                    Subtitle
                  </p>
                </Container>
              </HeroBody>
              <HeroFoot>
                <Tabs tag="nav" fullWidth style="boxed">
                  <Container>
                    <ul>
                      <li className="is-active"><a>Overview</a></li>
                      <li><a>Modifiers</a></li>
                      <li><a>Grid</a></li>
                      <li><a>Elements</a></li>
                      <li><a>Components</a></li>
                      <li><a>Layout</a></li>
                    </ul>
                  </Container>
                </Tabs>
              </HeroFoot>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" size="large" color="info">\n' +
                  '\t<HeroHead>\n' +
                  '\t\t<Nav tag="header">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<NavLeft>\n' +
                  '\t\t\t\t\t<NavItem>\n' +
                  '\t\t\t\t\t\t<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavLeft>\n' +
                  '\t\t\t\t<NavToggle>\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t</NavToggle>\n' +
                  '\t\t\t\t<NavRight navMenu>\n' +
                  '\t\t\t\t\t<NavItem active>Home</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Example</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Documentation</NavItem>\n' +
                  '\t\t\t\t\t<NavItem tag="span">\n' +
                  '\t\t\t\t\t\t<Button color="primary" inverted>\n' +
                  '\t\t\t\t\t\t\t<Icon name="github" />\n' +
                  '\t\t\t\t\t\t\t<span>Download</span>\n' +
                  '\t\t\t\t\t\t</Button>\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavRight>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Nav>\n' +
                  '\t</HeroHead>\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Hero title</Title>\n' +
                  '\t\t\t<Subtitle>Hero subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '\t<HeroFoot>\n' +
                  '\t\t<Tabs tag="nav" fullWidth style="boxed">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<ul>\n' +
                  '\t\t\t\t\t<li className="is-active"><a>Overview</a></li>\n' +
                  '\t\t\t\t\t<li><a>Modifiers</a></li>\n' +
                  '\t\t\t\t\t<li><a>Grid</a></li>\n' +
                  '\t\t\t\t\t<li><a>Elements</a></li>\n' +
                  '\t\t\t\t\t<li><a>Components</a></li>\n' +
                  '\t\t\t\t\t<li><a>Layout</a></li>\n' +
                  '\t\t\t\t</ul>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Tabs>\n' +
                  '\t</HeroFoot>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Hero tag="section" size="fullheight" color="success">
              <HeroHead>
                <Nav tag="header">
                  <Container>
                    <NavLeft>
                      <NavItem>
                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
                      </NavItem>
                    </NavLeft>
                    <NavToggle>
                      <span />
                      <span />
                      <span />
                    </NavToggle>
                    <NavRight navMenu>
                      <NavItem active>Home</NavItem>
                      <NavItem>Example</NavItem>
                      <NavItem>Documentation</NavItem>
                      <NavItem tag="span">
                        <Button color="primary" inverted>
                          <Icon name="github" />
                          <span>Download</span>
                        </Button>
                      </NavItem>
                    </NavRight>
                  </Container>
                </Nav>
              </HeroHead>
              <HeroBody>
                <Container textCenter>
                  <p className="title">
                    Title
                  </p>
                  <p className="subtitle">
                    Subtitle
                  </p>
                </Container>
              </HeroBody>
              <HeroFoot>
                <Tabs tag="nav" fullWidth style="boxed">
                  <Container>
                    <ul>
                      <li className="is-active"><a>Overview</a></li>
                      <li><a>Modifiers</a></li>
                      <li><a>Grid</a></li>
                      <li><a>Elements</a></li>
                      <li><a>Components</a></li>
                      <li><a>Layout</a></li>
                    </ul>
                  </Container>
                </Tabs>
              </HeroFoot>
            </Hero>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Hero tag="section" size="fullheight" color="success">\n' +
                  '\t<HeroHead>\n' +
                  '\t\t<Nav tag="header">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<NavLeft>\n' +
                  '\t\t\t\t\t<NavItem>\n' +
                  '\t\t\t\t\t\t<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavLeft>\n' +
                  '\t\t\t\t<NavToggle>\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t\t<span />\n' +
                  '\t\t\t\t</NavToggle>\n' +
                  '\t\t\t\t<NavRight navMenu>\n' +
                  '\t\t\t\t\t<NavItem active>Home</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Example</NavItem>\n' +
                  '\t\t\t\t\t<NavItem>Documentation</NavItem>\n' +
                  '\t\t\t\t\t<NavItem tag="span">\n' +
                  '\t\t\t\t\t\t<Button color="primary" inverted>\n' +
                  '\t\t\t\t\t\t\t<Icon name="github" />\n' +
                  '\t\t\t\t\t\t\t<span>Download</span>\n' +
                  '\t\t\t\t\t\t</Button>\n' +
                  '\t\t\t\t\t</NavItem>\n' +
                  '\t\t\t\t</NavRight>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Nav>\n' +
                  '\t</HeroHead>\n' +
                  '\t<HeroBody>\n' +
                  '\t\t<Container>\n' +
                  '\t\t\t<Title>Hero title</Title>\n' +
                  '\t\t\t<Subtitle>Hero subtitle</Subtitle>\n' +
                  '\t\t</Container>\n' +
                  '\t</HeroBody>\n' +
                  '\t<HeroFoot>\n' +
                  '\t\t<Tabs tag="nav" fullWidth style="boxed">\n' +
                  '\t\t\t<Container>\n' +
                  '\t\t\t\t<ul>\n' +
                  '\t\t\t\t\t<li className="is-active"><a>Overview</a></li>\n' +
                  '\t\t\t\t\t<li><a>Modifiers</a></li>\n' +
                  '\t\t\t\t\t<li><a>Grid</a></li>\n' +
                  '\t\t\t\t\t<li><a>Elements</a></li>\n' +
                  '\t\t\t\t\t<li><a>Components</a></li>\n' +
                  '\t\t\t\t\t<li><a>Layout</a></li>\n' +
                  '\t\t\t\t</ul>\n' +
                  '\t\t\t</Container>\n' +
                  '\t\t</Tabs>\n' +
                  '\t</HeroFoot>\n' +
                  '</Hero>'
                }
              </PrismCode>
            </pre>
          </figure>
        </Section>
      </div>
    );
  }
}
