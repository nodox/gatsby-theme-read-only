import React from 'react'
import { List, Container } from 'semantic-ui-react'

const Footer = () => (
  <Container>
    <List horizontal divided>
      <List.Item disabled href='#'>
        © Untitled. All rights reserved.
      </List.Item>
      <List.Item href='#'>Design: HTML5 UP</List.Item>
      <List.Item href='#'>Demo Images: Unsplash</List.Item>
    </List>

  </Container>
)

export default Footer
