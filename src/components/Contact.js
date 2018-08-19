import React from 'react'
import { Header, Container, Form } from 'semantic-ui-react'

const About = () => (
  <Container>
    <Header as='h1'>Contact Me</Header>
    <p>
      Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
      Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus
      commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies
      non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit
      integer in curae ac faucibus integer non. Adipiscing cubilia elementum.
    </p>
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid placeholder='Name' />
        <Form.Input fluid placeholder='Email' />
      </Form.Group>
      <Form.Input fluid placeholder='Subject' />
      <Form.TextArea label='Body' placeholder='Message...' />
      <Form.Button>Submit</Form.Button>
    </Form>
  </Container>
)

export default About
