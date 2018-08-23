import React from 'react'
import styled, { css } from 'styled-components'

const ThemeSidebar = styled.section`
  padding: 3rem 0;
  border-bottom: solid 6px #f4f4f4;

  ${props => props.last && css`
    border-bottom: none;
  `}
`

export default ThemeSidebar
