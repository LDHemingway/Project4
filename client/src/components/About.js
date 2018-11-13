import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`

.container {
  img {
    margin: 0 auto;
    align-self: center;
    width: 100vw;
  }
}
` 

export default class About extends Component {
  render() {
    return (
    <StyledAbout>
    <div class="container">
      <img src='https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8cfec93c89f00ae9bbc2e96a0e4bbd01&auto=format&fit=crop&w=1150&q=80' alt='pets' />
    </div>
    </StyledAbout>
    )
  }
}
