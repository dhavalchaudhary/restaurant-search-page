import React from 'react'
import { SearchBox } from 'react-instantsearch-dom'
import './header.css'

export const Header = () => (
  <header className="header">
    <div className="content-width">
      <h1 className="header-title">Restaurant Search Page</h1>
      <SearchBox
        className="header-search-box"
        translations={{
          placeholder: 'Search for a restaurant or cuisine'
        }}
      />
    </div>
  </header>
)
