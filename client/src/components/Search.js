import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}
