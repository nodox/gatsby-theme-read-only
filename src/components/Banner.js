import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import banner from '../images/banner.jpg'


const ThemeSegment = styled(Segment)`
  &&& {
    padding: 0;
    border-bottom: 0;
  }
`

const Banner = (props) => (
  <ThemeSegment vertical>
    <Image src={banner} />
  </ThemeSegment>
)

export default Banner
