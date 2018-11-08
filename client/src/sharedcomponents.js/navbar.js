import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
    width: 100%;
`

export default class navbar extends Component {
  render() {
    return (
      <StyledNav>
        <h4>Project Name</h4>
      </StyledNav>
    )
  }
}
