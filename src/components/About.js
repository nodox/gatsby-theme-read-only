import React from 'react'
import { Container } from 'semantic-ui-react'

import ThemeSection from './shared/ThemeSection'
import ThemeHeader from './shared/ThemeHeader'


const About = () => (
  <ThemeSection>
    <Container>
      <ThemeHeader as='h1'>
        Read Only
      </ThemeHeader>
      <p>
        Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
        Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus
        commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies
        non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit
        integer in curae ac faucibus integer non. Adipiscing cubilia elementum.
      </p>
    </Container>
  </ThemeSection>
)

export default About
