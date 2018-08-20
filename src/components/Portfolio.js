import React from 'react'
import { Header, Container, Grid, Image } from 'semantic-ui-react'
import ThemeSection from './shared/ThemeSection'
import ThemeHeader from './shared/ThemeHeader'


import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const Portfolio = () => (
  <ThemeSection>
    <Container>
      <ThemeHeader as='h1'>A few accomplishments</ThemeHeader>
      <p>
        Integer eu ante ornare amet commetus vestibulum blandit integer in curae
        ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.
      </p>

      <Grid divided='vertically'>
        <Grid.Row column={2}>
          <Grid.Column width={6}>
            <Image src={pic01} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header sub>
              Possibly broke spacetime
            </Header>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac
              faucibus integer adipiscing ornare amet.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row column={2}>
          <Grid.Column width={6}>
            <Image src={pic02} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header sub>
              Terraformed a small moon
            </Header>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac
              faucibus integer adipiscing ornare amet.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row column={2}>
          <Grid.Column width={6}>
            <Image src={pic03} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header sub>
              Snapped dark matter in the wild
            </Header>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac
              faucibus integer adipiscing ornare amet.
            </p>
          </Grid.Column>
        </Grid.Row>

      </Grid>


    </Container>
  </ThemeSection>
)

export default Portfolio
