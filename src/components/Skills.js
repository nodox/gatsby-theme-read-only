import React from 'react'
import { Header, Container, List, Grid } from 'semantic-ui-react'
import ThemeSection from './shared/ThemeSection'
import ThemeHeader from './shared/ThemeHeader'


const Skills = () => (
  <ThemeSection>
    <Container>
      <ThemeHeader as='h1'>Things I Can Do</ThemeHeader>
      <p>
        Integer eu ante ornare amet commetus vestibulum blandit integer in curae
        ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.
      </p>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                  Write all the code
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </ThemeSection>
)

export default Skills
