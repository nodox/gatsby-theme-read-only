import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Link } from 'gatsby'
import { Sidebar, Menu, Header, Image, Icon } from 'semantic-ui-react'
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
  width: 35%;
`;

const ThemeSidebar = styled(Sidebar)`
  &&&&& {
    ${'' /* width: 25rem; */}
    background: #4acaa8;
    border: none;

    -webkit-box-shadow: 0;
    box-shadow: 0;

    ${'' /* @media(min-width: 768px) {
      width: 27rem;
    }

    @media(min-width: 992px) {
      width: 23rem;
    }

    @media(min-width: 1200px) {
    } */}

  }
`;

const SidebarMenuButton = styled.div`
  ${'' /* position: absolute;
  top: 1%;
  right: 5%; */}

  font-size: 2rem;
  z-index: 20;
`;

const ThemeSidebarMenuItem = styled(Menu.Item)`
  &&&& {
    color: white;

    &:hover {
      background: white;
      color: #4acaa8;
    }


    ${props => props.noHover && css`
      color: #d2f2e9;

      &:hover {
        background: #4acaa8;
        color: #d2f2e9;
      }

    `}
  }
`;

class IndexPage extends React.Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })


  render() {
    const { visible } = this.state

    return (
      <div>
        <Sidebar.Pushable>
          <ThemeSidebar
            as={Menu}
            animation='push'
            icon='labeled'
            direction='right'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='wide'
          >

            <ThemeSidebarMenuItem noHover="true">
              <div>
                <ThemeSidebarImage src={bear} />
              </div>
              <Header as="h3">
                Willis Corto
              </Header>
              <p>
                I got reprogrammed by a rogue AI and now I'm totally cray
              </p>
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

          <Sidebar.Pusher>
            <Menu inverted>
              <Menu.Item
                position='right'
                onClick={this.handleButtonClick}
                style={{ 'background': '#4acaa8' }}
              >
                <Icon name="sidebar" />
              </Menu.Item>

            </Menu>

            <Banner />

            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }

}

export default IndexPage
