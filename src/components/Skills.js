import React from 'react'
import { Header, Container, List, Grid } from 'semantic-ui-react'

const Skills = () => (
  <Container>
    <Header as='h1'>Things I Can Do</Header>
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
)

export default Skills
