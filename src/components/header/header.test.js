import { render, screen } from '@testing-library/react'
import React from 'react'
import { Header } from './header'

jest.mock('react-instantsearch-dom', () => ({
  SearchBox: ({ translations }) => (
    <input placeholder={translations.placeholder} />
  )
}))

describe('Header', () => {
  it('renders the page title and the search bar', () => {
    render(<Header />)
    expect(screen.getByText(/Restaurant Search Page/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Search for a restaurant or cuisine/i)
    ).toBeInTheDocument()
  })
})
