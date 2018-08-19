import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import banner from '../images/banner.jpg'

const Banner = () => (
  <Segment vertical>
    <Image src={banner} />
  </Segment>
)

export default Banner
