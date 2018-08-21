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
        direction='right'
        // onHide={this.handleSidebarHide}
        vertical
        visible={false}
        width='wide'
      >
        <Menu.Item as='a'>
          About
        </Menu.Item>
        <Menu.Item as='a'>
          Things I Can Do
        </Menu.Item>
        <Menu.Item as='a'>
          A Few Accomplishments
        </Menu.Item>
        <Menu.Item as='a'>
          Contact
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
