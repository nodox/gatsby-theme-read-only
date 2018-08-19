import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Link } from 'gatsby'
import { Sidebar, Menu } from 'semantic-ui-react'


import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const IndexPage = () => (
  <div>

    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        direction='right'
        // onHide={this.handleSidebarHide}
        vertical
        visible={true}
        width='wide'
      >
        <Menu.Item as='a'>
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          Channels
        </Menu.Item>
      </Sidebar>
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
