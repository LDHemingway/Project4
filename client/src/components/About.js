import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`

.container {
  img {
    margin: 0 auto;
    align-self: center;
    width: 100vw;
  }
  .text {
    position: absolute;
    color: white;
    top: 20vh;
    right: 5vw;
    align-self: right;
    width: 30vw;
    font-size: 5vw;
    text-shadow: 1px 1px darkgray;
    text-align: right;
    font-weight: 200;
  }
  #icon {
    color: lightgray;
    font-size: 2vw;
  }
}
` 

export default class About extends Component {
  render() {
    return (
    <StyledAbout>
    <div class="container">
      <img src='https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8cfec93c89f00ae9bbc2e96a0e4bbd01&auto=format&fit=crop&w=1150&q=80' alt='pets' />
      <div class="text">Support local animal shelters while finding your next furry companion.</div>
      <i class="fas fa-arrow-down" id="icon"></i>
    </div>
    </StyledAbout>
    )
  }
}
