import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

const StyledNav = styled.div`
    width: 100%;
    height: 70px;
    background: lightgray;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-content: space-between;
    border-bottom: 1px solid darkgray;
    

    p {
      color: black;
      font-size: 35px;
      font-weight: 200;
      letter-spacing: 0.2em;
      text-transform: lowercase;
      margin-top: 10px;
      font-family: 'Raleway', sans-serif;
      padding-left: 20px;
      padding-right: 20px;
      text-decoration: none;
    }
    img {
      width: 7vw;
      
    }

    a {
      text-decoration: none;
    }
`

export default class navbar extends Component {
  render() {
    return (
      <StyledNav>
        <a href='/'><p>Fur Babies</p></a>
      </StyledNav>
    )
  }
}
