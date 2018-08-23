import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Link } from 'gatsby'
import { Sidebar, Menu, Header, Image } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import bear from '../images/bear.jpg'

const ThemeSidebarImage = styled(Image)`
  border-radius: 100%;
  margin: 0 auto 2.25em auto;
  ${'' /* width: 100%; */}
`;

const ThemeSidebar = styled(Sidebar)`
  &&& {
    background: #4acaa8;
    border: none;
    ${'' /* color: #d2f2e9; */}
  }
`;

const ThemeSidebarMenuItem = styled(Menu.Item)`
  &&&& {

    &:hover {
      background: ${props => props.first ? '' : 'white'};
    }
  }
`;

const IndexPage = () => (
  <div>

    <Sidebar.Pushable>
      <ThemeSidebar
        as={Menu}
        animation='push'
        icon='labeled'
        direction='right'
        // onHide={this.handleSidebarHide}
        vertical
        visible={true}
        width='wide'
      >
        <ThemeSidebarMenuItem>
          <div>
            <div>
              <ThemeSidebarImage src={bear} />
            </div>
            <Header as="h3">
              Willis Corto
            </Header>
            <p>
              I got reprogrammed by a rogue AI and now I'm totally cray
            </p>
          </div>
        </ThemeSidebarMenuItem>
        <ThemeSidebarMenuItem as='a'>
          About
        </ThemeSidebarMenuItem>
        <ThemeSidebarMenuItem as='a'>
          Things I Can Do
        </ThemeSidebarMenuItem>
        <ThemeSidebarMenuItem as='a'>
          A Few Accomplishments
        </ThemeSidebarMenuItem>
        <ThemeSidebarMenuItem as='a'>
          Contact
        </ThemeSidebarMenuItem>
      </ThemeSidebar>

      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Sidebar.Pushable>
  </div>
)

export default IndexPage
