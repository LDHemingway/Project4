import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
    width: 100%;
    height: 50px;
    background: lightgray;
    display: flex;
    justify-content: space-between;

    h4 {
      color: white;
      font-size: 25px;
      padding-bottom: 10px;
    }
    img {
      
    }
`

export default class navbar extends Component {
  render() {
    return (
      <StyledNav>
        <h4>Fur Babies</h4>
        <img src='http://www.acelerastartups.com/br/wp-content/themes/yeti-bootstrap/templates-land-pages/assets/plugins/ionicons/src/ios-paw.svg' alt='paw' />
      </StyledNav>
    )
  }
}
