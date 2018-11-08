import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
    width: 30vw;
`

export default class SearchBar extends Component {
  render() {
    return (
    <StyledSearch>
       
       <input type='text' placeholder='City, State or Zip Code'></input> 

       {/* <input type='radio' name='animal' value='Cat'> Cat </input>
       <input type='radio'> </input> */}
    

      </StyledSearch>
    )
  }
}
