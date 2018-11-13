import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #5b362c;
    color: white;
    text-align: center;
    font-size: 40px;
    display: flex;
    justify-content: center;

    #icon {
        padding: 10px;
    }

`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <i className="fab fa-instagram" id="icon"></i>
        <i className="fab fa-facebook-f" id="icon"></i>
        <i class="far fa-envelope" id="icon"></i>
      </StyledFooter>
    )
  }
}
